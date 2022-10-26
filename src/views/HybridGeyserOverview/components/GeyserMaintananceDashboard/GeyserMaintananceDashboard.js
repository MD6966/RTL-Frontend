/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import TemperatureUpperThreshold from './components/TemperatureUpperThreshold';
import TemperatureLowerThreshold from './components/TemperatureLowerThreshold';
import { Tooltip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Routine from './components/Routine';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { add_Routine, getGeyserRoutines, all_Routines } from 'store/actions/geyserHybridAction';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@material-ui/core';
import SourceMode from './components/SourceMode';
import gradients from 'utils/gradients';
// import TurboMode from './components/TurboMode';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  },
}));

const GeyserMaintananceDashboard = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const id = props.sensor._id;
  const geyser = useSelector((state) => state.geyserhybrid.geyser);
  const index = geyser.findIndex((f) => f._id === id);
  const routines = useSelector((state) => state.geyserhybrid.geyser[index].scheduling.routine);
  const [enable, setEnable] = useState(sensor.routine_enable);
  const [allroutineSegment, setAllRoutineSegment] = React.useState(false);
  const routine_loading = useSelector((state) => state.geyserhybrid.geyser[index].scheduling.routineLoading);
  const handleSchedule = () => {
    if(sensor.system_status === true)
    {
      if (enable === false){
        setEnable(true)
        dispatch(all_Routines(sensor._id, true));
      } else if (enable === true){
        setEnable(false)
        dispatch(all_Routines(sensor._id, false));
      }
    }
    else
    {
       enqueueSnackbar('Hardware not connected can not enable or disable routines  ', {
        variant: 'Error'
      }); 
    }
    
    
  };

  const addRoutine = () => {
    if(sensor.system_status === true)
    {
      dispatch(add_Routine(sensor._id));
     enqueueSnackbar('Routine Added Successfully', {
      variant: 'success'
    }); 
    }
    else
    {
      enqueueSnackbar('Hardware not connected Add Routine Failed ', {
        variant: 'Error'
      }); 
    }
     
  }

 
  useEffect(() => {
    // console.log(sensor)
    dispatch (getGeyserRoutines (sensor._id));
    // console.log('GeyserMaintananceDashboard',sensor);

  }, []);

  return (
    <>
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
          <TemperatureLowerThreshold
            id={sensor._id}
            sensor={sensor}
            type="temp_lowerthreshold"
          />
        </Grid>

        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
        >
          <TemperatureUpperThreshold
            id={sensor._id}
            sensor={sensor}
            type="temp_upperthreshold"
          />
        </Grid>
        {
          sensor.variant === 'Hybrid' ? (
            <Grid
            item
            lg={6}
            sm={12}
            xs={12}
          >
            <SourceMode sensor = {sensor} />
          </Grid>

          ) : null
        }
       
        {/* <Grid
          item
          lg={6}
          sm={12}
          xs={12}
        >
          <TurboMode />
        </Grid> */}
      </Grid>
      {
        routine_loading ? (<CircularProgress style={{marginTop: '20px'}} />) : (
          <>
          <Grid
          className={classes.container}
          container
          spacing={3}
          style={{marginTop: '0px'}}
        >
          <Grid
            item
            lg={3}
            sm={12}
            xs={12}
          >
          <Typography
          style={{display: 'inline-block', paddingRight: '5px'}}
          variant="h5"
        >Add Routine:</Typography>
          <AddCircleIcon style={{color: 'rgb(63 81 181)', fontSize: 'large !important'}} onClick={addRoutine} cursor="pointer" />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
          />
          <Grid
            item
            lg={3}
            sm={12}
            style={{display: 'flex', paddingLeft: '6.8rem'}}
            xs={12}
          >
            {console.log('ENABLE', enable)}
            <Typography
              style={{paddingTop: '7px'}}
              variant="h5"
            >Routine:</Typography>
          &nbsp; &nbsp;
            {
              sensor.auto === true ? (
                // // <>M</>
                
                  <Button
                    // color={
                    //   enable === false ?  '#ff0000' : '#00FF00'
                    // }
                    style={{backgroundImage: (enable === false ? gradients.red : gradients.green )}}
                    disabled={false}
                    onClick={setAllRoutineSegment}
                    variant="contained"
                  >
                    {enable === false ? (
                      <Typography style={{color: '#ffffff'}}>OFF</Typography>
                    ) : (
                      <Typography style={{color: '#ffffff', }}>ON</Typography>
                    )}
                  </Button>
                
              ) : (
                // <>Hello</>
                <Button
                  // color={
                  //   enable === false ? '#ff0000' : '#00FF00'
                  // }
                  style={{backgroundImage: (enable === false ? gradients.red : gradients.green )}}
                  disabled={false}
                  onClick={handleSchedule}
                  variant="contained"
                >
                  {enable === false ? (
                    <Typography style={{color: '#ffffff'}}>OFF</Typography>
                  ) : (
                    <Typography style={{color: '#ffffff'}}>ON</Typography>
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
            lg={9}
            sm={12}
            xs={12}
            xl={12}
            md={12}
          >
            {
              enable === true ? (
                <Routine
                  id={sensor._id}
                  routines={routines}
                  sensor={sensor}
                />
              ) : (
                null
              )
            }
           
          
          </Grid>
        </Grid>
          </>
        )
      }

      
      
    </>
  );
};

export default GeyserMaintananceDashboard;
