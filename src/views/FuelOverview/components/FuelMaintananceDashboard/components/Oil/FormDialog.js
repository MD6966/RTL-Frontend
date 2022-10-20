import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';

import { logOilChange } from 'store/actions';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2)
  }
}));

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [t, setT] = React.useState(null);
  const dispatch = useDispatch();
  const { id } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  useEffect(() => {
    const { time } = props;

    if (time.includes(':')) {
      let temp = time.split(':');
      setT(`${temp[0]} Hrs ${temp[1]} Mins`);
    } else {
      setT(`${time} Mins`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(logOilChange(id, t));
    enqueueSnackbar('Oil Change Logged', {
      variant: 'success'
    });
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        size="small"
        variant="outlined">
        Log Oil Change
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}>
        <DialogTitle id="form-dialog-title">Log Oil Change</DialogTitle>
        <DialogContent>
          <DialogContentText>Click Confirm To Log Oil Change</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
