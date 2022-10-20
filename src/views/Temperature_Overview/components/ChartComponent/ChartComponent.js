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
import { chartData } from 'store/actions/temperature_Actions';

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
  const temp = useSelector((state) => state.temp.temp);
  const index = temp.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.temp.temp[index].graphs.data);
  const labels = useSelector((state) => state.temp.temp[index].graphs.labels);
  const Loading = useSelector((state) => state.temp.chartLoading);
  
  const inputLabel = React.useRef(null);
  const classes = useStyles();
  const [title, setTitle] = useState('Temperature');
  const [chartType, setChartType] = useState('temperature');
  const [chartName, setChartName] = useState('week');
  const [type, setType] = useState('line');

  useEffect(() => {
    dispatch(chartData(id, chartType, chartName));
  }, []);

  const handleChangeType = (event) => {
    setChartType(event.target.value);
    dispatch(chartData(id, event.target.value, chartName));

    if (event.target.value === 'temperature') {
      setTitle('Temperature');
      setType('line');
    } else if (event.target.value === 'humidity') {
      setTitle('Humidity');
      setType('line');
    }
  };

  const handleChangeRange = (event) => {
    setChartName(event.target.value);
    dispatch(chartData(id, chartType, event.target.value));
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
              value={chartType}
            >
              <MenuItem value="temperature">Temperature Chart</MenuItem>
              <MenuItem value="humidity">Humidity Chart</MenuItem>
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
              value={chartName}
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
          {Loading ? (
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
              <CardContent
                className={classes.content}
              >
                
              </CardContent>
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
                            title === 'Temperature' ? (' Average Temperature') : 
                              title === 'Humidity' ? (' Average Humidity') : (null)
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
                          tooltip={chartType}
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
