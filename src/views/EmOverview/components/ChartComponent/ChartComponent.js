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
import Chart from './components'
import { getEmChartData } from 'store/actions/emAction';
import { SingleLineChart } from './components/Chart';


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
  const { className, sensor,...rest } = props;
  const id = props.sensor._id;
  const em = useSelector((state) => state.em.sensor);
  const index = em.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const Va_data = useSelector((state) => state.em.vaChart);
  const Vb_data = useSelector((state) => state.em.vbChart);
  const Vc_data = useSelector((state) => state.em.vcChart);
  const Ia_data = useSelector((state) => state.em.iaChart);
  const Ib_data = useSelector((state) => state.em.ibChart);
  const Ic_data = useSelector((state) => state.em.icChart);
  const labels = useSelector((state) => state.em.sensor[index].charts.labels);
  const data = useSelector((state) => state.em.sensor[index].charts.data);
  const isLoading = useSelector((state) => state.em.sensor[index].charts.isLoading);
  const inputLabel = React.useRef(null);
  const classes = useStyles();
  const [title, setTitle] = useState('Voltage');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('voltage');
  const [type, setType] = useState('line');
  useEffect(() => {
    dispatch(getEmChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getEmChartData(event.target.value, chartType, id));

    if (event.target.value === 'voltage') {
      setTitle('Voltage');
      setType('line');
    } else if (event.target.value === 'current') {
      setTitle('Current');
      setType('line');
    } else if (event.target.value === 'powerFactor') {
      setTitle('Power Factor');
      setType('line');
    } else if (event.target.value === 'realPower') {
      setTitle('Real Power');
      setType('line');
    } else if (event.target.value === 'apparentPower') {
      setTitle('Apparent Power');
      setType('line');
    } else if (event.target.value === 'F') {
      setTitle('Frequency');
      setType('line');
    } else if (event.target.value === 'unit') {
      setTitle('Unit');
      setType('line');
    } else if (event.target.value === 'abnormal') {
      setTitle('Abnormal State');
      setType('line');
    } 
  };
   
  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getEmChartData(chartName, event.target.value, id));
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
              <MenuItem value="voltage">Voltage Chart</MenuItem>
              <MenuItem value="current">Current Chart</MenuItem>
              <MenuItem value="powerFactor">Power Factor Chart</MenuItem>
              <MenuItem value="realPower">Real Power Chart</MenuItem>
              <MenuItem value="apparentPower">Apparent Power Chart</MenuItem>
              <MenuItem value="F">Frequency Chart</MenuItem>
              <MenuItem value="unit">Unit Chart</MenuItem>
              <MenuItem value="abnormal">Abnormal State Chart</MenuItem>
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
                    style={{padding: '130px 0px 0px 0px', maxWidth: '4.333333%'}}
                    xs={12}
                  >
                    <div style={{transform: 'rotateZ(90deg)'}}>
                      <Typography
                        style={{textAlign: 'center', width: '160px', color: '#546e7b'}}
                        variant="h6"
                      >
                        {
                          title === 'Voltage' ? (' Average Voltage') : 
                            title === 'Current' ? (' Average Current') : 
                              title === 'Power Factor' ? (' Average Power Factor') :
                                title === 'Real Power' ? (' Average Real Power') : 
                                  title === 'Apparent Power' ? (' Average Apparent Power') :
                                    title === 'Frequency' ? ('Average Frequency') :
                                      title === 'Unit' ? (' Average Unit') :
                                        title === 'Abnormal State' ? (' Sum of Abnormal State'): (null)
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
                      {chartName === 'voltage' && Vc_data.isLoading === false ? 
                        <Chart
                          a={Va_data}
                          b={Vb_data}
                          c={Vc_data}
                          className={classes.chart}
                          tooltip={chartName}
                          type={type}
                        /> : chartName === 'current' && Ic_data.isLoading === false ?  
                          <Chart
                            a={Ia_data}
                            b={Ib_data}
                            c={Ic_data}
                            className={classes.chart}
                            tooltip={chartName}
                            type={type}
                          /> :  isLoading === false ?  
                  
                            <SingleLineChart
                              className={classes.chart}
                              data={data}
                              labels={labels}
                              tooltip={chartName}
                              type={type}
                            />
                            : <CircularProgress />
                    
                      } 
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
        </Grid>
      </Grid>
    </Fragment>
  );
};

ChartComponent.propTypes = {
  className: PropTypes.string
};

export default ChartComponent;
