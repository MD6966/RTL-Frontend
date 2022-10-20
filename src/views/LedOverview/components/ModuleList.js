import React from 'react';
import ExpansionPanelPagination from './ExpansionPanelPagination';
import { CircularProgress, Typography } from '@material-ui/core';

export default function ModuleList(props) {
  const { loading, led } = props;

  return (
    <div>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : led.length === 0 && !loading ? (
        <Typography>No Modules Found</Typography>
      ) : (
        <ExpansionPanelPagination />
      )}
    </div>
  );
}
