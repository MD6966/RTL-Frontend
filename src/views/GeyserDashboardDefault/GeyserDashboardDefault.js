/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Temperature from './components/Temperature';
import GasValve from './components/GasValve';
import GeyserStatus from './components/GeyserStatus';
import BurnerStatus from './components/BurnerStatus';
// import GasStatus from './components/GasStatus';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const GeyserDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings, loading} = props;

  return (
  <div>
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
        <Temperature
          sensor={sensor}
          value={sensor.temperature}
          type="temperature_update"
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <GasValve
          sensor={sensor}
          type="valvestatus_update"
          status={sensor.gas_valve}
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <BurnerStatus
          sensor={sensor}
          type="burnerstatus_update"
          status={sensor.burner_status}
        />
      </Grid>

      {/* <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <GasStatus
          sensor={sensor}
          type="gasstatus_update"
          status={sensor.gas_status}
        />
      </Grid> */}

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <GeyserStatus
          sensor={sensor}
          loading ={loading}
          type="geyserstatus_update"
          status={sensor.geyser_status}
          control_update="geysercontrol_update"
        />
      </Grid>

    </Grid>
  </div>
  );
};

export default GeyserDashboardDefault;
