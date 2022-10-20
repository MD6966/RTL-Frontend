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

import { setLmsTank } from 'store/actions';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [tank,setT] = useState(props.tank);
  const { id } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

    dispatch(setLmsTank(tank,id));
    enqueueSnackbar('Threshold Set Successfully' , {
      variant : 'success'
    })
    setOpen(false);

  }

  const handleChangeLower = (event) => {
    setT(event.target.value);
  }

  return (
    <div>
      <Button 
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        Change Tank Capacity
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Set Tank Capacity</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Enter Value to set tank capacity
          </DialogContentText>
          <TextField
            defaultValue={tank}
            fullWidth
            id="tankCapacity"
            label="Tank Capacity"
            margin="dense"
            onChange={handleChangeLower}
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