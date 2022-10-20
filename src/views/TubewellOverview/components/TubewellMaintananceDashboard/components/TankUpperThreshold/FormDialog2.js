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
import { set_TubewellUpperThreshold } from 'store/actions/tubewellAction';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; 
import moment from 'moment';


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

export default function FormDialog_UpperLmt(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [time, setTime] = useState(null);
  const { id , type } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const res = await dispatch(set_TubewellUpperThreshold(id, type, value));

    if(res === 'done'){
      setTime(moment().format('LLLL'));
    }
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
        onClick={handleClickOpen}
        size="small"
        style={{color: 'white', fontSize: '14px'}}
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
          <DialogContentText>Enter Value to set upper threshold</DialogContentText>
          <FormControl
            className={classes.formControl}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-outlined-label">Threshold</InputLabel>
            <Select
              id="demo-simple-select-outlined"
              label="Lower Threshold"
              labelId="demo-simple-select-outlined-label"
              onChange={handleChange}
              value={value}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={55}>55</MenuItem>
              <MenuItem value={60}>60</MenuItem>
              <MenuItem value={65}>65</MenuItem>
              <MenuItem value={70}>70</MenuItem>
              <MenuItem value={75}>75</MenuItem>
              <MenuItem value={80}>80</MenuItem>
              <MenuItem value={85}>85</MenuItem>
              <MenuItem value={90}>90</MenuItem>
              <MenuItem value={95}>95</MenuItem>
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
