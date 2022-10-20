/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to left, #00bf8f, #00906f, #06634e, #0a3a2f, #001510)'
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

const Liters = (props) => {
  const { className, liters, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [l, setL] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setL(liters);
    }, 500);
  }, [liters]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          component="h3"
          gutterBottom
          style={{color: '#ffffff'}}
          variant="overline"
        >
          Tank Capacity
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
              style={{color: '#ffffff'}}
              variant="h3"
            >{l} liters</Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <FontAwesomeIcon icon={faFillDrip} />
      </Avatar>
    </Card>
  );
};

Liters.propTypes = {
  className: PropTypes.string
};

export default Liters;
