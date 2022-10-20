/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { WiHumidity } from 'react-icons/wi';

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
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const CurrentHumidity = (props) => {
  const { className, status, sensor, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [t, setT] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setT(status);
    }, 500);
  }, [status]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        >
          Current Humidity
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
              t < sensor.humidity_threshold ? (
                <Typography variant="h3">{t} %</Typography>
              ) : (
                t > sensor.humidity_upperThreshold ? (
                  <Typography variant="h3">{t} %</Typography>
                ) : (
                  <Typography variant="h3">{t} %</Typography>
                )
              )
            }
            
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <WiHumidity/> 
      </Avatar>
    </Card>
  );
};

CurrentHumidity.propTypes = {
  className: PropTypes.string
};

export default CurrentHumidity;
