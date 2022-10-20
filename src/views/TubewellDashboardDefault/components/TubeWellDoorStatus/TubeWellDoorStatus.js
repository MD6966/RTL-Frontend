/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';

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
  headingText: {
    fontSize: '16px'
  }
}));

const TubeWellDoorStatus = (props) => {
  const { className, status, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === 1) {
        setS('Door Open');
      } else {
        setS('Door Closed');
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
          TubeWell Door Status
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
      {status === 1 ? (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faDoorOpen} />
        </Avatar>
      ) : (
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faDoorClosed} />
        </Avatar>
      )}
    </Card>
  );
};

TubeWellDoorStatus.propTypes = {
  className: PropTypes.string
};

export default TubeWellDoorStatus;
