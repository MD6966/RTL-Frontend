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

import { setLmsThreshold } from 'store/actions';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [threshold, setT] = useState(props.threshold);
  const { id } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setLmsThreshold(threshold, id));
    enqueueSnackbar('Threshold Set Successfully', {
      variant: 'success'
    });
    setOpen(false);
  };

  const handleChangeLower = (event) => {
    setT(event.target.value);
  };

  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        size="small"
        variant="outlined">
        Set Threshold
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}>
        <DialogTitle id="form-dialog-title">Set Threshold</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Value to set threshold</DialogContentText>
          <TextField
            defaultValue={threshold}
            fullWidth
            id="lowerThreshold"
            label="Lower Threshold"
            margin="dense"
            onChange={handleChangeLower}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
