import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Threshold, MapComponent, ConfirmDialog } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const ColdChainDashboardDefault = (props) => {
  const { sensor } = props;
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item lg={6} sm={12} xs={12}>
        <Threshold
          id={sensor._id}
          rad={sensor.geofenceCenter.radius}
          user_id={user.id}
        />
      </Grid>
      <Grid item lg={6} sm={12} xs={12}>
        <ConfirmDialog id={sensor._id} />
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <MapComponent sensor={sensor} />
      </Grid>
    </Grid>
  );
};

export default ColdChainDashboardDefault;
