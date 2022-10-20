/* eslint-disable linebreak-style */
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import gradients from 'utils/gradients';
import { TimePicker } from '@material-ui/pickers';
import RoutineComponent from './RoutineComponent';


 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
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

const Routine = (props) => {
  const { className, id, sensor, routines, ...rest } = props;
  // const hl = useSelector((state) => state.hl.light);
  // const index = hl.findIndex((f) => f._id === id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const addRoutineLoading = useSelector((state) => state.geyser.addRoutineLoading);

  /* Start and End Time State */
  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        className={classes.container}
        container
        spacing={2}
        style={{width: 'calc(100% + -10px)', margin: '5px 5px 5px 25px'}}
      >
        <Grid
          item
          lg={12}
          sm={12}
          style={{paddingLeft: '0px'}}
          xs={12}
        >
          <div className={classes.content}>
            <Typography
              component="h3"
              gutterBottom
              style={{fontSize: '22px'}}
              variant="overline"
            >Routines</Typography>
          </div>
        </Grid>
        {

        }
        {
          routines !== null && routines !== undefined ? (
            <>
            {
              routines.map((routine, index) => (
                <RoutineComponent
                  sensor = {sensor}
                  key={routine._id}
                  routine={routine}
                  index={index}
                />
              ))
            }
            </>
          ) : (null)
        }
        
        
        
      </Grid>
    </Card>
  );
};

Routine.propTypes = {
  className: PropTypes.string
};

export default Routine;