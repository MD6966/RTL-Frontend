import React from 'react';
import ExpansionPanelPagination from './ExpansionPanelPagination';
import { CircularProgress, Typography, Grid } from '@material-ui/core';
import { isBrowser, isMobile } from 'react-device-detect';

export default function ModuleList(props) {
  const { loading, fuel } = props;

  return (
    <div>
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} xl={12} lg={12}>
            <CircularProgress color="secondary" />
          </Grid>
        </Grid>
      ) : fuel.length === 0 && !loading ? (
        <Typography>No Modules Found</Typography>
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
