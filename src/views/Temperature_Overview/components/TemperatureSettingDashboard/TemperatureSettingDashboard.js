/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FanAutoMode from './components/FanAutoMode';
import TemperatureLowerThreshold from './components/TemperatureLowerThreshold';
import TemperatureUpperThreshold from './components/TemperatureUpperThreshold';
// import { Table } from './components';
// import { getTubewellMaintananceData } from 'store/actions';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const TemperatureSettingDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const dispatch = useDispatch();

 
  useEffect(() => {
    // dispatch(getTubewellMaintananceData(sensor._id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <>
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
        <TemperatureLowerThreshold
          id={sensor._id}
          threshold={sensor.lowerthreshold}
          type="lowerthreshold"
        />
      </Grid>

      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <TemperatureUpperThreshold
          id={sensor._id}
          threshold={sensor.upperthreshold} 
          type="upperthreshold"
        />
      </Grid>

      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <FanAutoMode sensor={sensor}/>
      </Grid>
    </Grid>
  </>
     
    );
  }

export default TemperatureSettingDashboard;
