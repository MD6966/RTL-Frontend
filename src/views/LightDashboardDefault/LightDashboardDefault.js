/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Lights from './components/Lights';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));



const LightDashboardDefault = (props) => {
  const classes = useStyles();
  const { sensor, settings } = props;
  let id = sensor._id;
  const light = useSelector((state) => state.hl.light);
  const index = light.findIndex((f) => f._id === id);
  const data = useSelector((state) => state.hl.light[index].lights);

  return (
  <div >
    
    <Grid
      className={classes.container}
      container
      spacing={3}
      style={{width: 'calc(100% + -10px)', margin: '24px 5px 10px 5px'}}
    >

      {data.map((f, index) => (
          <Grid
            item
            lg={3}
            sm={12}
            xs={12}
          >
            <Lights
              index={index}
              key={index}
              lightstatus={sensor.lights[index]}
              sensor={sensor}
            />

          </Grid>
        ))}

    </Grid>

  </div>
  );
};

export default LightDashboardDefault;
