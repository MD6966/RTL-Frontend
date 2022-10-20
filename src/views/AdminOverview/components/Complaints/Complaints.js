import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { makeConfig } from 'store/actions';
import moment from 'moment';
import { createMuiTheme, ButtonGroup, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import { blue } from '@material-ui/core/colors';
import { ComplaintModal, StatusSelect } from './components';

const materialTheme = createMuiTheme({
  type: 'dark',
  palette: {
    primary: blue
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  label: {
    backgroundColor: theme.palette.background.paper
  },
  results: {
    marginTop: theme.spacing(3)
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  },
  heading: {
    marginBottom: theme.spacing()
  }
}));

const Complaints = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [isLoading, setLoading] = useState(true);

  const [table, setTable] = useState([]);
  const [title, setTitle] = useState('Complaints');

  const columns = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'complaint',
      label: 'Complaint',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <ComplaintModal complaint={value} />
        )
      }
    },
    {
      name: 'created_at',
      label: 'Date'
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <StatusSelect data={value} />
        )
      }
    }
  ];

  const handleCalendarOpen = (edge) => {
    setSelectEdge(edge);
  };

  const handleCalendarChange = (date) => {
    setCalendarDate(date);
  };

  const handleCalendarClose = () => {
    setCalendarDate(moment());
    setSelectEdge(null);
  };

  const handleCalendarAccept = (date) => {
    setCalendarDate(moment());

    if (selectEdge === 'start') {
      setStartDate(date);
      if (moment(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);
      if (moment(date).isBefore(startDate)) {
        setStartDate(date);
      }
    }

    setSelectEdge(null);
  };

  const open = Boolean(selectEdge);

  const doFoo = async () => {
    setLoading(true);

    const config = await makeConfig('application/json');

    const body = {
      startDate,
      endDate
    };

    axios
      .post(`${process.env.REACT_APP_URL}admin/complaints`, body, config)
      .then((data) => {
        setTable(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };

  useEffect(() => {
    doFoo();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
    fixedHeaderOptions: {
      xAxis: false,
      yAxis: true
    }
  };

  return (
    <Grid container>
      <Grid item lg={12} xl={12} xs={12}>
        <Typography variant="h2" className={classes.heading}>
          Complaints:
        </Typography>
      </Grid>
      <Grid item lg={12} xl={12} xs={12} md={12}>
        <ButtonGroup className={classes.results} variant="outlined">
          <Button onClick={() => handleCalendarOpen('start')}>
            <CalendarTodayIcon className={classes.calendarTodayIcon} />
            {startDate.format('DD MM YYYY')}
          </Button>
          <Button onClick={() => handleCalendarOpen('end')}>
            <CalendarTodayIcon className={classes.calendarTodayIcon} />
            {endDate.format('DD MM YYYY')}
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item lg={12} xl={12} xs={12}>
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          <div className={classes.results}>
            <MUIDataTable
              columns={columns}
              data={table}
              options={options}
              title={title}
            />
          </div>
        )}
      </Grid>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          maxDate={moment()}
          onAccept={handleCalendarAccept}
          onChange={handleCalendarChange}
          onClose={handleCalendarClose}
          open={open}
          style={{ display: 'none' }} // Temporal fix to hide the input element
          value={calendarDate}
          variant="dialog"
        />
      </ThemeProvider>
    </Grid>
  );
};

export default Complaints;
