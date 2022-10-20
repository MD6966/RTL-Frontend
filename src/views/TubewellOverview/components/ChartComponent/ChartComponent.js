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
import { getTubewellChartData } from 'store/actions';

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
  const tubewell = useSelector((state) => state.tw.tubewell);
  const index = tubewell.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tw.tubewell[index].charts.data);
  const labels = useSelector((state) => state.tw.tubewell[index].charts.labels);
  const isLoading = useSelector(
    (state) => state.tw.tubewell[index].charts.isLoading
  );
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title, setTitle] = useState('Hydro Pump Status');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('motor');
  const [type, setType] = useState('bar');

  useEffect(() => {
    dispatch(getTubewellChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getTubewellChartData(event.target.value, chartType, id));

    if (event.target.value === 'motor') {
      setTitle('Hydro Pump Status');
      setType('bar');
    } else if (event.target.value === 'force-motor') {
      setTitle('Force Hydro Pump Status');
      setType('bar');
    } else if (event.target.value === 'fillLevel') {
      setTitle('Tank Fill Level');
      setType('line');
    } else if (event.target.value === 'door_status') {
      setTitle('Tubewell Door Status');
      setType('bar');
    } else if (event.target.value === 'ph') {
      setTitle('PH Value');
      setType('line');
    } else if (event.target.value === 'tds') {
      setTitle('TDS Value');
      setType('line');
    } else if (event.target.value === 't_lid') {
      setTitle('Tank Lid Status');
      setType('bar');
    } else if (event.target.value === 'alarm') {
      setTitle('Smoke Alarm Status');
      setType('bar');
    } else if (event.target.value === 'Ia') {
      setTitle('Line Current Status');
      setType('line');
    } else if (event.target.value === 'volve') {
      setTitle('Priming Status');
      setType('bar');
    } else if (event.target.value === 'vib') {
      setTitle('Pump Vibration Status');
      setType('bar');
    }
  };

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getTubewellChartData(chartName, event.target.value, id));
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
              <MenuItem value="motor">Hydro Pump Status Chart</MenuItem>
              <MenuItem value="force-motor">Force Hydro Pump Status Chart</MenuItem>
              <MenuItem value="fillLevel">Fill Level Chart</MenuItem>
              <MenuItem value="door_status">Door Status Chart</MenuItem>
              <MenuItem value="ph">PH Value Chart</MenuItem>
              <MenuItem value="tds">TDS Value Chart</MenuItem>
              <MenuItem value="t_lid">Tank Lid Status Chart</MenuItem>
              <MenuItem value="alarm">Smoke Alarm Status Chart</MenuItem>
              <MenuItem value="Ia">Line Current Chart</MenuItem>
              <MenuItem value="volve">Priming Chart</MenuItem>
              <MenuItem value="vib">Pump Vibration Chart</MenuItem>
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
              <CardContent
                className={classes.content}
              >
                {/* <div>
                  <Typography
                    style={{color: '#546e7b'}}
                    variant="h6"
                  >y-axis:  
                    <span style={{fontWeight: '300'}}>{
                      title === 'Hydro Pump Status' || title === 'Force Hydro Pump Status' ? (' Running Hours per Day') : 
                        title === 'Tank Fill Level' ? (' Average FillLevel') : 
                          title === 'PH Value' ||  title === 'TDS Value' ? (' Average') :
                            title === 'Tubewell Door Status' || title === 'Tank Lid Status' ? (' Open/Close Count') : 
                              title === 'Smoke Alarm Status' ? (' Alarm Count') : (null)
                    }
                    </span>
                  </Typography>
                </div> */}
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
                            title === 'Hydro Pump Status' || title === 'Force Hydro Pump Status' ? (' Running Hours') : 
                              title === 'Tank Fill Level' ? (' Average FillLevel') : 
                                title === 'PH Value' ||  title === 'TDS Value' ? (' Average') :
                                  title === 'Tubewell Door Status' ? (' Door Open Count') :
                                    title === 'Tank Lid Status' ? (' Tank Lid Open Count') : 
                                      title === 'Smoke Alarm Status' ? (' Alarm Count') : 
                                        title === 'Line Current Status' ? (' Average Line Current') : 
                                          title === 'Priming Status' ? (' Valve Open Count') :
                                            title === 'Pump Vibration Status' ? (' Abnormal Count') : (null)
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
