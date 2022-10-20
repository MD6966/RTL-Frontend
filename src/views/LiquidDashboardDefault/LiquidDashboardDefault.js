import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, CircularProgress, Box } from '@material-ui/core';
import {
  AeratorStatus,
  MotorStatus,
  PhDisplay,
  TdsDisplay,
  DissolvedOxygen,
  Threshold,
  Thermometer,
  UpperThreshold,
  TempDisplay
} from './components';

import Ph from './components/Ph';
import Tds from './components/Tds';
import Battery from './components/Battery';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const LiquidDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [dataLoading, setDataLoading] = useState(false);
  const [offLoading, setOffLoading] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

  const handleAeratorOn = () => {
    setOnLoading(true);

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    const body = {
      id: sensor._id,
      message: 'ON'
    };

    axios
      .post(`${process.env.REACT_APP_URL}lms/sms`, body, config)
      .then(() => {
        enqueueSnackbar('Aerator Turned On', {
          variant: 'success'
        });
        setOnLoading(false);
      })
      .catch((err) => {
        setOnLoading(false);
      });
  };

  const handleAeratorOff = () => {
    setOffLoading(true);

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    const body = {
      id: sensor._id,
      message: 'OFF'
    };

    axios
      .post(`${process.env.REACT_APP_URL}lms/sms`, body, config)
      .then(() => {
        enqueueSnackbar('Aerator Turned Off', {
          variant: 'success'
        });

        setOffLoading(false);
      })
      .catch((err) => {
        setOffLoading(false);
      });
  };

  const getData = () => {
    setDataLoading(true);

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    const body = {
      id: sensor._id,
      message: 'GET'
    };

    axios
      .post(`${process.env.REACT_APP_URL}lms/sms`, body, config)
      .then(() => {
        enqueueSnackbar('Data Refreshed', {
          variant: 'success'
        });

        setDataLoading(false);
      })
      .catch((err) => {
        setDataLoading(false);
      });
  };

  return (
    <Grid
      className={classes.container}
      container
      spacing={3}
      alignItems="center"
      justify="center">
      <Grid item lg={3} sm={12} xl={3} md={12}>
        <PhDisplay ph={sensor.ph} />
      </Grid>
      <Grid item lg={3} sm={12} xl={3} md={12}>
        <TdsDisplay tds={sensor.tds} />
      </Grid>
      <Grid item lg={3} sm={12} md={12} xl={3}>
        <TempDisplay temperature={sensor.temperature} />
      </Grid>
      <Grid item lg={3} sm={12} md={12} xl={3}>
        <DissolvedOxygen
          o2={sensor.dissolvedOxygen}
          phone={sensor.phone}
          threshold={sensor.threshold}
          upperthreshold={sensor.upperThreshold}
        />
      </Grid>
      <Grid item lg={3} sm={12} md={12} xl={3}>
        <MotorStatus motor={sensor.motor} />
      </Grid>
      <Grid item lg={3} sm={12} md={12} xl={3}>
        <AeratorStatus aerator={sensor.aerator} />
      </Grid>
      <Grid item lg={3} sm={12} md={12} xl={3}>
        <Threshold id={sensor._id} threshold={sensor.threshold} />
      </Grid>
      <Grid item lg={3} sm={12} md={12} xl={3}>
        <UpperThreshold id={sensor._id} threshold={sensor.upperThreshold} />
      </Grid>
      <Grid item lg={6} sm={12} xl={6} xs={12}>
        {sensor.aerator === 1 ? (
          <Box display="flex" justifyContent="center">
            <Button
              color="secondary"
              onClick={handleAeratorOff}
              variant="outlined">
              {offLoading ? (
                <CircularProgress size={20} thickness={2.5} />
              ) : (
                'Turn Aerator Off'
              )}
            </Button>
          </Box>
        ) : sensor.aerator === 0 ? (
          <Box display="flex" justifyContent="center">
            <Button
              color="secondary"
              onClick={handleAeratorOn}
              variant="outlined">
              {onLoading ? (
                <CircularProgress size={20} thickness={2.5} />
              ) : (
                'Turn Aerator On'
              )}
            </Button>
          </Box>
        ) : null}
      </Grid>
      <Grid item lg={6} sm={12} xl={6} xs={12}>
        <Box display="flex" justifyContent="center">
          <Button color="secondary" onClick={getData} variant="outlined">
            {dataLoading ? (
              <CircularProgress size={20} thickness={2.5} />
            ) : (
              'Get Data'
            )}
          </Button>
        </Box>
      </Grid>
      <Grid item lg={12} sm={12} xs={12} xl={12}>
        <Ph
          ph={sensor.ph}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
        />
      </Grid>
      <Grid item lg={12} sm={12} xs={12} xl={12}>
        <Tds
          tds={sensor.tds}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
        />
      </Grid>
      <Grid item lg={3} sm={12} xl={3} xs={12}>
        <Thermometer
          temperature={sensor.temperature}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
        />
      </Grid>
      <Grid item lg={3} sm={12} xl={3} xs={12}>
        <Battery
          battery={sensor.battery}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
        />
      </Grid>
    </Grid>
  );
};

export default LiquidDashboardDefault;
