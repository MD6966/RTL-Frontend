/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/styles';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { setThreshold } from 'store/actions/geyserHybridAction';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '-webkit-fill-available',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormDialog_UpperLmt(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const { id , type, sensor } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (value !== null && value !== undefined) {
      dispatch(setThreshold(id, type, value));
      enqueueSnackbar('Threshold Set Successfully', {
      variant: 'success'
    });
    setOpen(false);
    }
    else {
      enqueueSnackbar('Please Select the Value', {
        variant: 'error'
      });
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/* {
        (sensor.routine_enable == false ? 
          
          <Button
          className={classes.root}
          color="secondary"
          onClick={handleClickOpen}
          size="small"
          variant="outlined"
          disabled={(sensor.routine_enable == false ? false : true)}
          
        >
          Set Threshold
        </Button>
       
        :
        <Button
        className={classes.root}
        color="secondary"
        onClick={handleClickOpen}
        size="small"
        variant="disabled"
       
       
        
      >
        Set Threshold
      </Button>
          
          )
      } */}
      {/* < Tooltip >


      </Tooltip> */}
      <Button
        className={classes.root}
        color="secondary"
        onClick={handleClickOpen}
        size="small"
        variant="outlined"
        disabled={(sensor.routine_enable == false ? false : true)}
        
      >
        Set Threshold
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Set Threshold</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Value to set Temperature Upper Threshold</DialogContentText>
          <FormControl
          className={classes.formControl}
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-outlined-label">Threshold</InputLabel>

          <Select
            id="demo-simple-select-outlined"
            label="Upper Threshold"
            labelId="demo-simple-select-outlined-label"
            onChange={handleChange}
            value={value}
           
          >
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={35}>35</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={45}>45</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={55}>55</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={65}>65</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            {/* <MenuItem value={75}>75</MenuItem> */}
           
          </Select>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
