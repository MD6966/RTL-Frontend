import React, { useState, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider, MenuItem, Select, InputLabel, FormControl, Input, Grid, FormHelperText } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
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
  const fuel = useSelector((state) => state.fuel.fuel);
  const [searchValue, setSearchValue] = useState('')
  const [value, setValue] = useState(fuel[0])
  const handlePageChange = (data) => {
    setOffset(data.selected * rowsPerPage);
    setPage(data.selected);
  };
  const handleValueCahnge =(f)=> {
    setValue(f)
    // {console.log(value, '+++++++++++++++++++++++index')}

  }

  return (
    <Fragment className={classes.root}>
      <div className={classes.results}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FormControl style={{width:'100%',}}>
      <InputLabel style={{marginLeft:'2%'}}>
      Select Module
      </InputLabel>
      <Select  variant='outlined' label='Select Module'   >
      {
      fuel.map((f,index) => (
       
        
        <MenuItem onClick={() => handleValueCahnge(f)} value={f.name} index={index} key ={index}>{f.name}
            
         </MenuItem>
       
        )
      )
      
      }

   
    
  
      </Select>
      <FormHelperText style={{marginTop:'1%'}}> Select Module OR Search Module</FormHelperText>
      </FormControl>
          </Grid>
         
          </Grid> 
             
        <Typography color="textSecondary" gutterBottom variant="body2" style={{marginTop:'5%'}}>
          {fuel.length} Sensors found. Page {page + 1} of{' '}
          {Math.ceil(fuel.length / rowsPerPage)}
        </Typography> 
        {fuel.slice(offset, offset + rowsPerPage)
        // .filter((val)=> {
        //    if (searchValue == " ") {
        //     return  val
        //   } else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
        //     return val
        //   }
          
        // }) Enable to search Modules

       .map((f, index) => (
          <> 
            {
              (value.name === f.name ?
                <ExpansionPanel
              className={classes.results}
              index={index}
              key={index}
              sensor={f}
            />
            
            : null
                
                )
            }
     
           
          
          </>
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate
          onPageChange={handlePageChange}
          pageCount={Math.ceil(fuel.length / rowsPerPage)}
        />
      </div>
    </Fragment>
  );
};

export default ExpansionPanelPagination;
