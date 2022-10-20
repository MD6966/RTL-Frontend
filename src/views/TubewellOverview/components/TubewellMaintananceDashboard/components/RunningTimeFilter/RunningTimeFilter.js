/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
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
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
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

const RunningTimeFilter = (props) => {
  const { className, time, sensor, ...rest } = props;
  let [hours, setHours] = useState(null);
  let [days, setDays] = useState(null);
  let [minutes, setMinutes] = useState(null);
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
          Filter Running Time
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            {time !== null && time ? (
              <>
                <Typography variant="h3">{time} Days</Typography>
              </>
            ) : null }
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatarGreen}>
        <AlarmIcon />
      </Avatar>
    </Card>
  );
};

RunningTimeFilter.propTypes = {
  RunningTime: PropTypes.number,
  className: PropTypes.string
};

export default RunningTimeFilter;
