import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

import { GenericMoreButton } from 'components';

import MapContainer from './MapContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.light
  },
  content: {},
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(1)
    }
  },
  inner: {
    height: 375,
    minWidth: 500
  },
  chart: {
    height: '100%'
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ChartComponent = (props) => {
  const { sensor, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader action={<GenericMoreButton />} title="Location" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <MapContainer
              geofence={sensor.geofenceCenter}
              id={sensor._id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

ChartComponent.propTypes = {
  className: PropTypes.string
};

export default ChartComponent;
