/* eslint-disable indent */
/* eslint-disable linebreak-style */
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
import { Grid, Hidden } from '@material-ui/core';
import GeyserDashboardDefault from '../../GeyserDashboardDefault/GeyserDashboardDefault';
import ChartComponent from './ChartComponent';
import Table from './Table';
import GeyserMaintananceDashboard from './GeyserMaintananceDashboard/GeyserMaintananceDashboard';
import gradients from 'utils/gradients';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
  },
  information: {
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
  },
  headerGreen: {
    backgroundImage: gradients.green,
  },
  headerRed: {
    backgroundImage: gradients.red,
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const { sensor, id } = props;
  const [index, setIndex] = useState(0);
  const settings = useSelector((state) => state.auth.user.settings);
  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };


  return (
    <div
      className={classes.root}
    >
      <ExpansionPanel>
        {sensor.system_status === true 
        ? <ExpansionPanelSummary
        aria-controls={`panel-content${props.index}`}
        expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
        id={`panel-header${props.index}`}
        className={classes.headerGreen}
        >
        <Typography className={classes.heading}>{sensor.name}</Typography>
        <Hidden mdDown>
          <Typography className={classes.information}>
          Temperature: {sensor.temperature} °C
          </Typography>
          <Typography className={classes.information}>
          Gas Valve: {sensor.gas_valve === true ? ('Open') : ('Close')}
          </Typography>
          <Typography className={classes.information}>
          Burner Status: {sensor.burner_status === true ? ('On') : ('Off')}
          </Typography>
          <Typography className={classes.information}>
          Geyser Status: {sensor.geyser_status === true ? ('On') : ('Off')}
          </Typography>
        </Hidden>
        </ExpansionPanelSummary>
        : <ExpansionPanelSummary
        aria-controls={`panel-content${props.index}`}
        expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
        id={`panel-header${props.index}`}
        className={classes.headerRed}
        >
        <Typography className={classes.heading}>{sensor.name}</Typography>
        <Hidden mdDown>
          <Typography className={classes.information}>
          Temperature: {sensor.temperature} °C
          </Typography>
          <Typography className={classes.information}>
          Gas Valve: {sensor.gas_valve === true ? ('Open') : ('Close')}
          </Typography>
          <Typography className={classes.information}>
          Burner Status: {sensor.burner_status === true ? ('On') : ('Off')}
          </Typography>
          <Typography className={classes.information}>
          Geyser Status: {sensor.geyser_status === true ? ('On') : ('Off')}
          </Typography>
        </Hidden>
        </ExpansionPanelSummary>
        }
        
       
        <ExpansionPanelDetails>
          <Grid
            alignItems="center"
            container
            direction="row"
            justify="center"
          >
            <Grid
              item
              md={12}
              xl={12}
              xs={12}
            >
              <AppBar
                color={
                  settings === 'light'
                    ? 'inherit'
                    : settings === 'dark'
                      ? 'primary'
                      : null
                }
                position="static"
              >
                <Tabs
                  centered
                  indicatorColor="secondary"
                  onChange={handleIndexChange}
                  scrollButtons="auto"
                  textColor="secondary"
                  value={index}
                >
                  <Tab label="Overview" />
                  <Tab label="Settings" />
                  <Tab label="Logs" />
                  <Tab label="Charts" />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid
              item
              md={12}
              xl={12}
              xs={12}
            >
              {index === 0 ? (
                <GeyserDashboardDefault
                  sensor={sensor}
                  settings={settings}
                />
              ) : index === 1 ? (
                <GeyserMaintananceDashboard sensor={sensor} />
              ) : index === 2 ? (
                <Table sensor={sensor} />
              ) 
              : index === 3 ? (
                <ChartComponent sensor={sensor} />
              ) 
              : null}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
