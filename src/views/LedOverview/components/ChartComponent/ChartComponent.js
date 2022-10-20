import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
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
import { Chart } from './components';
import { getLedChartData } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
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
  const { className, sensor, ...rest } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const id = sensor._id;
  const led = useSelector((state) => state.led.led);
  const index = led.findIndex((l) => l._id === id);
  const data = useSelector((state) => state.led.led[index].charts.data);
  const isLoading = useSelector(
    (state) => state.led.led[index].charts.isLoading
  );
  const [title] = useState('Timeline');

  useEffect(() => {
    dispatch(getLedChartData(7, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader action={<GenericMoreButton />} title={title} />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              {isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Chart className={classes.chart} data={data} index={index} />
              )}
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </Fragment>
  );
};

ChartComponent.propTypes = {
  className: PropTypes.string
};

export default ChartComponent;
