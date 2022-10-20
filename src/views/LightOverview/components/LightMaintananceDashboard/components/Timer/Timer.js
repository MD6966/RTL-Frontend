/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Label } from 'components';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';
import FormDialog_UpperLmt from './FormDialog2';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';



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
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const Timer = (props) => {
  const { className, id, type, timer, sensor,  ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [t, setT] = useState(null);
  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setT(timer);
    }, 500);
  }, [timer]);

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
          Timer (Enter Value in seconds)
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
            >{t} sec
              <Label
                className={classes.label}
                color="error"
              /> 
            </Typography>
          </Animated>
          <FormDialog_UpperLmt
            id={id}
            sensor={sensor}
            type={type}
          />
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <AccessAlarmIcon />
      </Avatar>
    </Card>
  );
};

Timer.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default Timer;
