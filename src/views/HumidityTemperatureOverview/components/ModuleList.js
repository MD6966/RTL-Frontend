import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import ExpansionPanelPagination from './ExpansionPanelPagination';
import { makeStyles } from '@material-ui/styles';
import { isBrowser, isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

export default function ModuleList(props) {
  const classes = useStyles();
  const { loading, humidity } = props;
  

  return (
    <div>
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} xl={12} lg={12}>
            <CircularProgress className={classes.root} color="secondary" />
          </Grid>
        </Grid>
      ) : humidity.length === 0 && !loading ? (
        <Typography className={classes.root}>No Module Found</Typography>
      ) : isBrowser ? (
        <Grid container alignItems="center" justify="center">
          <Grid item sm={11} lg={11} md={11} xl={11}>
            <ExpansionPanelPagination />
          </Grid>
        </Grid>
      ) : isMobile ? (
        <ExpansionPanelPagination />
      ) : null}
    </div>
  );
}
