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
import { set_Light_Timer } from 'store/actions';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

export default function FormDialog_UpperLmt(props) {
  const { sensor } = props;
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
    if (value < 0) {
      enqueueSnackbar('Nagative Values are not Allowed', {
        variant: 'error'
      });
    } else (dispatch(set_Light_Timer (id, type, value)))


    setOpen(false);
  };

  const handleChange = (event) => {
    let a = parseInt(event.target.value);
    setValue(a);
  };

  return (
    <div>
      {
        (sensor.seg_routineEnable === true || sensor.dim_high_routineEnable === true || sensor.dim_medium_routineEnable === true || sensor.dim_low_routineEnable === true) && (sensor.allRoutines ===  true) ? (
          <Tooltip
            arrow
            title="Routine is Enabled currently, Please Disable routine first, then Set Timer."
          >
            <Button
              className={classes.root}
              color="secondary"
              // onClick={handleClickOpen}
              size="small"
              variant="outlined"
            >
        Set Timer
            </Button>
          </Tooltip>
        ) : (
          <Button
            className={classes.root}
            color="secondary"
            onClick={handleClickOpen}
            size="small"
            variant="outlined"
          >
        Set Timer
          </Button>
        )
      }
      
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Set Timer</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Value to set Timer</DialogContentText>
          <TextField
            autoFocus
            fullWidth
            id="threshold"
            label="Timer"
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
