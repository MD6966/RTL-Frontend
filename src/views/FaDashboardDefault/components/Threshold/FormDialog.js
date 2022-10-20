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

import { setColdChainGeofence } from 'store/actions';

export default function FormDialog(props) {
  const { id, rad } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [radius, setRadius] = useState(rad);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setColdChainGeofence(radius, id));
    enqueueSnackbar('Threshold Set Successfully', {
      variant: 'success'
    });
    setOpen(false);
  };

  const handleChangeLower = (event) => {
    setRadius(event.target.value);
  };

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleClickOpen}
        size="small"
        variant="outlined">
        Set Geofence
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}>
        <DialogTitle id="form-dialog-title">Set Threshold</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Geofence Radius (In Meters)
          </DialogContentText>
          <TextField
            fullWidth
            id="radius"
            label="Radius"
            margin="dense"
            onChange={handleChangeLower}
            type="number"
            color="inherit"
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="inherit" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
