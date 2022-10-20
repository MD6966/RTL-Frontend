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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { set_Dim_Level } from 'store/actions';
import Tooltip from '@material-ui/core/Tooltip';


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
  const { sensor } = props;
  const [open, setOpen] = React.useState(false);
  const [routineBrightness, setRoutineBrightness] = React.useState(false);
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
  }

  const handleSubmit = () => {
    dispatch(set_Dim_Level(id, type, value));
    // enqueueSnackbar('Dim Level set Successfully', {
    //   variant: 'success'
    // });
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {
        (sensor.seg_routineEnable === true || sensor.dim_high_routineEnable === true || sensor.dim_medium_routineEnable === true || sensor.dim_low_routineEnable === true) && (sensor.allRoutines === true) ? (
          <Tooltip
            arrow
            title="Routine is Enabled currently, Please Disable routine first, then set Brightness."
          >
            <Button
              className={classes.root}
              color="secondary"
              onClick={setRoutineBrightness}
              size="small"
              style={{marginLeft: '4px'}}
              variant="outlined"
            >
        Set Brightness
            </Button>
          </Tooltip>
        ) : (
          <Button
            className={classes.root}
            color="secondary"
            onClick={handleClickOpen}
            size="small"
            style={{marginLeft: '4px'}}
            variant="outlined"
          >
        Set Brightness
          </Button>
        )}
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Set Brightness</DialogTitle>
        <DialogContent>
          <DialogContentText>Select Value to set Brightness</DialogContentText>
          <FormControl
            className={classes.formControl}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-outlined-label">Brightness</InputLabel>
            <Select
              id="demo-simple-select-outlined"
              label="Brightness"
              labelId="demo-simple-select-outlined-label"
              onChange={handleChange}
              value={value}
            >
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={75}>75</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
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
