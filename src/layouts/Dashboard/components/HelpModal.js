/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { makeConfig } from 'store/actions';
import SpeedDial from '@material-ui/lab/SpeedDial';
import HelpIcon from '@material-ui/icons/Help';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Link } from 'react-router-dom';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  margin: {
    marginRight: theme.spacing()
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(8),
      right: theme.spacing(5),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));


export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [SpeedDialOpen, setSpeedDailOpen] = React.useState(false);
  const [complaint, setComplaint] = useState('');
  const user = useSelector((state) => state.auth.user);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
   if (complaint.length < 4)
   {
    setError(true)
   }
    else {
      const config = await makeConfig('application/json');
    const body = {
      id: user.id,
      name: user.name,
      complaint
    };
    const data = await axios.post(
      `${process.env.REACT_APP_URL}user/fileComplaint`,
      body,
      config
    );
    setOpen(false);
    setError(false)
    setComplaint("")
    enqueueSnackbar(data.data.message, {
      variant: 'success'
    });
    }
  };

  const handleChange = (event) => {
    setComplaint(event.target.value);
    if(complaint.length > 4) {
      setError(false)
    }
    else {
      setError(error)
    }
  };
  const handleSpeedDialOpen =() => {
    setSpeedDailOpen(true)
  }
  const handleSpeedDialClose =() => {
    setSpeedDailOpen(false)
  }
  const [error, setError] = useState(false)

  return (
    <div>
      <SpeedDial
      className={classes.speedDial}
      onClick={handleSpeedDialOpen}
      onClose={handleSpeedDialClose}
      ariaLabel='Navigation Speed Dial'
    open={SpeedDialOpen}
    icon={<HelpOutlineIcon style={{fontSize:'2.5rem'}}/>

  }
      >
        <SpeedDialAction  icon={<HelpIcon onClick={handleClickOpen} style={{fontSize:'2rem'}}/> } tooltipTitle="Help"/>
        <SpeedDialAction href='
        https://drive.google.com/file/d/1GA1vDEEbQmY3BdAiHFi1xwF2sEGpBYdl/view?usp=sharing
        ' target='_blank'  icon={<QuestionAnswerIcon style={{fontSize:'2rem'}} /> } tooltipTitle="FAQ's"/>

      </SpeedDial>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Complaint</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please tell us about the issue in a clear way. Our agent will get
            back to you as soon as possible
          </DialogContentText>
          <TextField
            color="secondary"
            fullWidth
            id="complaint"
            label="Message"
            margin="dense"
            onChange={handleChange}
            type="text"
            value={complaint}
            variant="outlined"
            error={error}
            helperText={error ? "Please fill this field correctly" : null}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant={error ? 'disabled' : 'text'}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
