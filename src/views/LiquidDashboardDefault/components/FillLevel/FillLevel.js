import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, LinearProgress } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import gradients from 'utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light
  },
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  }
}));

const FillLevel = (props) => {
  const { className, fill, ...rest } = props;
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
    <Card {...rest} className={clsx(classes.root, className)}>
      <div className={classes.content}>
        <Typography component="h3" gutterBottom variant="overline">
          Tank Fill Level
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{f}</Typography>
          </Animated>
          <LinearProgress
            className={classes.progress}
            value={fill}
            variant="determinate"
          />
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <DoneIcon />
      </Avatar>
    </Card>
  );
};

FillLevel.propTypes = {
  className: PropTypes.string
};

export default FillLevel;
