/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.white
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '10px'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatarOrange: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const MotorCurrent = (props) => {
  const { className, value, id, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [v, setV] = useState(null);
  const tw = useSelector((state) => state.tw.tubewell);
  const index = tw.findIndex((f) => f._id === id);


  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setV(value);
    }, 500);
  }, [value]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          className={classes.headingText}
          component="h3"
          gutterBottom
          variant="overline"
        >
          Line Current
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography
              variant="h3"
            >{v} ampere</Typography>
           
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatarOrange}>
        <img
          height="25"
          src="images\icons\current.png"
          width="25"
        />
      </Avatar>
    </Card>
  );
};

MotorCurrent.propTypes = {
  className: PropTypes.string
};

export default MotorCurrent;
