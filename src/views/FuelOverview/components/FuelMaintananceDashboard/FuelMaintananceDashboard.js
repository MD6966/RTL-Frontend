import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  TotalRunningTime,
  RunningTime,
  OilRunningTime,
  OilThreshold,
  MaintananceThreshold,
  Maintanance,
  Oil
} from './components';
import { Table } from './components';
import { getMaintananceData } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const FuelMaintananceDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.fuel.maintananceLoading);
 
 
 
  useEffect(() => {
    dispatch(getMaintananceData(sensor._id));
    // console.log(sensor)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if ( loading) {
    return <CircularProgress color="secondary" />;
  } else  {
    return (
      <>
      {sensor.maintanance.totalRunningTime == null  &&  sensor.maintanance.oilRunningTime == null && sensor.maintanance.runningTime == null ? (
        <CircularProgress color="secondary" />
      ):(
        <Grid className={classes.container} container spacing={3}>
        <Grid item lg={4} sm={12} xs={12}>
          <TotalRunningTime time={sensor.maintanance.totalRunningTime} />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <RunningTime time={sensor.maintanance.runningTime} />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <OilRunningTime time={sensor.maintanance.oilRunningTime} />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <OilThreshold id={sensor._id} threshold={sensor.oilThreshold} />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <MaintananceThreshold
            id={sensor._id}
            threshold={sensor.maintananceThreshold}
          />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Maintanance
            id={sensor._id}
            threshold={sensor.maintananceThreshold}
            time={sensor.maintanance.runningTime}
          />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Oil
            id={sensor._id}
            threshold={sensor.maintananceThreshold}
            time={sensor.maintanance.oilRunningTime}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Table sensor={sensor} />
        </Grid>
      </Grid>
      )}
      </>
     
    );
  }
};

export default FuelMaintananceDashboard;
