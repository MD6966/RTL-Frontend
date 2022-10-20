import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
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
    marginLeft: theme.spacing(4)
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
  }
}));

const LatLong = (props) => {
  const { className, latitude, longitude, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Latitude & Longitude
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{latitude}</Typography>
          <Typography className={classes.label} variant="h3">
            {longitude}
          </Typography>
        </div>
      </div>
      <Avatar className={classes.avatarGreen}>
        <FontAwesomeIcon icon={faSatelliteDish} />
      </Avatar>
    </Card>
  );
};

LatLong.propTypes = {
  className: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default LatLong;
