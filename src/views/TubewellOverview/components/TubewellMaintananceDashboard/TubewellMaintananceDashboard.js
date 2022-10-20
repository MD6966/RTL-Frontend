/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  TotalRunningTime,
  Maintanance,
  MaintananceThresholdFilter,
  MaintenanceMotor
} from './components';
import { Table } from './components';
import { getTubewellMaintananceData } from 'store/actions';
import TankUpperThreshold from './components/TankUpperThreshold';
import TankLowerThreshold from './components/TankLowerThreshold';
import Threshold from '../TubewellMaintananceDashboard/components/Threshold/Threshold'
import PhLowerThreshold from './components/PhLowerThreshold';
import PhUpperThreshold from './components/PhUpperThreshold';
import TdsLowerThreshold from './components/TdsLowerThreshold';
import TdsUpperThreshold from './components/TdsUpperThreshold';
import RunningTimeFilter from './components/RunningTimeFilter';
import MotorRunningTime from './components/MotorRunningTime';
import MotorThreshold from './components/MotorThreshold';
import CurrentLowerThreshold from './components/CurrentLowerThreshold';
import AutoModeButton from './components/AutoModeButton';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const TubewellMaintananceDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tw.maintananceLoading);

 
  useEffect(() => {
    dispatch(getTubewellMaintananceData(sensor._id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if ( loading) {
    return <CircularProgress color="secondary" />;
  } else  {
    return (
      <>
        {sensor.maintanance.runningTime == null && sensor.maintanance.motorRunningTime == null ? (
          <CircularProgress color="secondary" />
        ):(
          <>
            <Typography
              style={{marginTop: '25px'}}
              variant="h3"
            >
      Tank 
            </Typography>
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
                <TankLowerThreshold
                  id={sensor._id}
                  threshold={sensor.fillLevel_lwrLmt}
                  time={sensor.updated_fillLwr}
                  type="fill_l"
                />
              </Grid>

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <TankUpperThreshold
                  id={sensor._id}
                  threshold={sensor.fillLevel_upperLmt}
                  time={sensor.updated_filluppr} 
                  type="fill_u"
                />
              </Grid>

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <Threshold
                  id={sensor._id}
                  threshold={sensor.liters}
                  time={sensor.updated_liter}
                  type="t_capacity"
                />
              </Grid>
            </Grid>

            <Typography
              style={{marginTop: '40px'}}
              variant="h3"
            >
      Water Quality
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
                <PhLowerThreshold
                  id={sensor._id}
                  threshold={sensor.ph_lwrLmt}
                  time={sensor.updated_phLwr}
                  type="ph_l"
                />
              </Grid>

              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <PhUpperThreshold
                  id={sensor._id}
                  threshold={sensor.ph_upperLmt}
                  time={sensor.updated_phUppr}
                  type="ph_u"
                />
              </Grid>

              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <TdsLowerThreshold
                  id={sensor._id}
                  threshold={sensor.tds_lwrLmt}
                  time={sensor.updated_tdsLwr}
                  type="tds_l"
                />
              </Grid>

              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <TdsUpperThreshold
                  id={sensor._id}
                  threshold={sensor.tds_upperLmt}
                  time={sensor.updated_tdsUppr}
                  type="tds_u"
                />
              </Grid>

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <RunningTimeFilter
                  sensor={sensor}
                  time={sensor.maintanance.runningTime}
                />
              </Grid>

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                
                <MaintananceThresholdFilter
                  id={sensor._id}
                  threshold={sensor.waterMaintenance}
                  type="w_maintenance"
                />
              </Grid>

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <Maintanance
                  id={sensor._id}
                  threshold={sensor.waterMaintenance}
                  time={sensor.maintanance.runningTime}
                />
              </Grid>
            </Grid>

            <Typography
              style={{marginTop: '40px'}}
              variant="h3"
            >
              Hydro Pump
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
              style={{marginTop: '15px'}}
            >

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <CurrentLowerThreshold
                  id={sensor._id}
                  threshold={sensor.I_lwrLmt}
                  time={sensor.updated_ILwr}
                  type="Ia_l"
                />
              </Grid>

              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <MaintenanceMotor
                  id={sensor._id}
                  threshold={sensor.motorMaintenance}
                  time={sensor.maintanance.motorRunningTime}
                />
              </Grid>
              
              <Grid
                item
                lg={4}
                sm={12}
                xs={12}
              >
                <MotorRunningTime time={sensor.maintanance.motorRunningTime} />
              </Grid>

              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <MotorThreshold
                  id={sensor._id}
                  threshold={sensor.motorMaintenance}
                  type="m_maintenance"
                />
              </Grid>

              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
              >
                <AutoModeButton id={sensor._id} />
              </Grid>

              
            </Grid>
          </>
        )}
      </>
     
    );
  }
};

export default TubewellMaintananceDashboard;
