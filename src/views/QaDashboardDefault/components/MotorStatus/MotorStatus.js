import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
}));

const MotorStatus = props => {
  const { className, motor, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        >
          Motor Status
        </Typography>
        <div className={classes.details}>
          {motor === 0 ? (
            <Typography variant="h3">Off</Typography>
          ) : motor === 1 ? (
            <Typography variant="h3">On</Typography>
          ) : (
            null
          )}
        </div>
      </div>
      {motor === 0 ? (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faPowerOff} />

        </Avatar>
      ) : motor === 1 ? (
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faPowerOff} />
        </Avatar>
      ) : (
        null)}
    </Card>
  );
};

MotorStatus.propTypes = {
  className: PropTypes.string
};

export default MotorStatus;
