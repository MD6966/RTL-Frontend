/* eslint-disable linebreak-style */
import React from 'react';
import ExpansionPanelPagination from './ExpansionPanelPagination';
import { CircularProgress, Typography, Grid } from '@material-ui/core';
import { isBrowser, isMobile } from 'react-device-detect';

export default function ModuleList(props) {
  const { loading, geyser } = props;

  return (
    <div>
      {loading ? (
        <Grid
          alignItems="center"
          container
          justify="center"
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <CircularProgress color="secondary" />
          </Grid>
        </Grid>
      ) : geyser.length === 0 && !loading ? (
        <Typography>No Modules Found</Typography>
      ) : isBrowser ? (
        <Grid
          alignItems="center"
          container
          justify="center"
        >
          <Grid
            item
            lg={11}
            md={11}
            sm={11}
            xl={11}
          >
            <ExpansionPanelPagination />
          </Grid>
        </Grid>
      ) : isMobile ? (
        <ExpansionPanelPagination />
      ) : null}
    </div>
  );
}
