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
  CircularProgress
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { GenericMoreButton } from 'components';
import Chart from './components'
import { getWtChartData } from 'store/actions/wtAction';
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
  const wt = useSelector((state) => state.wt.sensor);
  const index = wt.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.wt.sensor[index].charts.labels);
  const data = useSelector((state) => state.wt.sensor[index].charts.data);
  const isLoading = useSelector((state) => state.wt.sensor[index].charts.isLoading);
  const inputLabel = React.useRef(null);
  const classes = useStyles();
  const [title, setTitle] = useState('Motor Status');
  const [chartType, setChartType] = useState('week');
  const [chartName, setChartName] = useState('motor');
  const [type, setType] = useState('line');
  useEffect(() => {
    dispatch(getWtChartData(chartName, chartType, id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (event) => {
    setChartName(event.target.value);
    dispatch(getWtChartData(event.target.value, chartType, id));

    if (event.target.value === 'motor') {
      setTitle('Motor Status');
      setType('line');
    } else if (event.target.value === 'force-motor') {
      setTitle('Force Motor Status');
      setType('line');
    } else if (event.target.value === 'fillLevel') {
      setTitle('Upper Tank Fill Level');
      setType('line');
    } else if (event.target.value === 'fillLevel1') {
      setTitle('Lower Tank Fill Level');
      setType('line');
    } 
  };
   
  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    dispatch(getWtChartData(chartName, event.target.value, id));
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
              <MenuItem value="motor">Motor Status</MenuItem>
              <MenuItem value="force-motor">Force Motor </MenuItem>
              <MenuItem value="fillLevel">Upper Tank Fill Level Chart</MenuItem>
              <MenuItem value="fillLevel1">Lower Tank Fill Level Chart</MenuItem>
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
                <div className={classes.inner}>
                  {chartName === 'motor' || chartName ==='force-motor' || chartName ==='fillLevel' || chartName ==='fillLevel1' && isLoading === false ? 
                     
                  
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
