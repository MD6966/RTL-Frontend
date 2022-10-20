/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import InputVoltageUpperThreshold from './components/InputVoltageUpperThreshold';
import InputVoltageLowerThreshold from './components/InputVoltageLowerThreshold';
import OutputVoltageLowerThreshold from './components/OutputVoltageLowerThreshold';
import OutputVoltageUpperThreshold from './components/OutputVoltageUpperThreshold';
import TheftVoltageThreshold from './components/TheftVoltageThreshold';
import BatteryLowerThreshold from './components/BatteryLowerThreshold';
import BatteryUpperThreshold from './components/BatteryUpperThreshold';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  },
}));

const RectifierMaintananceDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const dispatch = useDispatch();

 
  // useEffect(() => {
  //   // dispatch(getTubewellMaintananceData(sensor._id));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Typography
        style={{marginTop: '25px'}}
        variant="h3"
      >
        Rectifier Monitoring 
      </Typography>

      <Typography
        style={{marginTop: '25px'}}
        variant="h5"
      >
       Input Monitoring 
      </Typography>
      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{marginTop: '15px'}}
      >
        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
        >
          <InputVoltageLowerThreshold
            id={sensor._id}
            threshold={sensor.ac_lowerthreshold}
            type="ac_lowerthreshold"
          />
        </Grid>

        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
        >
          <InputVoltageUpperThreshold
            id={sensor._id}
            threshold={sensor.ac_upperthreshold}
            type="ac_upperthreshold"
          />
        </Grid>
      </Grid>

      <Typography
        style={{marginTop: '40px'}}
        variant="h5"
      >
        Output Monitoring
      </Typography>
      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{marginTop: '15px'}}
      >
        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
        >
          <OutputVoltageLowerThreshold
            id={sensor._id}
            threshold={sensor.rec_lowerthreshold}
            type="rec_lowerthreshold"
          />
        </Grid>

        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
        >
          <OutputVoltageUpperThreshold
            id={sensor._id}
            threshold={sensor.rec_upperthreshold}
            type="rec_upperthreshold"
          />
        </Grid>
      </Grid>

      <Typography
        style={{marginTop: '40px'}}
        variant="h3"
      >
     Battery Bank Monitoring
      </Typography>
      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{marginTop: '15px'}}
      >

        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
        >
          <TheftVoltageThreshold
            id={sensor._id}
            threshold={sensor.battery_theftThreshold}
            type="battery_theftThreshold"
          />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
        >
          <BatteryLowerThreshold
            id={sensor._id}
            threshold={sensor.battery_lowBatteryAlertThreshold}
            type="battery_lowBatteryAlertThreshold"
          />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
        >
          <BatteryUpperThreshold
            id={sensor._id}
            threshold={sensor.battery_maxVolageValue}
            type="battery_maxVolageValue"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default RectifierMaintananceDashboard;
