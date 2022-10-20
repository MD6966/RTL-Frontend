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
  CircularProgress,
  Typography
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { GenericMoreButton } from 'components';
import { Chart } from './components';

import { getFuelMacroChartData } from 'store/actions';
import SensorSelect from './components/SensorSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  Heading: {
    marginBottom: theme.spacing(3)
  },
  label: {
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
  const { className, tab, ...rest } = props;
  const fuel = useSelector((state) => state.fuel.fuel);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fuel.macroChartData);
  const labels = useSelector((state) => state.fuel.macroChartLabels);
  const isLoading = useSelector((state) => state.fuel.generalLoading);
  const isChartLoading = useSelector((state) => state.fuel.macroChartLoading);
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Average Fill Level');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('fillLevel');
  const [sensors, setSensors] = useState([]);
  const [type, setType] = useState('line');

  useEffect(() => {
    if (tab === 2) {
      dispatch(getFuelMacroChartData(chartName, chartType, sensors));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getFuelMacroChartData(event.target.value, chartType, sensors));

    if (event.target.value === 'fillLevel') {
      setTitle('Average Fill Level');
      setType('line');
    } else if (event.target.value === 'doorStatus') {
      setTitle('Door Open Count');
      setType('bar');
    } else if (event.target.value === 'genStatus') {
      setTitle('Gen Open Count');
      setType('bar');
    } else if (event.target.value === 'voltage') {
      setTitle('Average voltage');
      setType('line');
    } else if (event.target.value === 'temperature') {
      setTitle('Average Temperature');
      setType('line');
    } else if (event.target.value === 'power') {
      setTitle('Average Power');
      setType('line');
    } else if (event.target.value === 'current') {
      setTitle('Average Current');
      setType('line');
    } else if (event.target.value === 'liters') {
      setTitle('Average Liters');
      setType('line');
    }
  };

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getFuelMacroChartData(chartName, event.target.value, sensors));
  };

  useEffect(() => {
    if (sensors.length > 0) {
      dispatch(getFuelMacroChartData(chartName, chartType, sensors));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensors]);

  return (
    <Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid item md={12} sm={12} xl={12} xs={12}>
          <Typography variant="h2" className={classes.Heading}>
            Compare Values:
          </Typography>
        </Grid>
        <Grid item md={3} sm={12} xl={3} xs={12}>
          <FormControl className={classes.root} variant="outlined">
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
              <MenuItem value="fillLevel">Fill Level Chart</MenuItem>
              <MenuItem value="temperature">Temperature Chart</MenuItem>
              <MenuItem value="doorStatus">Door Status Chart</MenuItem>
              <MenuItem value="genStatus">Gen Status Chart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} sm={12} xl={3} xs={12}>
          <FormControl className={classes.root} variant="outlined">
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
        <Grid item md={6} sm={12} xl={6} xs={12}>
          {isLoading ? null : (
            <SensorSelect
              sensors={fuel}
              selectedids={setSensors}
              selected={sensors}
            />
          )}
        </Grid>
        <Grid item md={12} sm={12} xl={12} xs={12}>
          {isChartLoading ? (
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} md={12} xl={12} lg={12}>
                <CircularProgress
                  className={classes.progress}
                  color="secondary"
                />
              </Grid>
            </Grid>
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
