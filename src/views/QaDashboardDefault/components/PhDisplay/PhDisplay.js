import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
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
    marginLeft: theme.spacing(1)
  },
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const PhDisplay = (props) => {
  const { className, ph, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [p, setP] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (ph >= 0 && ph < 7) {
        setP(`${ph} (Acidic)`);
      } else if (ph == 7 ) {
        setP(`${ph} (Neutral)`);
      } else if (ph > 7) {
        setP(`${ph} (Basic)`);
      }
    }, 500);
  }, [ph]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          pH Value
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{p}</Typography>
          </Animated>
        </div>
      </div>
      {ph < 6.5 ? (
        <Avatar className={classes.avatarRed}>
          <img alt="pH Icon" src="/images/icons/phIcon.png" />
        </Avatar>
      ) : ph > 7.5 ? (
        <Avatar className={classes.avatarBlue}>
          <img alt="pH Icon" src="/images/icons/phIcon.png" />
        </Avatar>
      ) : (
        <Avatar className={classes.avatarGreen}>
          <img alt="pH Icon" src="/images/icons/phIcon.png" />
        </Avatar>
      )}
    </Card>
  );
};

PhDisplay.propTypes = {
  className: PropTypes.string
};

export default PhDisplay;
