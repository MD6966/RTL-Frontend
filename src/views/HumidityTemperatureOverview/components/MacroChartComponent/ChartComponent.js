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
  Typography,
  Box
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { GenericMoreButton } from 'components';
import { Chart } from './components';
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
  const { className, ...rest } = props;
  const humidity = useSelector((state) => state.humidity.humidity);
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.humidity.macroChartData);
  const labels = useSelector((state) => state.humidity.macroChartLabels);
  const isLoading = useSelector((state) => state.humidity.isLoading);
  const isChartLoading = useSelector(
    (state) => state.humidity.macroChartLoading
  );
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  const [title] = useState('Average Temperature');
  const [chartType, setChartType] = useState('week');
  const [type] = useState('line');
  const [chartName, setChartName] = useState('motor');
  const [sensors, setSensors] = useState([]);

  const handleChangeRange = (event) => {
    setChartType(event.target.value);
    // dispatch(getHumidityMacroChartData(event.target.value, sensors));
  };

  useEffect(() => {
    if (sensors.length > 0) {
      // dispatch(getHumidityMacroChartData(chartType, sensors));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensors]);

  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          md={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <Typography
            className={classes.Heading}
            variant="h2"
          >
            Compare Values:
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xl={6}
          xs={12}
        >
          <FormControl
            className={classes.root}
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
          md={6}
          sm={12}
          xl={6}
          xs={12}
        >
          {isLoading ? null : (
            <SensorSelect
              selected={sensors}
              selectedids={setSensors}
              sensors={humidity}
            />
          )}
        </Grid>
        <Grid
          item
          md={12}
          sm={12}
          xl={12}
          xs={12}
        >
          {isChartLoading ? (
            <Box
              display="flex"
              justifyContent="center"
            >
              <CircularProgress
                className={classes.progress}
                color="secondary"
              />
            </Box>
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
                  <div className={classes.inner}>
                    <Chart
                      className={classes.chart}
                      data={data}
                      labels={labels}
                      tooltip={'Temperature Comparison Chart'}
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
