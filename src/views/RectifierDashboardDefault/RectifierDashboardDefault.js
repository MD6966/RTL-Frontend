/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import InputPowerStatus from './components/InputPowerStatus';
import InputVoltage from './components/InputVoltage';
import RectificationStatus from './components/RectificationStatus';
import OutputDcVoltage from './components/OutputDcVoltage';
import BatteryStatus from './components/BatteryStatus';
import BatteryBankStatus from './components/BatteryBankStatus';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const RectifierDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings} = props;

  return (
  <div >
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
        <InputPowerStatus
          sensor={sensor}
          status={sensor.ac_status}
          type="ac_status"
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <InputVoltage
          sensor={sensor}
          type="ac_inputVoltage"
          value={sensor.ac_inputVoltage}
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
        <RectificationStatus
          sensor={sensor}
          status={sensor.rec_status}
          type="rec_status"
        />
        
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <OutputDcVoltage
          sensor={sensor}
          type="rec_outputDcVoltage"
          value={sensor.rec_outputDcVoltage}
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
        lg={6}
        sm={12}
        xs={12}
      >
        <BatteryStatus
          sensor={sensor}
          status={sensor.battery_status}
          type="battery_status"
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <BatteryBankStatus
          sensor={sensor}
          status={sensor.battery_voltagePercentage}
          type="battery_voltagePercentage"
          value={sensor.battery_voltage}
        />
      </Grid>
    </Grid>
  </div>
  );
};

export default RectifierDashboardDefault;
