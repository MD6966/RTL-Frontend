/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';

import { setTubewellMaintananceThreshold } from 'store/actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2)
  }
}));

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const { id, type } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setTubewellMaintananceThreshold(type, id,value));
    enqueueSnackbar('Threshold Set Successfully', {
      variant: 'success'
    });
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
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
          <DialogContentText>Enter Value to set threshold</DialogContentText>
          <TextField
            autoFocus
            fullWidth
            id="threshold"
            label="threshold"
            margin="dense"
            onChange={handleChange}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
