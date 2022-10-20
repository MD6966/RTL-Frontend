import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, ButtonGroup, CircularProgress } from '@material-ui/core';
import {
  ColorStatus,
  CameraStatus,
  RedDuration,
  GreenDuration,
  YellowDuration,
  OffDuration
} from './components';
import moment from 'moment';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import { DatePicker } from '@material-ui/pickers';
import axios from 'axios';
import { makeConfig } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const FuelDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());

  const [times, setTimes] = useState({
    redTime: null,
    greenTime: null,
    yellowTime: null,
    offTime: null,
    isLoading: true
  });

  useEffect(() => {
    getTimes(sensor._id, startDate, endDate);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarDate]);

  const getTimes = async (id, startDate, endDate) => {
    setTimes({
      ...times,
      isLoading: true
    });

    const config = await makeConfig('application/json');

    const body = {
      startDate,
      endDate
    };

    const data = await axios.post(
      `${process.env.REACT_APP_URL}led/duration/${id}`,
      body,
      config
    );

    setTimes({
      ...times,
      redTime: data.data.redTime,
      greenTime: data.data.greenTime,
      yellowTime: data.data.yellowTime,
      offTime: data.data.offTime,
      isLoading: false
    });
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

  const open = Boolean(selectEdge);

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item lg={6} sm={6} xs={6}>
        <ColorStatus color={sensor.color} />
      </Grid>
      <Grid item lg={6} sm={6} xs={6}>
        <CameraStatus camera={sensor.camera} />
      </Grid>
      <Grid item lg={12} md={12} xl={12} xs={12}>
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
      </Grid>
      {times.isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <Grid item lg={3} md={6} xl={3} xs={6}>
            <RedDuration duration={times.redTime} />
          </Grid>
          <Grid item lg={3} md={6} xl={3} xs={6}>
            <YellowDuration duration={times.yellowTime} />
          </Grid>
          <Grid item lg={3} md={6} xl={3} xs={6}>
            <GreenDuration duration={times.greenTime} />
          </Grid>
          <Grid item lg={3} md={6} xl={3} xs={6}>
            <OffDuration duration={times.offTime} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default FuelDashboardDefault;
