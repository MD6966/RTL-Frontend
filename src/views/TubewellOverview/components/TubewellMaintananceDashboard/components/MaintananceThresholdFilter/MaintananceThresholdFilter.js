/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import FormDialog from './FormDialog';
import { Animated } from 'react-animated-css';
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
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '15px'
  }
}));

const MaintananceThresholdFilter = (props) => {
  const { className, type, id, threshold, ...rest } = props;
  const [animate, toggleAnimate] = useState(true);
  const classes = useStyles();

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
          Filter Maintenance Threshold
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography variant="h3">{threshold} Days </Typography>
          </Animated>
          <FormDialog
            className={classes.label}
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

MaintananceThresholdFilter.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default MaintananceThresholdFilter;
