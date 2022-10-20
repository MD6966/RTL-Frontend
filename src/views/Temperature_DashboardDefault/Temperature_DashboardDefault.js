import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { CurrentTemp } from './components';
import Humidity from './components/Humidity/Humidity';
import { useSelector } from 'react-redux'; 
import Fans from './components/Fans';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const Temperature_DashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, fans } = props;
  const id = sensor._id;
  const temperature = useSelector((state) => state.temp.temp);
  const index = temperature.findIndex((f) => f._id === id);
  // const fans = useSelector((state) => state.temp.temp[index].fans);


  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item lg={6} sm={12} xs={12}>
        <CurrentTemp status={sensor.temperature} />
      </Grid>
      <Grid item lg={6} sm={12} xs={12}>
        <Humidity status={sensor.humidity} />
      </Grid>

      {fans.map((fan, index) => (
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            md={6}
          >
            <Fans
              index={index}
              key={index}
              // fan={sensor.fans[index]}
              sensor={sensor}
              fan={fan}
              fan_id={fan._id}
            />

          </Grid>
        ))}
      {/* <Grid item lg={6} sm={12} xs={12}> */}
        {/* <Threshold id={sensor._id} status={sensor.threshold} /> */}
      {/* </Grid> */}
      {/* <Grid item lg={4} sm={12} xs={12}>
        <UpperThreshold id={sensor._id} status={sensor.upperThreshold} />
      </Grid> */}
    </Grid>
  );
};

export default Temperature_DashboardDefault;
