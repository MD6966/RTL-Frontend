/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
// import Dashboard from 'layouts/Dashboard';
import { Frequency, PA, Pf, PR, RP, U } from './components/Power';
import { Va, Vb, Vc } from './components/Voltage';
import { Ia, Ib, Ic } from './components/Current';
import { I_upperThreshold, Pf_lowerThreshold, U_upperThreshold, V_lowerThreshold, V_upperThreshold } from './components/Thresholds';
import { CurrentMeter, CurrentMeterB, CurrentMeterC } from './components/Meters/CurrentMeters';
import { VoltMeter_A, VoltMeter_B, VoltMeter_C } from './components/Meters/VoltageMeters';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const Em_DashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings } = props;
  console.log('sensor', sensor.F);


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
        <Va value={sensor.Va.toFixed(2)} />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Vb value={sensor.Vb.toFixed(2)} />
      </Grid>
      
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Vc value={sensor.Vc.toFixed(2)} />
      </Grid>
       
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Ia value={sensor.Ia.toFixed(2)} />
      </Grid>
     
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Ib value={sensor.Ib.toFixed(2)} />
      </Grid>
      
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Ic value={sensor.Ic.toFixed(2)} />
      </Grid>
     
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <Pf value={sensor.Pf.toFixed(2)} />
      </Grid>
        
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <PA value={sensor.PA.toFixed(2)} />
      </Grid>
      
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <PR value={sensor.PR.toFixed(2)} />
      </Grid>

      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <RP value={sensor.VAR.toFixed(2)} />
      </Grid>
     
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <Frequency value={sensor.F} />
      </Grid>

      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <U
          sensor={sensor}
          time={sensor.U_updtedAt}
          value={sensor.U.toFixed(2)}
        />
      </Grid>
      
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <V_upperThreshold
          id={sensor._id}
          threshold={sensor.vUpperLimit}
          type="voltage_U"
        />
      </Grid>
     
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <V_lowerThreshold
          id={sensor._id}
          threshold={sensor.vLowerLimit}
          type="voltage"
        />
      </Grid>
       
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <I_upperThreshold
          id={sensor._id}
          threshold={sensor.iUpperLimit}
          type="current_U"
        />
      </Grid>
      
      {' '}
      
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <Pf_lowerThreshold
          id={sensor._id}
          threshold={sensor.pfLowerLimit}
          type="power"
        />
      </Grid>
     
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
      >
        <U_upperThreshold
          id={sensor._id}
          threshold={sensor.uUpperLimit}
          type="unit_U"
        />
      </Grid> 
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <VoltMeter_A
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          lowerLmt={sensor.vLowerLimit}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.vUpperLimit}
          Va={sensor.Va.toFixed(2)}
        />
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <VoltMeter_B
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          lowerLmt={sensor.vLowerLimit}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.vUpperLimit}
          Vb={sensor.Vb.toFixed(2)}
        />
         
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <VoltMeter_C
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          lowerLmt={sensor.vLowerLimit}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.vUpperLimit}
          Vc={sensor.Vc.toFixed(2)}
        />
         
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <CurrentMeter
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          Ia={sensor.Ia.toFixed(2)}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.iUpperLimit}
        />
         
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <CurrentMeterB
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          Ib={sensor.Ib.toFixed(2)}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.iUpperLimit}
        />
         
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
      >
        <CurrentMeterC
          color={settings === 'light' ? '#000000' : '#FFFFFF'}
          Ic={sensor.Ic.toFixed(2)}
          theme={settings === 'light' ? 'fusion' : 'candy'}
          upperLmt={sensor.iUpperLimit}
        />
         
      </Grid>
  
    </Grid>
    
    
  );
};

export default Em_DashboardDefault;
