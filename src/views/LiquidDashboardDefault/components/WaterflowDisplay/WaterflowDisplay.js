import React from 'react';
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
  }
}));

const WaterflowDisplay = (props) => {
  const { className, waterflow, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Waterflow Value
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{waterflow}</Typography>
        </div>
      </div>
      <Avatar className={classes.avatarGreen}>
        <img alt="Waterflow Icon" src="/images/icons/water.png" />
      </Avatar>
    </Card>
  );
};

WaterflowDisplay.propTypes = {
  className: PropTypes.string
};

export default WaterflowDisplay;
