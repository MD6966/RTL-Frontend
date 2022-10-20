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
import { setRoutine } from 'store/actions/geyserHybridAction';
import { useStaticState } from '@material-ui/pickers';


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

export default function Routine_Temp_Threshold_Form(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [thresh, setThresh] = useState(null);
  const { id, routine } = props;
  // const [from, setFrom] = useState(routine.from);
  // const [to, setTo] = useState(routine.to);
  // const [status, setStatus] = useState(routine.enable);
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  // console.log("Routine Threshold Form",id, routine)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (thresh !== null && thresh !== undefined) {
      console.log(thresh)
      dispatch(setRoutine(id,routine.from,routine.to,routine.enable,thresh));
    setOpen(false);
    }
    else {
      enqueueSnackbar('Please Select the Value', {
        variant: 'error'
      });
    }
  };

  const handleChange = (event) => {
    setThresh(event.target.value);
  };

  return (
    <div>
      <Button
        className={classes.root}
        color="secondary"
        onClick={handleClickOpen}
        size="small"
        variant="outlined"
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
          <DialogContentText>Enter Value to set Temperature Threshold For Routine</DialogContentText>
          <FormControl
          className={classes.formControl}
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-outlined-label">Threshold</InputLabel>

          <Select
            id="demo-simple-select-outlined"
            label="Routine Threshold"
            labelId="demo-simple-select-outlined-label"
            onChange={handleChange}
            value={thresh}
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
