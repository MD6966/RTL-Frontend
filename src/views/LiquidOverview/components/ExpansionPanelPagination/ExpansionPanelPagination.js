import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider } from '@material-ui/core';
import { Paginate } from 'components';
import ExpansionPanel from '../expansionPanel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3),
    marginBotton: theme.spacing(3)
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
  const lms = useSelector(state => state.lms.lms);

  const handlePageChange = data => {
    setOffset(data.selected * rowsPerPage);
    setPage(data.selected);
  };

  return (
    <>
      <div className={classes.results}>
        <Typography color="textSecondary" gutterBottom variant="body2">
          {lms.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(lms.length / rowsPerPage)}
        </Typography>
        {lms.slice(offset, offset + rowsPerPage).map((f, index) => (
          <>
            <ExpansionPanel
              className={classes.results}
              index={index}
              key={index}
              sensor={f}
            />
            <Divider className={classes.results} key={f._id} />
          </>
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate
          onPageChange={handlePageChange}
          pageCount={Math.ceil(lms.length / rowsPerPage)}
        />
      </div>
    </>
  );
};

export default ExpansionPanelPagination;
