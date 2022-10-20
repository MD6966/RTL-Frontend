/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import TankCapacity from './components/TankCapacity';
import GenMode from './components/GenMode';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const FuelSettingsDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;

  return (
    <Grid
      className={classes.container}
      container
      spacing={3}
    >
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <TankCapacity
        id={sensor._id}
        threshold={sensor.literThreshold} 
        />
      </Grid>
       <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <GenMode 
        sensor = {sensor}
        id={sensor._id} 
        />
      </Grid>
     {/* <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <h1>Mode Settings</h1>
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <h1>Mode Settings</h1>
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <h1>Mode Settings</h1>
      </Grid>{' '}
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
       <h1>Mode Settings</h1>
      </Grid> */}
     
    </Grid>
  );
};

export default FuelSettingsDashboard;
