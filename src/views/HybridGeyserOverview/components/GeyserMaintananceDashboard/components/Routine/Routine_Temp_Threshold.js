/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';

import Routine_Temp_Threshold_Form from './Routine_Temp_Threshold_Form';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '10px'
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  label: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  }
}));

const Routine_Temp_Threshold = (props) => {
  const { className, id, routine, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [t, setT] = useState(null);
  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setT(routine.threshold);
    }, 500);
  }, [routine.threshold]);

  return (
      <div>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography
              variant="h4"
            >{routine.threshold} °C
            </Typography>
          </Animated>
          <Routine_Temp_Threshold_Form
            id={id}
            routine={routine}
          />
        </div>
      </div>
   

  );
};

Routine_Temp_Threshold.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default Routine_Temp_Threshold;
