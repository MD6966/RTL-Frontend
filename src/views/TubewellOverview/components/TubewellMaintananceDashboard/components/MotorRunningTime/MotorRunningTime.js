/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
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
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '20px',
    paddingBottom: '30px'
  },
  label: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const MotorRunningTime = (props) => {
  const { className, time, ...rest } = props;
  let [hours, setHours] = useState(null);
  let [minutes, setMinutes] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    if (time.includes(':')) {
      let duration = time.split(':');
      setHours(duration[0]);
      setMinutes(duration[1]);
    } else {
      setMinutes(time);
    }
  }, [time]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <Typography
          className={classes.headingText}
          component="h3"
          gutterBottom
          variant="overline"
        >
          Hydro Pump Running Time
        </Typography>
        <div className={classes.details}>
          { time.includes(':') ? (
            <>
              <Typography variant="h3">{hours} Hrs</Typography>
              <Typography
                className={classes.label}
                variant="h5"
              >
                {minutes} mins
              </Typography>
            </>
          ) : ( 
            <Typography
              className={classes.label}
              variant="h5"
            > 
              {minutes} mins 
            </Typography> 
          ) }
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <AlarmIcon />
      </Avatar>
    </Card>
  );
};

MotorRunningTime.propTypes = {
  className: PropTypes.string,
  oilRunningTime: PropTypes.number
};

export default MotorRunningTime;
