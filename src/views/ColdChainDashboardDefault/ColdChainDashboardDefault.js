/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {
  Temperature,
  Threshold,
  MapComponent,
  DoorStatus,
  IgnitionStatus
} from './components';
import Thermometer from './components/Thermometer';
import Battery from './components/Battery';
import Geofence from './components/CenterDialog';
import Radius from './components/GeofenceThreshold';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const ColdChainDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings } = props;
  
  return (
    <Grid
      alignItems="center"
      className={classes.container}
      container
      justify="center"
      spacing={3}
    >
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        {sensor.type === 'store' ? (
          <DoorStatus status={sensor.status} />
        ) : sensor.type === 'vehicle' ? (
          <IgnitionStatus status={sensor.ignitionStatus} />
        ) : null}
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Temperature temperature={sensor.temperature} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Threshold
          id={sensor._id}
          lt={sensor.lowerThreshold}
          ut={sensor.upperThreshold}
        />
       
      </Grid>
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        < Geofence 
          id = {sensor._id}
        />
      </Grid>
      <Grid
        item
        lg={6}
        sm={6}
        xs={6}
      >
        < Radius
          id = {sensor._id}
          rad = {sensor.geofenceCenter.radius}
          // user_id = {user.id}
        />
      </Grid>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
      >
        <MapComponent sensor={sensor} />
      </Grid>
      <Grid
        item
        lg={3}
        sm={12}
        xs={12}
      >
        <Thermometer
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          temperature={sensor.temperature}
          theme={settings === 'light' ? 'fusion' : 'candy'}
        />
      </Grid>
      <Grid
        item
        lg={3}
        sm={12}
        xs={12}
      >
        <Battery
          battery={sensor.battery}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          theme={settings === 'light' ? 'fusion' : 'candy'}
        />
      </Grid>
      
    </Grid>
  );
};

export default ColdChainDashboardDefault;
