
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import GasAlarm from './components/GasAlarm';
import GasStatus from './components/GasStatus';

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
  <div>
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
        <GasStatus gas={sensor.gas} />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <GasAlarm alarm={sensor.alarm} sensor={sensor} />
      </Grid>
    </Grid>
  </div>
  );
};

export default SecurityDashboardDefault;
