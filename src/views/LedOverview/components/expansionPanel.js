import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, CircularProgress } from '@material-ui/core';
import LedDashboardDefault from '../../LedDashboardDefault/LedDashboardDefault';
import ChartComponent from './ChartComponent';
import Table from './Table';
import axios from 'axios';
import gradients from 'utils/gradients';
import { makeConfig } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  redPanel: {
    background: gradients.red
  },
  greenPanel: {
    background: gradients.green
  },
  yellowPanel: {
    background: gradients.orange
  },
  offPanel: {
    background: gradients.grey
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#000000',
    fontWeight: theme.typography.fontWeightRegular
  },
  information: {
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.pxToRem(12),
    color: '#000000',
    fontWeight: theme.typography.fontWeightSmall
  },
  progress: {
    marginLeft: theme.spacing(6)
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const { sensor } = props;
  const settings = useSelector((state) => state.auth.user.settings);

  const [times, setTimes] = useState({
    redTime: null,
    greenTime: null,
    yellowTime: null,
    offTime: null
  });

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const config = await makeConfig('application/json');

      try {
        const data = await axios.get(
          `${process.env.REACT_APP_URL}led/duration/${sensor._id}`,
          config
        );
        const { redTime, greenTime, offTime, yellowTime } = data.data;
        let time1 = null;
        let time2 = null;
        let time3 = null;
        let time4 = null;

        if (redTime.includes(':')) {
          let time = redTime.split(':');
          time1 = `${time[0]} Hrs ${time[1]} Mins`;
        } else {
          time1 = `${redTime} Mins`;
        }

        if (greenTime.includes(':')) {
          let time = greenTime.split(':');
          time2 = `${time[0]} Hrs ${time[1]} Mins`;
        } else {
          time2 = `${greenTime} Mins`;
        }

        if (yellowTime.includes(':')) {
          let time = yellowTime.split(':');
          time3 = `${time[0]} Hrs ${time[1]} Mins`;
        } else {
          time3 = `${yellowTime} Mins`;
        }

        if (offTime.includes(':')) {
          let time = offTime.split(':');
          time4 = `${time[0]} Hrs ${time[1]} Mins`;
        } else {
          time4 = `${offTime} Mins`;
        }

        setTimes({
          ...times,
          redTime: time1,
          greenTime: time2,
          yellowTime: time3,
          offTime: time4
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensor.color]);

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls={`panel-content${props.index}`}
          className={
            sensor.color === 'red'
              ? classes.redPanel
              : sensor.color === 'yellow'
              ? classes.yellowPanel
              : sensor.color === 'green'
              ? classes.greenPanel
              : sensor.color === 'off'
              ? classes.offPanel
              : null
          }
          expandIcon={<ExpandMoreIcon />}
          id={`panel-header${props.index}`}>
          <Typography className={classes.heading}>{sensor.name}</Typography>

          <Typography className={classes.information}>
            Color : {sensor.color}
          </Typography>
          {sensor.offline >= 0 ? (
            <Typography className={classes.information}>
              Status: Online
            </Typography>
          ) : (
            <Typography className={classes.information}>
              Status : Offline
            </Typography>
          )}
          {isLoading ? (
            <CircularProgress
              className={classes.progress}
              size={20}
              thickness={2.5}
              color="secondary"
            />
          ) : (
            <>
              <Typography className={classes.information}>
                Red Light Duration : {times.redTime}
              </Typography>
              <Typography className={classes.information}>
                Green Light Duration : {times.greenTime}
              </Typography>
              <Typography className={classes.information}>
                Yellow Light Duration : {times.yellowTime}
              </Typography>
              <Typography className={classes.information}>
                Off Duration : {times.offTime}
              </Typography>
              <Typography className={classes.information}>
                (Last 24 Hrs)
              </Typography>
            </>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid alignItems="center" container direction="row" justify="center">
            <Grid item md={12} xl={12} xs={12}>
              <AppBar
                color={
                  settings === 'light'
                    ? 'inherit'
                    : settings === 'dark'
                    ? 'primary'
                    : null
                }
                position="static">
                <Tabs
                  centered
                  indicatorColor="secondary"
                  onChange={handleIndexChange}
                  scrollButtons="auto"
                  textColor="secondary"
                  value={index}>
                  <Tab label="Overview" />
                  <Tab label="Logs" />
                  <Tab label="Graphs" />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid item md={12} xl={12} xs={12}>
              {index === 0 ? (
                <LedDashboardDefault sensor={sensor} />
              ) : index === 1 ? (
                <Table sensor={sensor} />
              ) : index === 2 ? (
                <ChartComponent sensor={sensor} />
              ) : null}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
