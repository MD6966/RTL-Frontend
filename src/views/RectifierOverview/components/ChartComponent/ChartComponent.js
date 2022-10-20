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
import { getRectifierChartData } from 'store/actions';


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
  const rectifier = useSelector((state) => state.rectifier.rectifier);
  const index = rectifier.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rectifier.rectifier[index].charts.data);
  const labels = useSelector((state) => state.rectifier.rectifier[index].charts.labels);
  const isLoading = useSelector(
    (state) => state.rectifier.rectifier[index].charts.isLoading
  );
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Input Power Status');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('ac_charts');
  const [type, setType] = useState('bar');

  useEffect(() => {
    dispatch(getRectifierChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getRectifierChartData(event.target.value, chartType, id));

    if (event.target.value === 'ac_charts') {
      setTitle('Input Power Status');
      setType('bar');
    } else if (event.target.value === 'rec_charts') {
      setTitle('Rectification Status');
      setType('bar');
    } else if (event.target.value === 'battery_charts') {
      setTitle('Battery Bank Connection Status');
      setType('bar');
    }
  };

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getRectifierChartData(chartName, event.target.value, id));
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
              <MenuItem value="ac_charts">Input Power Status</MenuItem>
              <MenuItem value="rec_charts">Rectification Status</MenuItem>
              <MenuItem value="battery_charts">Battery Bank Connection Status</MenuItem>
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
                      style={{padding: '60px 0px 0px 0px', maxWidth: '4.333333%'}}
                      xs={12}
                    >
                      <div style={{transform: 'rotateZ(90deg)'}}>
                        <Typography
                          style={{textAlign: 'center', width: '280px', color: '#546e7b'}}
                          variant="h6"
                        >
                          {
                            title === 'Input Power Status' ? (' Input Power Up Count') : 
                              title === 'Rectification Status' ? (' Rectification Up Count') : 
                                title === 'Battery Bank Connection Status' ? (' Battery Bank Connection Connected Count') : (null)
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
