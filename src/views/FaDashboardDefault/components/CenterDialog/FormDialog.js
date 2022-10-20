import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';

import { setColdChainGeofenceCenter } from 'store/actions';

export default function FormDialog(props) {
  const { id } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setColdChainGeofenceCenter(id));
    enqueueSnackbar('Geofence center set successfully', {
      variant: 'success'
    });
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleClickOpen}
        size="small"
        variant="outlined">
        Set Geofence Center Point
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}>
        <DialogTitle id="form-dialog-title">
          Geofence Center Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click "Confirm" to confirm the current sensor location as geofence
            center
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="inherit" onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
