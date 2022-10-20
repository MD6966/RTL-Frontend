/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, LinearProgress } from '@material-ui/core';
import { Animated } from 'react-animated-css';

import gradients from 'utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to left, #0575e6, #0b5eca, #0b47af, #083194, #021b79)'
  },
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '10px'
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.orange,
    height: 58,
    width: 58
  },
  headingText: {
    fontSize: '16px',
  }
}));

const FillLevel = (props) => {
  const { className, fill, sensor, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [f, setF] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setF(fill);
    }, 500);
  }, [fill]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <Typography
          className={classes.headingText}
          component="h3"
          gutterBottom
          style={{color: '#ffffff'}}
          variant="overline"
        >
          Tank Fill Level
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            {
              f <= sensor.fillLevel_lwrLmt ? (
                <Typography
                  style={{color: '#c31432'}}
                  variant="h3"
                >{f}%</Typography>
              ) : ( f >= sensor.fillLevel_upperLmt ? (
                <Typography
                  style={{color: '#c31432'}}
                  variant="h3"
                >{f}%</Typography>
              ) : (
                <Typography
                  style={{color: '#ffffff'}}
                  variant="h3"
                >{f}%</Typography>
              ))}
          </Animated>
          {
            f <= sensor.fillLevel_lwrLmt ? (
              <LinearProgress
                className={classes.progress}
                color="secondary"
                value={fill}
                variant="determinate"
              />
            ) : ( f >= sensor.fillLevel_upperLmt ? (
              <LinearProgress
                className={classes.progress}
                color="secondary"
                value={fill}
                variant="determinate"
              />
            ) : (
              <LinearProgress
                className={classes.progress}
                color="secondary"
                value={fill}
                variant="determinate"
              />
            ))}
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <img
          height="35"
          src="images\icons\storage-tank.png"
          width="35"
        />
      </Avatar>
    </Card>
  );
};

FillLevel.propTypes = {
  className: PropTypes.string
};

export default FillLevel;
