import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { Button, ButtonGroup, CircularProgress, Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { temp_Log } from 'store/actions/temperature_Actions';

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
  const { sensor } = props;
  console.log('ssssss', sensor);
  const temp = useSelector((state) => state.temp.temp);
  const index = temp.findIndex((f) => f._id === id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tableType, setTableType] = useState('temperature');
  const [startDate, setStartDate] = useState(moment().subtract(1, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const data = useSelector(
    (state) => state.temp.temp[index].logs.data
  );
  const fans = useSelector((state) => state.temp.temp[index].fans);
  const [fan, setFan] = useState(fans[0]._id);
  
  // const title = useSelector(
  //   (state) => state.temperature.temperature[index].logs.title
  // );
  const columns = useSelector(
    (state) => state.temp.temp[index].logs.columns
  );
  const Loading = useSelector(
    (state) => state.temp.logsLoading
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
  const handleChangeFan = async (event) => {
    await setFan(event.target.value);
    console.log('fan event', event.target.value);
    dispatch(temp_Log(id, event.target.value, tableType, startDate, endDate));
  };

  const open = Boolean(selectEdge);

  useEffect(() => {
    dispatch(temp_Log(id, fan, tableType, startDate, endDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableType, startDate, endDate]);

  return (
    <Grid container spacing="3">
      <Grid item lg={4} xl={4} xs={12} md={6} sm={12}>
        <ButtonGroup
          className={classes.results}
          variant="outlined"
          color="secondary">
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
        lg={4}
        md={6}
        sm={12}
        xl={4}
        xs={12}
      >
        <FormControl
          className={classes.results}
          fullWidth
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
            <MenuItem value="temperature">Temperature Logs</MenuItem>
            <MenuItem value="fan_status">Fan Status Logs</MenuItem>
            <MenuItem value="fan_interval">Fan Inetrval Logs</MenuItem>
          </Select>
        </FormControl>        
      </Grid>
      {
          tableType === 'fan_interval' ? (
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xl={4}
              xs={12}
            >
            <FormControl
              className={classes.results}
              fullWidth
              variant="outlined"
            >
              <InputLabel
                className={classes.label}
                id="demo-simple-select-outlined-label"
                ref={inputLabel}
              >
                Fan
              </InputLabel>
              <Select
                id="demo-simple-select-outlined"
                onChange={handleChangeFan}
                value={fan}
                defaultValue={fan}
              >
                {
                  fans.map((fan, index) => (
                    <MenuItem value={fan._id}>{fan.name}</MenuItem>
                  ))
                }
                
              </Select>
            </FormControl>
            </Grid>
          ) : (
            null
          )
        }

      <Grid item lg={12} xl={12} xs={12}>
        {Loading ? (
          <CircularProgress color="secondary" />
        ) : Loading && data.length === 0 ? null : (
          <div className={classes.results}>
            <MUIDataTable
              columns={columns}
              data={data}
              options={options}
              // title={title}
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
