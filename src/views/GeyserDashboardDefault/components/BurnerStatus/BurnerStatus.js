/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Animated } from 'react-animated-css';
// import { Label } from 'components';
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
    flexWrap: 'wrap',
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  },
  // label: {
  //   marginLeft: theme.spacing(1),
  //   backgroundColor: theme.palette.error.main
  // }
}));

const BurnerStatus = (props) => {
  const { className, status, sensor, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === true) {
        setS('On');
      } else {
        setS('Off');
      }
    }, 500);
  }, [status]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        >
         Burner Status
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
          >{s}
          </Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <img
          height="30"
          src="images\icons\burner.png"
          width="30"
          alt="burner"
        />
      </Avatar>
    </Card>
  );
};

BurnerStatus.propTypes = {
  className: PropTypes.string
};

export default BurnerStatus;
