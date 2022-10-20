import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import FormDialog from './FormDialog';
import gradients from 'utils/gradients';

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
    marginLeft: theme.spacing(4)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const Threshold = (props) => {
  const { className, id, rad, user_id, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [r, setR] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setR(rad);
    }, 500);
  }, [rad]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Geofence (In Meters)
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{r} meters</Typography>
          </Animated>
          <FormDialog
            className={classes.label}
            rad={rad}
            id={id}
            user_id={user_id}
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

Threshold.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  lt: PropTypes.number,
  ut: PropTypes.number
};

export default Threshold;
