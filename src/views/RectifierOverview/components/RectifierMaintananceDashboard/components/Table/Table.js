/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { Button, ButtonGroup, CircularProgress, Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import { getFuelMaintananceTableData } from 'store/actions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

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
  results: {
    marginTop: theme.spacing(3)
  },
  label: {
    backgroundColor: theme.palette.background.paper
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Table = (props) => {
  
  const id = props.sensor._id;
  const fuel = useSelector((state) => state.fuel.fuel);
  const index = fuel.findIndex((f) => f._id === id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.fuel.maintananceTableLoading);
  const [tableType, setTableType] = useState('maintanance');
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const data = useSelector(
    (state) => state.fuel.fuel[index].maintanance.logs.data
  );
  const title = useSelector(
    (state) => state.fuel.fuel[index].maintanance.logs.title
  );
  const columns = useSelector(
    (state) => state.fuel.fuel[index].maintanance.logs.columns
  );
  const inputLabel = React.useRef(null);

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

  const handleChange = async (event) => {
    await setTableType(event.target.value);
  };

  const open = Boolean(selectEdge);

  useEffect(() => {
    dispatch(getFuelMaintananceTableData(tableType, id, startDate, endDate));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableType, startDate, endDate]);
   
  return (
    <Grid container>
      <Grid
        item
        lg={6}
        xl={6}
        xs={6}
      >
        <ButtonGroup
          className={classes.results}
          color="inherit"
          variant="outlined"
        >
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
      <Grid
        item
        lg={6}
        sm={6}
        xl={6}
        xs={6}
      >
        <FormControl
          className={classes.results}
          variant="outlined"
        >
          <InputLabel
            className={classes.label}
            id="demo-simple-select-outlined-label"
            ref={inputLabel}
          >
            Log Type
          </InputLabel>
          <Select
            id="demo-simple-select-outlined"
            onChange={handleChange}
            value={tableType}
          >
            <MenuItem value="maintanance">Fuel Maintanance Logs</MenuItem>
            <MenuItem value="oil">Oil Maintanance Logs</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        {isLoading || data == null ? (
          <CircularProgress color="secondary" />
        ) : (
          <div className={classes.results}>
            <MUIDataTable
              columns={columns}
              data={data}
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

export default Table;
