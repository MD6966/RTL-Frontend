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
    marginBottom: theme.spacing(3)
  },
  expanded: {
    '&$expanded': {
      marginTop: 20,
      marginBottom: 20, 
    }
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
  const led = useSelector((state) => state.led.led);

  const handlePageChange = (data) => {
    setOffset(data.selected*rowsPerPage);
    setPage(data.selected);
  }

  return (
    <>
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {led.length} Sensors found. Page {page + 1} of{' '}
          {Math.ceil(led.length / rowsPerPage)}
        </Typography>
        {led.slice(offset,offset+rowsPerPage).map((l,index) => (
          <>
            <ExpansionPanel
              TransitionProps={{ unmountOnExit: true }}
              classes={{ expanded: classes.expanded }}
              index={index}
              key={index}
              sensor={l}
            
            />
            <Divider 
              className={classes.results} 
            />
          </>
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate 
          onPageChange={handlePageChange}
          pageCount={Math.ceil(led.length / rowsPerPage)} 
        />
      </div>
    </>
  );
};

export default ExpansionPanelPagination;
