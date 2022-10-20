import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import FormDialog from './FormDialog';

import gradients from 'utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFE7D9'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const Maintanance = (props) => {
  const { className, id, time, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography style={{color:'#7A0C2E'}}  component="h3" gutterBottom variant="overline">
          Log Maintanance
        </Typography>
        <div className={classes.details}>
          <FormDialog className={classes.label} id={id} time={time} />
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

Maintanance.propTypes = {
  className: PropTypes.string
};

export default Maintanance;
