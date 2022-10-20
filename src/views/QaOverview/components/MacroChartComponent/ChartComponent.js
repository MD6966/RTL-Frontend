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

import { getLmsMacroChartData } from 'store/actions';
import SensorSelect from './components/SensorSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  Heading: {
    marginTop: theme.spacing(3),
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
  const lms = useSelector((state) => state.lms.lms);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lms.macroChartData);
  const labels = useSelector((state) => state.lms.macroChartLabels);
  const isLoading = useSelector((state) => state.lms.generalLoading);
  const isChartLoading = useSelector((state) => state.lms.macroChartLoading);
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Average Ph');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('ph');
  const [type, setType] = useState('line');
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    if (tab === 2) {
      dispatch(getLmsMacroChartData(chartName, chartType, sensors));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getLmsMacroChartData(event.target.value, chartType, sensors));

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
    dispatch(getLmsMacroChartData(chartName, event.target.value, sensors));
  };

  useEffect(() => {
    if (sensors.length > 0) {
      dispatch(getLmsMacroChartData(chartName, chartType, sensors));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensors]);

  return (
    <Fragment>
      <Grid container>
        <Grid item md={12} sm={12} xl={12} xs={12}>
          <Typography variant="h2" className={classes.Heading}>
            Compare Values:
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xl={6} xs={12}>
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
              <MenuItem value="ph">Average pH Chart</MenuItem>
              <MenuItem value="tds">Average TDS Chart</MenuItem>
            </Select>
          </FormControl>

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
        <Grid item md={12} sm={12} xl={12} xs={12}>
          {isLoading ? null : (
            <SensorSelect
              sensors={lms}
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
