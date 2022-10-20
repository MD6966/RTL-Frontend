import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  CircularProgress
} from '@material-ui/core';

import { GenericMoreButton } from 'components';

import MapContainer from './MapContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.paper
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
  const { ...rest } = props;
  const classes = useStyles();
  const sensors = useSelector((state) => state.chain.chain);
  const overview = useSelector((state) => state.chain.overviewCenter);
  const loading = useSelector((state) => state.chain.isLoading);

  React.useEffect(() => {

  }, [overview]);

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader action={<GenericMoreButton />} title="Overview" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <MapContainer
                cc={sensors}
                centerlat={overview.latitude}
                centerlng={overview.longitude}
              />
            )}
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
