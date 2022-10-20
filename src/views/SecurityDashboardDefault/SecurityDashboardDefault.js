/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import {  SmokeAlarmStatus, TubeWellDoorStatus } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const SecurityDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings} = props;

  return (
  <div >
  

    
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
      Smoke Alarm
    </Typography>
        <SmokeAlarmStatus status={sensor.alarm} />
      </Grid>
    </Grid>
  </div>
  );
};

export default SecurityDashboardDefault;
