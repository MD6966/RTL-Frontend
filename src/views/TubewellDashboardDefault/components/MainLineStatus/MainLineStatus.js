/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';

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
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const MainLineStatus = (props) => {
  const { className, status, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === false) {
        setS('Power - Up');
      } else {
        setS('Power - Down');
      }
    }, 500);
  }, [status]);

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
          Main Line Status
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
            >{s}</Typography>
          </Animated>
        </div>
      </div>
      {status === false ? (
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faPowerOff} />
        </Avatar>
      ) : (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faPowerOff} />
        </Avatar>
      )}
    </Card>
  );
};

MainLineStatus.propTypes = {
  className: PropTypes.string
};

export default MainLineStatus;
