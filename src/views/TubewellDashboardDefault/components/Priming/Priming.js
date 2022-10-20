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
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  avatarGreen: {
    backgroundImage: 'linear-gradient(180deg, #dadee1 0%, #dadee1 100%)',
    height: 48,
    width: 48
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const Priming = (props) => {
  const { className, priming, priminglvl, id, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const [v, setV] = useState(null);
  const tw = useSelector((state) => state.tw.tubewell);
  const index = tw.findIndex((f) => f._id === id);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (priming === 1) {
        setS('Valve Open');
      } else {
        setS('Valve Closed');
      }
      if (priminglvl === 1) {
        setV('Filled');
      } else {
        setV('Un-Filled')
      }
    }, 500);
  }, [priming, priminglvl]);

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
          Priming / Priming Level
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
            >{s} / {v}
            </Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatarGreen} >
        <img
          src="images\icons\priming-icon.png"
          width="40"
          alt="priming"
        />
      </Avatar>
    </Card>
  );
};

Priming.propTypes = {
  className: PropTypes.string
};

export default Priming;
