/* eslint-disable linebreak-style */
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import gradients from 'utils/gradients';
import { TimePicker } from '@material-ui/pickers';
import { setRoutine } from 'store/actions/lightAction';
import { setSegStartTime, setSegEndTime, setDimHighStartTime, setDimHighEndTime, setDimMediumStartTime, setDimMediumEndTime, setDimLowStartTime, setDimLowEndTime } from 'store/actions/lightAction';
 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.white,
    boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)',
    borderRadius: '30px'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  container: {
    marginTop: theme.spacing(3)
  },
  custom_enable_button: {
    textAlign: 'center'
  },
  content: {
    flexGrow: 1
  },
}));

const Schedule = (props) => {
  const { className, id, sensor, ...rest } = props;
  const hl = useSelector((state) => state.hl.light);
  const index = hl.findIndex((f) => f._id === id);
  const classes = useStyles();
  const dispatch = useDispatch();

  /* Start and End Time State */
  const [offTimeFrom, setOffTimeFrom] = useState(sensor.seg_startTime);
  const [offTimeTo, setOffTimeTo] = useState(sensor.seg_endTime);
  const [oneTimeFrom, setOneTimeFrom] = useState(sensor.dim_high_strtime);
  const [oneTimeTo, setOneTimeTo] = useState(sensor.dim_high_endtime);
  const [secondTimeFrom, setSecondTimeFrom] = useState(sensor.dim_medium_strtime);
  const [secondTimeTo, setSecondTimeTo] = useState(sensor.dim_medium_endtime);
  const [thirdTimeFrom, setThirdTimeFrom] = useState(sensor.dim_low_strtime);
  const [thirdTimeTo, setThirdTimeTo] = useState(sensor.dim_low_endtime);

  /* Segment Start and End Time State COPY */
  const [segOffTimeFrom, setSegOffTimeFrom] = useState(sensor.seg_startTime);
  const [segOffTimeTo, setSegOffTimeTo] = useState(sensor.seg_endTime);
  const [routineOneTimeFrom, setRoutineOneTimeFrom] = useState(sensor.dim_high_strtime);
  const [routineOneTimeTo, setRoutineOneTimeTo] = useState(sensor.dim_high_endtime);
  const [routineSecondTimeFrom, setRoutineSecondTimeFrom] = useState(sensor.dim_medium_strtime);
  const [routineSecondTimeTo, setRoutineSecondTimeTo] = useState(sensor.dim_medium_endtime);
  const [routineThirdTimeFrom, setRoutineThirdTimeFrom] = useState(sensor.dim_low_strtime);
  const [routineThirdTimeTo, setRoutineThirdTimeTo] = useState(sensor.dim_low_endtime);

  /* Enable / Disable Buttons State */
  const [enableOff, setEnableOff] = useState(sensor.seg_routineEnable);
  const [enableOne, setEnableOne] = useState(sensor.dim_high_routineEnable);
  const [enableSecond, setEnableSecond] = useState(sensor.dim_medium_routineEnable);
  const [enableThird, setEnableThird] = useState(sensor.dim_low_routineEnable);

  /* handle changes Seg start time */
  const startTimeChange = (value) => {
    dispatch(setSegStartTime(id,value))
    setOffTimeFrom(value);
    setSegOffTimeFrom(value);
    if (enableOff === true) {
      dispatch(setRoutine(id,offTimeFrom, offTimeTo, 'segment', false));
      setEnableOff(false)
    }
  };

  /* handle changes Seg end time */
  const endTimeChange = (value) => {
    dispatch(setSegEndTime(id,value))
    setOffTimeTo(value);
    setSegOffTimeTo(value);
    if (enableOff === true) {
      dispatch(setRoutine(id,offTimeFrom, offTimeTo, 'segment', false));
      setEnableOff(false)
    }
  };

  /* handle changes dim 100% start time */
  const dimHighStartTimeChange = (value) => {
    dispatch(setDimHighStartTime(id,value))
    setOneTimeFrom(value);
    setRoutineOneTimeFrom(value);
    if (enableOne === true) {
      dispatch(setRoutine(id,oneTimeFrom, oneTimeTo, 'dim_high', false));
      setEnableOne(false)
    }
  };

  /* handle changes dim 100% end time */
  const dimHighEndTimeChange = (value) => {
    dispatch(setDimHighEndTime(id,value))
    setOneTimeTo(value);
    setRoutineOneTimeTo(value);
    if (enableOne === true) {
      dispatch(setRoutine(id,oneTimeFrom, oneTimeTo, 'dim_high', false));
      setEnableOne(false)
    }
  };

  /* handle changes dim 75% start time */
  const dimMediumStartTimeChange = (value) => {
    dispatch(setDimMediumStartTime(id,value))
    setSecondTimeFrom(value);
    setRoutineSecondTimeFrom(value);
    if (enableSecond === true) {
      dispatch(setRoutine(id,secondTimeFrom, secondTimeTo, 'dim_medium', false));
      setEnableSecond(false)
    } 
  };

  /* handle changes dim 75% end time */
  const dimMediumEndTimeChange = (value) => {
    dispatch(setDimMediumEndTime(id,value))
    setSecondTimeTo(value);
    setRoutineSecondTimeTo(value);
    if (enableSecond === true) {
      dispatch(setRoutine(id,secondTimeFrom, secondTimeTo, 'dim_medium', false));
      setEnableSecond(false)
    }
  };

  /* handle changes dim 50% start time */
  const dimLowStartTimeChange = (value) => {
    dispatch(setDimLowStartTime(id,value))
    setThirdTimeFrom(value);
    setRoutineThirdTimeFrom(value);
    if (enableThird === true) {
      dispatch(setRoutine(id,thirdTimeFrom, thirdTimeTo, 'dim_low', false));
      setEnableThird(false)
    }
  };

  /* handle changes dim 50% end time */
  const dimLowEndTimeChange = (value) => {
    dispatch(setDimLowEndTime(id,value))
    setThirdTimeTo(value);
    setRoutineThirdTimeTo(value);
    if (enableThird === true) {
      dispatch(setRoutine(id,thirdTimeFrom, thirdTimeTo, 'dim_low', false));
      setEnableThird(false)
    }
  };

  /* Set Routine Api on enable / disable button for segment on/off */
  const handleOff = () => {
    // if (offTimeFrom === null || offTimeTo === null) {
  
    // }
    if (enableOff === false){
      setEnableOff(true)
      dispatch(setRoutine(id,offTimeFrom, offTimeTo, 'segment', true));
    } else if (enableOff === true){
      setEnableOff(false)
      dispatch(setRoutine(id,offTimeFrom, offTimeTo, 'segment', false));
    }
  };

  /* Set Routine Api on enable / disable button for dim 100% */
  const handleOne = () => {
    if (enableOne === false){
      dispatch(setRoutine(id,oneTimeFrom, oneTimeTo, 'dim_high', true));
      setEnableOne(true)
    } else if (enableOne === true){
      dispatch(setRoutine(id,oneTimeFrom, oneTimeTo, 'dim_high', false));
      setEnableOne(false)
    }
  };

  /* Set Routine Api on enable / disable button for dim 75% */
  const handleSecond = () => {
    if (enableSecond === false){
      setEnableSecond(true)
      dispatch(setRoutine(id,secondTimeFrom, secondTimeTo, 'dim_medium', true));
    } else if (enableSecond === true){
      setEnableSecond(false)
      dispatch(setRoutine(id,secondTimeFrom, secondTimeTo, 'dim_medium', false));
    }
    
  };

  /* Set Routine Api on enable / disable button for dim 50% */
  const handleThird = () => {
    if (enableThird === false){
      setEnableThird(true)
      dispatch(setRoutine(id,thirdTimeFrom, thirdTimeTo, 'dim_low', true));
    } else if (enableThird === true){
      setEnableThird(false)
      dispatch(setRoutine(id,thirdTimeFrom, thirdTimeTo, 'dim_low', false));
    }
    
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        className={classes.container}
        container
        spacing={2}
        style={{width: 'calc(100% + -10px)', margin: '5px 5px 5px 25px'}}
      >
        <Grid
          item
          lg={12}
          sm={12}
          style={{paddingLeft: '0px'}}
          xs={12}
        >
          <div className={classes.content}>
            <Typography
              component="h3"
              gutterBottom
              style={{fontSize: '22px'}}
              variant="overline"
            >Routines</Typography>
          </div>
        </Grid>
        <Grid
          className={classes.container}
          container
          spacing={2}
          style={{marginBottom: '25px'}}
        >
          <Typography
            style={{paddingBottom: '20px'}}
            variant="h5"
          >Set Time for Routine (Segment OFF)</Typography>
          <Grid
            item
            lg={9}
            sm={12}
            xs={12}
          >
            <TimePicker
              label="From"
              minutesStep={1}
              onChange={(text) => startTimeChange(text)}
              showTodayButton
              style={{marginRight: '75px'}}
              todayLabel="now"
              value={sensor.seg_routineEnable === true ? (sensor.seg_startTime):(segOffTimeFrom)}
              // value={sensor.seg_startTime}
              
            />
            <TimePicker
              label="To"
              minutesStep={1}
              onChange={(text) => endTimeChange(text)}
              showTodayButton
              todayLabel="now"
              // value={sensor.seg_endTime}
              value={sensor.seg_routineEnable === true ? (sensor.seg_endTime):(segOffTimeTo)}
            />
          </Grid>
          <Grid
            className={classes.custom_enable_button}
            item
            lg={3}
            sm={12}
            xs={12}
          >
            <Button 
              color={
                enableOff === false ? 'primary' : 'secondary'
              }
              onClick={handleOff}
              variant="contained" 
            >
              {enableOff === false ? (
                <Typography style={{color: '#ffffff'}}>Enable</Typography>
              ) : (
                <Typography style={{color: '#ffffff'}}>Disable</Typography>
              )}
            </Button>
          </Grid>
        </Grid>

        <Grid
          className={classes.container}
          container
          spacing={2}
          style={{marginBottom: '25px'}}
        >
          <Typography
            style={{paddingBottom: '20px'}}
            variant="h5"
          >Set Time for Routine (Brightness 100%)</Typography>
          <Grid
            item
            lg={9}
            sm={12}
            xs={12}
          >
            <TimePicker
              label="From"
              minutesStep={1}
              onChange={(text) => dimHighStartTimeChange(text)}
              showTodayButton
              style={{marginRight: '75px'}}
              todayLabel="now"
              // value={sensor.dim_high_strtime}
              value={sensor.dim_high_routineEnable === true ? (sensor.dim_high_strtime):(routineOneTimeFrom)}
            />
            <TimePicker
              label="To"
              minutesStep={1}
              onChange={(text) => dimHighEndTimeChange(text)}
              showTodayButton
              todayLabel="now"
              // value={sensor.dim_high_endtime}
              value={sensor.dim_high_routineEnable === true ? (sensor.dim_high_endtime):(routineOneTimeTo)}
            />
          </Grid>
          <Grid
            className={classes.custom_enable_button}
            item
            lg={3}
            sm={12}
            xs={12}
          >
            <Button
              color={
                enableOne === false ? 'primary' : 'secondary'
              }
              onClick={handleOne}
              variant="contained" 
            >
              {enableOne === false ? (
                <Typography style={{color: '#ffffff'}}>Enable</Typography>
              ) : (
                <Typography style={{color: '#ffffff'}}>Disable</Typography>
              )}
            </Button>
          </Grid>
        </Grid>

        <Grid
          className={classes.container}
          container
          spacing={2}
          style={{marginBottom: '25px'}}
        >
          <Typography
            style={{paddingBottom: '20px'}}
            variant="h5"
          >Set Time for Routine (Brightness 75%)</Typography>
          <Grid
            item
            lg={9}
            sm={12}
            xs={12}
          >
            <TimePicker
              label="From"
              minutesStep={1}
              onChange={(text) => dimMediumStartTimeChange(text)}
              showTodayButton
              style={{marginRight: '75px'}}
              todayLabel="now"
              // value={sensor.dim_medium_strtime}
              value={sensor.dim_medium_routineEnable === true ? (sensor.dim_medium_strtime):(routineSecondTimeFrom)}
            />
            <TimePicker
              label="To"
              minutesStep={1}
              onChange={(text) => dimMediumEndTimeChange(text)}
              showTodayButton
              todayLabel="now"
              // value={sensor.dim_medium_endtime}
              value={sensor.dim_medium_routineEnable === true ? (sensor.dim_medium_endtime):(routineSecondTimeTo)}
            />
          </Grid>
          <Grid
            className={classes.custom_enable_button}
            item
            lg={3}
            sm={12}
            xs={12}
          >
            <Button
              color={
                enableSecond === false ? 'primary' : 'secondary'
              }
              onClick={handleSecond}
              variant="contained" 
            >
              {enableSecond === false ? (
                <Typography style={{color: '#ffffff'}}>Enable</Typography>
              ) : (
                <Typography style={{color: '#ffffff'}}>Disable</Typography>
              )}
            </Button>
          </Grid>
        </Grid>

        <Grid
          className={classes.container}
          container
          spacing={2}
          style={{marginBottom: '25px'}}
        >
          <Typography
            style={{paddingBottom: '20px'}}
            variant="h5"
          >Set Time for Routine (Brightness 50%)</Typography>
          <Grid
            item
            lg={9}
            sm={12}
            xs={12}
          >
            <TimePicker
              label="From"
              minutesStep={1}
              onChange={(text) => dimLowStartTimeChange(text)}
              showTodayButton
              style={{marginRight: '75px'}}
              todayLabel="now"
              // value={sensor.dim_low_strtime}
              value={sensor.dim_low_routineEnable === true ? (sensor.dim_low_strtime):(routineThirdTimeFrom)}
            />
            <TimePicker
              label="To"
              minutesStep={1}
              onChange={(text) => dimLowEndTimeChange(text)}
              showTodayButton
              todayLabel="now"
              // value={sensor.dim_low_endtime}
              value={sensor.dim_low_routineEnable === true ? (sensor.dim_low_endtime):(routineThirdTimeTo)}
            />
          </Grid>
          <Grid
            className={classes.custom_enable_button}
            item
            lg={3}
            sm={12}
            xs={12}
          >
            <Button
              color={
                enableThird === false ? 'primary' : 'secondary'
              }
              onClick={handleThird}
              variant="contained" 
            >
              {enableThird === false ? (
                <Typography style={{color: '#ffffff'}}>Enable</Typography>
              ) : (
                <Typography style={{color: '#ffffff'}}>Disable</Typography>
              )}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

Schedule.propTypes = {
  className: PropTypes.string
};

export default Schedule;