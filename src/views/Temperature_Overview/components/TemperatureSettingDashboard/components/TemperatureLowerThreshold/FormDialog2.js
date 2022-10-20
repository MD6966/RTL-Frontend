/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { setThreshold } from 'store/actions/temperature_Actions';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormDialog_LowerLmt(props) {
  const [open, setOpen] = React.useState(false);
  const { id , type } = props;
  
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  // const [time, setTime] = useState(null);
  
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (value < 0) {
      enqueueSnackbar('Nagative Values are not Allowed', {
        variant: 'error'
      });
    } else (dispatch(setThreshold (type, id, value)))


    setOpen(false);
  };

  const handleChange = (event) => {
    let a = parseInt(event.target.value);
    setValue(a);
  };

  return (
    <div>
      <Button
        className={classes.root}
        onClick={handleClickOpen}
        size="small"
        variant="outlined"
      >
        Set
      </Button>

      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Set Temperature Lower Threshold</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Value to set Threshold</DialogContentText>
          <TextField
            autoFocus
            fullWidth
            id="threshold"
            label="Threshold"
            margin="dense"
            onChange={handleChange}
            type="number"
          />
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
