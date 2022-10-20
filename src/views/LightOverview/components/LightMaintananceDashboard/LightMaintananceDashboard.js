/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DimLevelThreshold from './components/DimLevelThreshold';
import Timer from './components/Timer';
import AutoModeButton from './components/AutoModeButton';
import {updateSchedule,set_Segment_Control, setScheduling} from '../../../../store/actions/lightAction';
import Schedule from './components/Schedule';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const LightMaintananceDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.hl.maintananceLoading);
  const [enable, setEnable] = useState(sensor.allRoutines);
  // const [routineSegment, setRoutineSegment] = React.useState(false);
  const [allroutineSegment, setAllRoutineSegment] = React.useState(false);

  const handleSegment = () => {
    if(sensor.segControl === '0') {
      // setEnable(true);
      // dispatch(updateSchedule(sensor._id, true));
      dispatch(set_Segment_Control(sensor._id,'2'));
    }else if(sensor.segControl === '2'){
      setEnable(false);
      dispatch(updateSchedule(sensor._id, false));
      dispatch(set_Segment_Control(sensor._id,'0'));
     
    }
  };
  
  const handleSchedule = () => {
    if (enable === false){
      setEnable(true)
      dispatch(setScheduling(sensor._id, true));
    } else if (enable === true){
      setEnable(false)
      dispatch(setScheduling(sensor._id, false));
    }
    
  };

  return (
    <div>

      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{marginTop: '0px'}}
      >
        <Grid
          item
          lg={9}
          sm={12}
          xs={12}
        />
        <Grid
          item
          lg={3}
          sm={12}
          style={{display: 'flex', paddingLeft: '4.4rem'}}
          xs={12}
        >
          <Typography
            style={{paddingTop: '7px'}}
            variant="h5"
          >Segment Control:</Typography>
          &nbsp; &nbsp;
          {
            (sensor.seg_routineEnable === true || sensor.dim_high_routineEnable === true || sensor.dim_medium_routineEnable === true || sensor.dim_low_routineEnable === true) && (sensor.allRoutines ===  true) ? (
              <Tooltip
                arrow
                title="Routine is Enabled currently, Please Disable routine first, then Control Segment."
              >
                <Button
                  color="primary"
                  // onClick={handleSegment}
                  variant="contained"
                >
                  {sensor.segControl === '0' ? (
                    <Typography style={{color: '#ffffff'}}>On</Typography>
                  ) : (
                    <Typography style={{color: '#ffffff'}}>Off</Typography>
                  )}
                </Button>
              </Tooltip>
            ) : (
              <Button
                color="primary"
                onClick={handleSegment}
                variant="contained"
              >
                {sensor.segControl === '0' ? (
                  <Typography style={{color: '#ffffff'}}>On</Typography>
                ) : (
                  <Typography style={{color: '#ffffff'}}>Off</Typography>
                )}
              </Button>
            )
          }
          
        </Grid>
      </Grid>
      
      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{width: 'calc(100% + -10px)', margin: '5px 5px 10px 5px'}}
      >
        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
        >
          <DimLevelThreshold
            dim_level={sensor.dimLevel}
            id={sensor._id}
            sensor={sensor}
            type="dimLevel" 
            
          />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
        >
          <Timer
            id={sensor._id}
            sensor={sensor}
            timer={sensor.light_time}
            type="light_time"
          />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
        >
          <AutoModeButton
            id={sensor._id}
            sensor={sensor}
          />
        </Grid>
      </Grid>

      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{marginTop: '0px'}}
      >
        <Grid
          item
          lg={9}
          sm={12}
          xs={12}
        />
        <Grid
          item
          lg={3}
          sm={12}
          style={{display: 'flex', paddingLeft: '5.8rem'}}
          xs={12}
        >
          <Typography
            style={{paddingTop: '7px'}}
            variant="h5"
          >Scheduling:</Typography>
          &nbsp; &nbsp;
          {
            sensor.segControl === '0' && sensor.allRoutines === false? (
              <Tooltip
                arrow
                title="Segment is Disabled currently, Please Enabled segment first, then Set Scheduling."
              >
                <Button
                  color={
                    enable === false ? 'primary' : 'secondary'
                  }
                  disabled={false}
                  onClick={setAllRoutineSegment}
                  variant="contained"
                >
                  {enable === false ? (
                    <Typography style={{color: '#ffffff'}}>Enable</Typography>
                  ) : (
                    <Typography style={{color: '#ffffff'}}>Disable</Typography>
                  )}
                </Button>
              </Tooltip>
            ) : (
              <Button
                color={
                  enable === false ? 'primary' : 'secondary'
                }
                disabled={false}
                onClick={handleSchedule}
                variant="contained"
              >
                {enable === false ? (
                  <Typography style={{color: '#ffffff'}}>Enable</Typography>
                ) : (
                  <Typography style={{color: '#ffffff'}}>Disable</Typography>
                )}
              </Button>
            )
          }
        </Grid>
      </Grid>

      <Grid
        className={classes.container}
        container
        spacing={3}
        style={{width: 'calc(100% + -10px)', margin: '5px 5px 10px 5px', justifyContent: 'center'}}
      >
        <Grid
          item
          lg={7}
          sm={12}
          xs={12}
        >
          {enable === true ? (
            <Schedule
              id={sensor._id}
              sensor={sensor}
            />
          ) : (
            null)}
          
        </Grid>
      </Grid>
      
    </div>
     
  );
};

export default LightMaintananceDashboard;
