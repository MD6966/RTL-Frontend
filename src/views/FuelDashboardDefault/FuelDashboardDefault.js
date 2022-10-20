/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { DoorStatus, GenStatus, FillLevel, Threshold } from './components';
import Liters from './components/Liters/Liters';
import Thermometer from './components/Thermometer';
import Tank from './components/Tank';
import GenMode from './components/GenMode';

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
  const { sensor, settings } = props;

  return (
    <Grid
      className={classes.container}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <DoorStatus status={sensor.door_status} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <GenStatus status={sensor.gen_status} sensor={sensor} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <GenMode Mode = {sensor.gen_mode} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <FillLevel fill={sensor.fillLevel} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Liters
          liters={((sensor.fillLevel / 100) * sensor.literThreshold).toFixed(2)}
        />
      </Grid>{' '}
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Threshold
          id={sensor._id}
          threshold={sensor.literThreshold}
        />
      </Grid>
      <Grid
        alignItems="center"
        container
        justify="center"
      >
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
          <Tank
            color={settings === 'light' ? '#000000' : '#FFFFFF'}
            fill={sensor.fillLevel}
            name={sensor.name}
            theme={settings === 'light' ? 'fusion' : 'candy'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FuelDashboardDefault;
