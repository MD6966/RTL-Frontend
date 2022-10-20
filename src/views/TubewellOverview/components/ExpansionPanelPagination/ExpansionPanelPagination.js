/* eslint-disable linebreak-style */
import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider } from '@material-ui/core';
import { Paginate } from 'components';
import ExpansionPanel from '../expansionPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const ExpansionPanelPagination = () => {
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const tubewell = useSelector((state) => state.tw.tubewell);

  const handlePageChange = (data) => {
    setOffset(data.selected * rowsPerPage);
    setPage(data.selected);
  };

  return (
    <Fragment className={classes.root}>
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {tubewell.length} Sensors found. Page {page + 1} of{' '}
          {Math.ceil(tubewell.length / rowsPerPage)}
        </Typography>
        {tubewell.slice(offset, offset + rowsPerPage).map((f, index) => (
          <>
            <ExpansionPanel
              className={classes.results}
              index={index}
              key={index}
              sensor={f}
            />
            <Divider
              className={classes.results}
              key={`${index}t`}
            />
          </>
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate
          onPageChange={handlePageChange}
          pageCount={Math.ceil(tubewell.length / rowsPerPage)}
        />
      </div>
    </Fragment>
  );
};

export default ExpansionPanelPagination;
