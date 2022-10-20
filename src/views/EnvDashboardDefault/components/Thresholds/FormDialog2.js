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
import { makeStyles } from '@material-ui/styles';
import { set_envUpperThreshold } from 'store/actions/envAction';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

export default function FormDialog_UpperLmt(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const { id , type } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(set_envUpperThreshold(id, type, value));
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
        color="secondary"
        variant="outlined"
        onClick={handleClickOpen}
        size="small"
        className={classes.root}>
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
