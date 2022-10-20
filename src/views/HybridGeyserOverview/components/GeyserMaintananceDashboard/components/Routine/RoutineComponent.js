/* eslint-disable linebreak-style */
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import gradients from 'utils/gradients';
import { TimePicker } from '@material-ui/pickers';
import { setRoutine } from 'store/actions/geyserHybridAction';
import DeleteIcon from '@material-ui/icons/Delete';
import { Switch } from '@material-ui/core';
import { delete_Routine } from 'store/actions/geyserHybridAction';
import { useSnackbar } from 'notistack';
import Routine_Temp_Threshold from './Routine_Temp_Threshold';

 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'contents',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.white,
    boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)',
    borderRadius: '30px'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  container: {
    marginTop: theme.spacing(3)
  },
  custom_enable_button: {
    textAlign: 'center'
  },
  content: {
    flexGrow: 1
  },
}));

const RoutineComponent = (props) => {
  const { className, sensor, routine, key, index, ...rest } = props;
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [enable, setEnable] = useState(routine.enable);
  const [startTime, setStartTime] = useState(routine.from);
  const [endTime, setEndTime] = useState(routine.to);


  const handleChange = (event) => {
    if(sensor.system_status === true)
    {
      setEnable(event.target.checked);
      dispatch(setRoutine(routine._id, startTime, endTime,  event.target.checked, routine.threshold));
    }
    else
    {
      enqueueSnackbar('Hardware not connected can not enable or disable  Routine ', {
        variant: 'error'
      });
    }
  };
  useEffect(() => {
    setStartTime(routine.from);
    setEndTime(routine.to);
  }, [routine])
  const deleteHandle = () => {
    if(sensor.system_status === true)
    {
      dispatch(delete_Routine(routine.geyser_id, routine._id));
      enqueueSnackbar('Routine Deleted Successfully', {
        variant: 'success'
      });
    }
    else
    {
      enqueueSnackbar('Hardware not connected Deleting Routine Failed', {
        variant: 'error'
      });
    }
   
  }

  // const handleRoutine = () => {
  //   if (enable === false){
  //     dispatch(setRoutine(routine._id, startTime, endTime, true));
  //     setEnable(true)
  //   } else if (enable === true){
  //     dispatch(setRoutine(routine._id, startTime, endTime, false));
  //     setEnable(false)
  //   }
  // };
  
  const StartTimeChange = (value) => {
    setStartTime(value);
    dispatch(setRoutine(routine._id, value, endTime, true));
    
  };  

  const EndTimeChange = (value) => {
    setEndTime(value);
    dispatch(setRoutine(routine._id, startTime, value, true));
  };

  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
    <Grid
        className={classes.container}
        container
        spacing={2}
        // style={{marginBottom: '25px'}}
      >
      <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          md={12}
        >
          <Typography
            style={{paddingBottom: '10px', textDecoration: 'underline', textDecorationThickness: '2px'}}
            variant="h5"
          >{routine.name} - {index+1}</Typography>
        </Grid>
        
        
        
      </Grid>

      <Grid
        className={classes.container}
        container
        spacing={2}
        style={{marginBottom: '25px'}}
      >
        
        <Grid
          item
          lg={4}
          sm={12}
          xs={12}
          md={12}
        >
          <TimePicker
            label="From"
            minutesStep={1}
            onChange={(text) => StartTimeChange(text)}
            showTodayButton
            style={{marginRight: '75px'}}
            todayLabel="now"
            // value={sensor.seg_routineEnable === true ? (sensor.seg_startTime):(segOffTimeFrom)}
            value={startTime}
              
          />
          <TimePicker
            label="To"
            minutesStep={1}
            onChange={(text) => EndTimeChange(text)}
            showTodayButton
            todayLabel="now"
            value={endTime}
            // value={sensor.seg_routineEnable === true ? (sensor.seg_endTime):(segOffTimeTo)}
          />
        </Grid>
        <Grid
        item
        lg={4}
        sm={12}
        xs={12}
        md={12}
      >
      <Routine_Temp_Threshold 
      id ={routine._id} 
      routine = {routine} 
      />
      </Grid>
        <Grid
          className={classes.custom_enable_button}
          item
          lg={2}
          sm={6}
          xs={6}
          md={6}
        >
            <Switch
            checked={routine.enable}
            onChange={handleChange}
            // onClick={handleRoutine}
            color="primary"
            name="routine"
            inputProps={{ 'aria-label': 'primary checkbox' }}
           
          />
        </Grid>
        <Grid
        className={classes.custom_enable_button}
        item
        lg={2}
        sm={6}
        xs={6}
        md={6}
      >
        <DeleteIcon cursor="pointer" onClick={deleteHandle} style={{color: '#B22222'}} />
      </Grid>
      </Grid>
     
    </Card>
  );
};

RoutineComponent.propTypes = {
  className: PropTypes.string
};

export default RoutineComponent;