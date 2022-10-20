/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';
import FormDialog_LowerLmt from './FormDialog2';


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

const TemperatureLowerThreshold = (props) => {
  const { className, id, threshold, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [t, setT] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setT(threshold);
    }, 500);
  }, [threshold]);

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
          Temperature (Lower Threshold)
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
            >{t} °C
            </Typography>
          </Animated>

          <FormDialog_LowerLmt
            id={id}
            type={type}
          />
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <img
          alt="O2"
          height="60%"
          src="/images/icons/threshold.png"
          width="60%"
        />
      </Avatar>
    </Card>
  );
};

TemperatureLowerThreshold.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default TemperatureLowerThreshold;
