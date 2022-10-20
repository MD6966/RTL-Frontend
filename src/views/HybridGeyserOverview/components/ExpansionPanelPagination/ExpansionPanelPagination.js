/* eslint-disable linebreak-style */
import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider } from '@material-ui/core';
import { Paginate } from 'components';
import ExpansionPanel from '../expansionPanel';
import { copyModules } from 'store/actions';

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
  const dispatch = useDispatch();
  const [rowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const geyserhybrid = useSelector((state) => state.geyserhybrid.geyser);

  const handlePageChange = (data) => {
    setOffset(data.selected * rowsPerPage);
    setPage(data.selected);
  };

  // useEffect(() => {

  //   const arr = [];
  //   geyser.map( (obj) => {
  //     let object  ={
  //       module_id: obj._id,
  //       isLoading: false,
  //     }
  //     arr.push(object);
  //   }
  //   )
    
  //   dispatch(copyModules(arr));

  // }, [geyser]);


  return (
    <Fragment className={classes.root}>
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {geyserhybrid.length} Sensors found. Page {page + 1} of{' '}
          {Math.ceil(geyserhybrid.length / rowsPerPage)}
        </Typography>
        {geyserhybrid.slice(offset, offset + rowsPerPage).map((f, index) => (
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
          pageCount={Math.ceil(geyserhybrid.length / rowsPerPage)}
        />
      </div>
    </Fragment>
  );
};

export default ExpansionPanelPagination;
