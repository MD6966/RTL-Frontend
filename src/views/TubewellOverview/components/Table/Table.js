/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { Button, ButtonGroup, CircularProgress, Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import { getTableData } from 'store/actions/tubewellAction';
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
  }
}));

const Table = (props) => {
  const id = props.sensor._id;
  const tubewell = useSelector((state) => state.tw.tubewell);
  const index = tubewell.findIndex((f) => f._id === id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tableType, setTableType] = useState('fillLevel');
  const [startDate, setStartDate] = useState(moment().subtract(1, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const data = useSelector((state) => state.tw.tubewell[index].logs.data);
 
  const title = useSelector((state) => state.tw.tubewell[index].logs.title);
  const columns = useSelector((state) => state.tw.tubewell[index].logs.columns);
  const isLoading = useSelector(
    (state) => state.tw.tubewell[index].logs.isLoading
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
    dispatch(getTableData(tableType, id, startDate, endDate));
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableType, startDate, endDate]);
  return (
    <Grid container>
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xl={6}
        xs={12}
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
        md={12}
        sm={12}
        xl={6}
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
            <MenuItem value="fillLevel">Fill Level Logs</MenuItem>
            <MenuItem value="t_lid">Tank Lid Status Logs</MenuItem>
            <MenuItem value="door_status">Door Status Logs</MenuItem>
            <MenuItem value="motor">Hydro Pump Status Logs</MenuItem>
            <MenuItem value="force-motor">Force Hydro Pump Status Logs</MenuItem>
            <MenuItem value="ph">PH Value Logs</MenuItem>
            <MenuItem value="tds">TDS Value Logs</MenuItem>
            <MenuItem value="alarm">Smoke Alarm Logs</MenuItem>
            <MenuItem value="w_maintanance">Filter Maintenance Logs</MenuItem>
            <MenuItem value="m_maintanance">Hydro Pump Maintenance Logs</MenuItem>
            <MenuItem value="phase_down">Main Line Status Logs</MenuItem>
            <MenuItem value="abnormal">Abnormal Current Logs</MenuItem>
            <MenuItem value="Ia">Line Current Logs</MenuItem>
            <MenuItem value="volve">Priming Logs</MenuItem>
            <MenuItem value="plvl">Priming Level Logs</MenuItem>
            <MenuItem value="vib">Pump Vibration Logs</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        {isLoading ? (
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
