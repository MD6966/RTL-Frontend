import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { PhDisplay, TdsDisplay } from './components';

import Ph from './components/Ph';
import Tds from './components/Tds';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const QaDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings } = props;

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item lg={6} sm={12} xs={12} md={6} xl={6}>
        <PhDisplay ph={sensor.ph} />
      </Grid>
      <Grid item lg={6} sm={12} xs={12} md={6} xl={6}>
        <TdsDisplay tds={sensor.tds} />
      </Grid>
      <Grid item lg={12} sm={12} xs={12} md={12}>
        <Ph
          ph={sensor.ph}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
        />
      </Grid>
      <Grid item lg={12} sm={12} xs={12} md={12}>
        <Tds
          tds={sensor.tds}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
        />
      </Grid>
    </Grid>
  );
};

export default QaDashboardDefault;
