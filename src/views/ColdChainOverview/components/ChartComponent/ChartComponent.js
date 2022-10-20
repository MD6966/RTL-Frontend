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

import { getColdChainChartData } from 'store/actions';

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
  const { className, ...rest } = props;
  const id = props.sensor._id;
  const chains = useSelector((state) => state.chain.chain);
  const index = chains.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chain.chain[index].charts.data);
  const labels = useSelector((state) => state.chain.chain[index].charts.labels);
  const isLoading = useSelector(
    (state) => state.chain.chain[index].charts.isLoading
  );
  const chain = useSelector((state) => state.chain.chain[index]);
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Average Temperature');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('temperature');
  const [type, setType] = useState('line');

  useEffect(() => {
    dispatch(getColdChainChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getColdChainChartData(event.target.value, chartType, id));

    if (event.target.value === 'status') {
      setTitle('Door Open Count');
      setType('bar');
    } else if (event.target.value === 'temperature') {
      setTitle('Average Temperature');
      setType('line');
    } else if (event.target.value === 'ignitionStatus') {
      setTitle('Vehicle On Count');
      setType('bar');
    }
  };

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getColdChainChartData(chartName, event.target.value, id));
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item md={12} sm={12} xl={12} xs={12}>
          <FormControl className={classes.root} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label" ref={inputLabel}>
              Chart Type
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              onChange={handleChangeType}
              value={chartName}>
              <MenuItem value="temperature">Temperature Chart</MenuItem>
              {chain.type === 'store' ? (
                <MenuItem value="status">Door Status Chart</MenuItem>
              ) : chain.type === 'vehicle' ? (
                <MenuItem value="ignitionStatus">
                  Ignition Status Chart
                </MenuItem>
              ) : null}
            </Select>
          </FormControl>

          <FormControl className={classes.root} variant="outlined">
            <InputLabel id="demo-select-outlined-label" ref={inputLabel}>
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
