import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { CurrentTemp, Threshold, UpperThreshold } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const TemperatureDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  // eslint-disable-next-line

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item lg={4} sm={12} xs={12}>
        <CurrentTemp status={sensor.currentTemp} />
      </Grid>
      <Grid item lg={4} sm={12} xs={12}>
        <Threshold id={sensor._id} status={sensor.threshold} />
      </Grid>
      <Grid item lg={4} sm={12} xs={12}>
        <UpperThreshold id={sensor._id} status={sensor.upperThreshold} />
      </Grid>
    </Grid>
  );
};

export default TemperatureDashboardDefault;
