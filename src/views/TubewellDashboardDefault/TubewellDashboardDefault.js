/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { DoorStatus, FillLevel, MotorCurrent, SmokeAlarmStatus, TdsValue, Threshold, TubeWellDoorStatus } from './components';

import Liters from './components/Liters/Liters';
import MotorStatus from './components/MotorStatus';
import PhValue from './components/PhValue/PhValue';
import MainLineStatus from './components/MainLineStatus';
import Priming from './components/Priming/Priming';
import PumpVibration from './components/PumpVibration';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const TubewellDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings} = props;

  return (
  <div >
    <Typography
      style={{marginTop: '25px'}}
      variant="h3"
    >
      Tank System
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
        <FillLevel
          fill={sensor.fillLevel}
          sensor={sensor}
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <MotorStatus
          id={sensor._id}
          sensor={sensor}
          status={sensor.motor}
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <Liters
          liters={((sensor.liters / 100) * sensor.fillLevel)}
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <DoorStatus status={sensor.t_lid}  />
      </Grid>
      
      
      {' '}
      
    </Grid>

    <Typography
      style={{marginTop: '40px'}}
      variant="h3"
    >
      Water Quality System
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
        <PhValue
          sensor={sensor}
          value={sensor.ph.toFixed(2)}
        />
        
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <TdsValue
          sensor={sensor}
          value={sensor.tds.toFixed(2)}
        />
      </Grid>
    </Grid>

    <Typography
      style={{marginTop: '40px'}}
      variant="h3"
    >
      Hydro Pump System
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
        <MainLineStatus status={sensor.phaseDown} />
        
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <MotorCurrent
          id={sensor._id}
          value={sensor.Ia.toFixed(2)}
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <Priming
          id={sensor._id}
          priming={sensor.volve}
          priminglvl={sensor.plvl}
        />
        
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <PumpVibration
          id={sensor._id}
          value={sensor.vib}
        />
      </Grid>
    </Grid>

    
    <Grid
      className={classes.container}
      container
      spacing={3}
      style={{marginTop: '25px'}}
    >

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <Typography
          style={{marginBottom: '20px'}}
          variant="h3"
        >
      Security
    </Typography>
        <TubeWellDoorStatus status={sensor.door_status} />
        
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >

    <Typography
      style={{marginBottom: '20px'}}
      variant="h3"
    >
      Fire Alarm
    </Typography>
        <SmokeAlarmStatus
          sensor={sensor}
          status={sensor.alarm}
        />
      </Grid>
    </Grid>
  </div>
  );
};

export default TubewellDashboardDefault;
