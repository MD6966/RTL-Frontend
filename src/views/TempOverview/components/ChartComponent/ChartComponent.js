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
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { GenericMoreButton } from 'components';
import { Chart } from './components';

import { getLmsChartData } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  label: {
    backgroundColor: '#fff'
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
  const { className, ...rest } = props;
  const id = props.sensor._id;
  const lms = useSelector((state) => state.lms.lms);
  const index = lms.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lms.lms[index].charts.data);
  const labels = useSelector((state) => state.lms.lms[index].charts.labels);
  const isLoading = useSelector(
    (state) => state.lms.lms[index].charts.isLoading
  );
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Average Ph');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('ph');
  const [type, setType] = useState('line');

  useEffect(() => {
    dispatch(getLmsChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getLmsChartData(event.target.value, chartType, id));

    if (event.target.value === 'ph') {
      setTitle('Average pH Value');
      setType('line');
    } else if (event.target.value === 'tds') {
      setTitle('Average TDS Count');
      setType('line');
    }
  };

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getLmsChartData(chartName, event.target.value, id));
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item md={11} sm={11} xl={5} lg={5} xs={11}>
          <FormControl className={classes.root} fullWidth variant="outlined">
            <InputLabel
              id="demo-simple-select-outlined-label"
              ref={inputLabel}
              className={classes.label}>
              Chart Type
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              onChange={handleChangeType}
              value={chartName}>
              <MenuItem value="ph">Average pH Chart</MenuItem>
              <MenuItem value="tds">Average TDS Chart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={11} sm={11} xl={5} xs={11} lg={5}>
          <FormControl className={classes.root} fullWidth variant="outlined">
            <InputLabel
              id="demo-select-outlined-label"
              ref={inputLabel}
              className={classes.label}>
              Chart Range
            </InputLabel>
            <Select
              id="demo-select-outlined"
              onChange={handleChangeRange}
              value={chartType}>
              <MenuItem value="week">Past Week</MenuItem>
              <MenuItem value="month">Past Month</MenuItem>
              <MenuItem value="year">Year Chart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={12} sm={12} xl={12} xs={12}>
          {isLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Card {...rest} className={clsx(classes.root, className)}>
              <CardHeader action={<GenericMoreButton />} title={title} />
              <Divider />
              <CardContent className={classes.content}>
                <PerfectScrollbar>
                  <div className={classes.inner}>
                    <Chart
                      className={classes.chart}
                      data={data}
                      labels={labels}
                      tooltip={chartName}
                      type={type}
                    />
                  </div>
                </PerfectScrollbar>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

ChartComponent.propTypes = {
  className: PropTypes.string
};

export default ChartComponent;
