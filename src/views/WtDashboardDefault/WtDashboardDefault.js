/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
// import Dashboard from 'layouts/Dashboard';
import { Motor, Maintenance,Upper_Tank_Fill_Level, Lower_Tank_Fill_Level } from './components/Motor_Reading';
import { OH, UG, UG_U, OH_U } from './components/Thresholds';
import Thermometer from './components/upperTank';
import Tank from './components/Tank';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const Wt_DashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings } = props;

  return (
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
        <Motor 
        id={sensor._id}
        value={sensor.motor} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Maintenance 
        id={sensor._id}
        value={sensor.motor} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Upper_Tank_Fill_Level 
        id={sensor._id}
        value={sensor.fillLevel} />
        
      </Grid>
      
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Lower_Tank_Fill_Level 
        id={sensor._id}
        value={sensor.fillLevel1} />
       
      </Grid> 
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <OH_U
          id={sensor._id}
          threshold={sensor.upperThreshold}
          type="OH_U"
         
        />
      </Grid>
     
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <UG_U
          id={sensor._id}
          threshold={sensor.upperThreshold_lowerTank}
          type="UG_U"
        />
      </Grid>
        
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <OH
          id={sensor._id}
          threshold={sensor.threshold}
          type="OH"
        />
      </Grid>
     
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <UG
          id={sensor._id}
          threshold={sensor.threshold_lowerTank}
          type="UG"
        />
      </Grid> 
      <Grid container justify="center" alignItems="center">
        <Grid item lg={4} sm={12} xs={12}>
          <Thermometer
            fill={sensor.fillLevel}
            theme={settings === 'light' ? 'fusion' : 'candy'}
            color={settings === 'light' ? '#000000' : '#FFFFFF'}
          />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <Tank
            fill={sensor.fillLevel1}
            name={sensor.name}
            theme={settings === 'light' ? 'fusion' : 'candy'}
            color={settings === 'light' ? '#000000' : '#FFFFFF'}
          />
        </Grid>
      </Grid>
  
    </Grid>
    
    
  );
};

export default Wt_DashboardDefault;
