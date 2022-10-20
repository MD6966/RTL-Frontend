/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import gradients from 'utils/gradients';
import FormDialog from './FormDialog2';
import { Label } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light
  },
  label: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '16px',
    paddingBottom: '11px'
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const Voltage_upperThreshold = (props) => {
  const { className, id, threshold, type ,...rest } = props;
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
          Voltage upper Limit
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography variant="h2">{t} 
              <Label
                className={classes.label}
                color="error"
              >
               volt 
              </Label> 
            </Typography>
          </Animated>
          <FormDialog
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

Voltage_upperThreshold.propTypes = {
  className: PropTypes.string
};

export default Voltage_upperThreshold;
