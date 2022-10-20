/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlarmIcon from '@material-ui/icons/Alarm';
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
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
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
  }
}));

const TotalRunningTime = (props) => {
  const { className, time, ...rest } = props;
  let [hours, setHours] = useState(null);
  let [minutes, setMinutes] = useState(null);
 
  useEffect(() => {
    if (time.includes(':')) {
      let duration = time.split(':');
      setHours(duration[0]);
      setMinutes(duration[1]);
    } else {
      setMinutes(time);
    }
  }, [time]);

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Total Running Time
        </Typography>
        <div className={classes.details}>
          {time !== null && time.includes(':') ? (
            <>
              <Typography variant="h3">{hours} Hrs</Typography>
              <Typography className={classes.label} variant="h5">
                {minutes} mins
              </Typography>
            </>
          ) : time !== null ? (
            <Typography className={classes.label} variant="h5">
              {minutes} mins
            </Typography>
          ) : null}
        </div>
      </div>
      <Avatar className={classes.avatarRed}>
        <AlarmIcon />
      </Avatar>
    </Card>
  );
};

TotalRunningTime.propTypes = {
  className: PropTypes.string,
  totalRunningTime: PropTypes.number
};

export default TotalRunningTime;
