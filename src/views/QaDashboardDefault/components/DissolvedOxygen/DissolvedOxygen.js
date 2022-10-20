import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';

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
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
}));

const DissolvedOxygen = props => {
  const { className, o2, threshold, phone, upperthreshold, ...rest } = props;

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
          Dissolved Oxygen Value
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{o2} mg/L</Typography>
        </div>
      </div>
      <Avatar className={classes.avatarBlue}>
        <img
          alt="O2"
          src="/images/icons/oxygen.png"
        />
      </Avatar>
    </Card>
  );
};

DissolvedOxygen.propTypes = {
  className: PropTypes.string
};

export default DissolvedOxygen;
