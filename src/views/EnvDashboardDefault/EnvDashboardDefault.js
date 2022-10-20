/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { PM1, PM2_5, PM10 } from './components/Voltage';
// import { pm1, pm2_5, pm10 } from './components/PM';
import { PM1_upperThreshold, PM2_5_lowerThreshold, PM2_5_upperThreshold, PM10_upperThreshold } from './components/Thresholds';
import { PM1_Meter,PM2_5_Meter, PM10_Meter } from './components/Meters/PMMeters'; 


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const Env_DashboardDefault = (props) => {
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
        <PM1 value={sensor.pm1} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <PM2_5 value={sensor.pm2_5} />
      </Grid>
      
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <PM10 value={sensor.pm10} />
      </Grid>
       
     
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <PM1_upperThreshold
          id={sensor._id}
          threshold={sensor.pm1_upperThreshold}
          type="pm1_u"
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <PM2_5_upperThreshold
          id={sensor._id}
          threshold={sensor.pm2_5upperThreshold}
          type="pm2.5_u"
        />
      </Grid>
     
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <PM2_5_lowerThreshold
          id={sensor._id}
          threshold={sensor.pm2_5threshold}
          type="pm2.5_l"
        />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <PM10_upperThreshold
          id={sensor._id}
          threshold={sensor.pm10_upperThreshold}
          type="pm10_u"
        />
      </Grid>
       

      {' '}
      
     
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <PM1_Meter
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          pm1={sensor.pm1}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.pm1}
        />
         
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <PM2_5_Meter
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          pm2_5={sensor.pm2_5}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.pm2_5}
        />
         
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <PM10_Meter
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          pm10={sensor.pm10}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.pm10}
        />
         
      </Grid>

          
     
      <Grid
        alignItems="center"
        container
        justify="center"
      />
  
    </Grid>
    
    
  );
};

export default Env_DashboardDefault;
