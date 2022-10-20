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

import { setColdChainThreshold } from 'store/actions';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [lowerThreshold, setLT] = useState(null);
  const [upperThreshold, setUT] = useState(null);
  const { id } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setColdChainThreshold(lowerThreshold, upperThreshold, id));
    enqueueSnackbar('Threshold Set Successfully', {
      variant: 'success'
    });
    setOpen(false);
  };

  const handleChangeLower = (event) => {
    setLT(event.target.value);
  };

  const handleChangeUpper = (event) => {
    setUT(event.target.value);
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen} size="small">
        Set
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}>
        <DialogTitle id="form-dialog-title">Set Threshold</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Value to set threshold</DialogContentText>
          <TextField
            fullWidth
            id="lowerThreshold"
            label="Lower Threshold"
            margin="dense"
            onChange={handleChangeLower}
            type="number"
          />
          <TextField
            fullWidth
            id="upperThreshold"
            label="Upper Threshold"
            margin="dense"
            onChange={handleChangeUpper}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
