/* eslint-disable linebreak-style */
import React, { useState } from 'react';
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
import ChartComponent from './ChartComponent';
import Table from './Table';
import Em_DashboardDefault from 'views/EmDashboardDefault';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  information: {
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightSmall
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const { sensor } = props;
  const [index, setIndex] = useState(0);
  const settings = useSelector((state) => state.auth.user.settings);
  
  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls={`panel-content${props.index}`}
          expandIcon={<ExpandMoreIcon />}
          id={`panel-header${props.index}`}
        >
          <Typography className={classes.heading}>{sensor.name}</Typography>
          <Hidden mdDown>
            <Typography className={classes.information}>
              Va : {sensor.Va.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              Vb : {sensor.Vb.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              Vc : {sensor.Vc.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              Ia : {sensor.Ia.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              Ib : {sensor.Ib.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              Ic : {sensor.Ic.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              Pf : {sensor.Pf.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              PA : {sensor.PA.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              PR : {sensor.PR.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              U : {sensor.U.toFixed(2)}
            </Typography>
          </Hidden>
        </ExpansionPanelSummary>
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
                  <Tab label="Logs" />
                  <Tab label="Graphs" />
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
                <Em_DashboardDefault
                  sensor={sensor}
                  settings={settings}
                />
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
