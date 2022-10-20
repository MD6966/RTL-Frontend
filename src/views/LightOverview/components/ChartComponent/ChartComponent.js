/* eslint-disable linebreak-style */
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
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { GenericMoreButton } from 'components';
import { Chart } from './components';

import { getLightChartData } from 'store/actions/lightAction';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
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
  const { className, ...rest } = props;
  const id = props.sensor._id;
  const light = useSelector((state) => state.hl.light);
  const index = light.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.hl.light[index].charts.data);
  const labels = useSelector((state) => state.hl.light[index].charts.labels);
  const isLoading = useSelector(
    (state) => state.hl.light[index].charts.isLoading
  );
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Radar Mode');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('radar_enable');
  const [type, setType] = useState('bar');

  useEffect(() => {
    dispatch(getLightChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getLightChartData(event.target.value, chartType, id));

    if (event.target.value === 'radar_enable') {
      setTitle('Radar Mode');
      setType('bar');
    } else if (event.target.value === 'segControl') {
      setTitle('Segment Control');
      setType('bar');
    } else if (event.target.value === 'light_time') {
      setTitle('Timer');
      setType('line');
    } 
  };

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getLightChartData(chartName, event.target.value, id));
  };

  return (
    <Fragment>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={5}
          md={12}
          sm={12}
          xl={5}
          xs={12}
        >
          <FormControl
            className={classes.root}
            fullWidth
            variant="outlined"
          >
            <InputLabel
              className={classes.label}
              id="demo-simple-select-outlined-label"
              ref={inputLabel}
            >
              Chart Type
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              onChange={handleChangeType}
              value={chartName}
            >
              <MenuItem value="radar_enable">Radar Mode Chart</MenuItem>
              <MenuItem value="segControl">Segment Control Chart</MenuItem>
              <MenuItem value="light_time">Timer Chart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          lg={5}
          md={12}
          sm={12}
          xl={5}
          xs={12}
        >
          <FormControl
            className={classes.root}
            fullWidth
            variant="outlined"
          >
            <InputLabel
              className={classes.label}
              id="demo-select-outlined-label"
              ref={inputLabel}
            >
              Chart Range
            </InputLabel>
            <Select
              id="demo-select-outlined"
              onChange={handleChangeRange}
              value={chartType}
            >
              <MenuItem value="week">Past Week</MenuItem>
              <MenuItem value="month">Past Month</MenuItem>
              <MenuItem value="year">Year Chart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          md={12}
          sm={12}
          xl={12}
          xs={12}
        >
          {isLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardHeader
                action={<GenericMoreButton />}
                title={title}
              />
              <Divider />
              <CardContent className={classes.content}>
                <PerfectScrollbar>
                  <Grid
                    className={classes.container}
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      lg={1}
                      sm={12}
                      style={{padding: '150px 0px 0px 0px', maxWidth: '4.333333%'}}
                      xs={12}
                    >
                      <div style={{transform: 'rotateZ(90deg)'}}>
                        <Typography
                          style={{textAlign: 'center', width: '145px', color: '#546e7b'}}
                          variant="h6"
                        >
                          {
                            title === 'Radar Mode' ? (' Radar Enable Count') : 
                              title === 'Segment Control' ? (' Segment On Count') :
                                title === 'Timer' ? (' Average') : (null)
                          }
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      lg={11}
                      sm={12}
                      style={{padding: '12px 12px 0px 0px'}}
                      xs={12}
                    >
                      <div className={classes.inner}>
                        <Chart
                          className={classes.chart}
                          data={data}
                          labels={labels}
                          tooltip={chartName}
                          type={type}
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      sm={12}
                      xs={12}
                    >
                      <div style={{marginTop: '10px'}}>
                        <Typography
                          style={{textAlign: 'center', color: '#546e7b'}}
                          variant="h6"
                        >
                          {
                            chartType === 'year' ? ('Month') : ('Days')
                          }
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
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
