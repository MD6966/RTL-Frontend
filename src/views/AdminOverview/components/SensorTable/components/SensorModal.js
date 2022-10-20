/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';
import { makeConfig } from 'store/actions';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  formControl: {
    width: '100%'
  },
  results: {
    marginTop: theme.spacing(3)
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  },
  heading: {
    marginBottom: theme.spacing(2)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState('');
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextFieldChange = (event) => {
    setName(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dashboards = [
    {
      title: 'Fuel Monitoring System',
      link: 'fuel',
      type: null
    },
    {
      title: 'Smart Farm Fisheries',
      link: 'lms',
      type: 'farm'
    },
    {
      title: 'Cold Chain Monitoring System',
      link: 'coldChain',
      type: 'store'
    },
    {
      title: 'CNC Monitoring System',
      link: 'led',
      type: null
    },
    {
      title: 'Temperature Monitoring System',
      link: 'temperature',
      type: null
    },
    {
      title: 'Water Qualtiy Monitoring System',
      link: 'lms',
      type: 'qa'
    },
    {
      title: 'Fixed Asset Tracking System',
      link: 'coldChain',
      type: 'fa'
    },
    {
      title: 'Energy Monitoring System',
      link: 'em',
      type: null
    },
    {
      title: 'Water Tank System',
      link: 'tank',
      type: null
    },
    {
      title: 'Humidity & Temperature Monitoring System',
      link: 'humidity',
      type: null
    },
    {
      title: 'Environment Monitoring System',
      link: 'env',
      type: null
    },
    {
      title: 'Rectifier & Backup Battery Monitoring System',
      link: 'rectifier',
      type: null
    },
    {
      title: 'Security System',
      link: 'security',
      type: null
    },
    {
      title: 'Tubewell Monitoring System',
      link: 'tubewell', 
      type: null
    },
    {
      title: 'Smart Highway Lighting System',
      link: 'light',
      type: null
    },
    {
      title: 'Smart Geyser System',
      link: 'geyser',
      type: null
    }
  ];

  const handleSubmit = async () => {
    const index = dashboards.findIndex((d) => d.title === value);
    const config = await makeConfig('application/json');

    const body = {
      name,
      type: dashboards[index].link,
      sensorType: dashboards[index].type
    };

    const data = await axios.post(
      `${process.env.REACT_APP_URL}admin/createSensor`,
      body,
      config
    );
    enqueueSnackbar(data.data.message, {
      variant: data.data.variant
    });
  };

  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        variant="outlined"
      >
        Create Module
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Create Module</DialogTitle>
        <DialogContent>
          <DialogContentText>Create Module</DialogContentText>
          <FormControl
            className={classes.formControl}
            variant="outlined"
          >
            <InputLabel
              className={classes.label}
              id="demo-mutiple-chip-label"
            >
              Select Dashboard
            </InputLabel>
            <Select
              id="demo-mutiple-chip"
              input={<OutlinedInput
                fullWidth
                id="select-multiple-chip"
              />}
              labelId="demo-mutiple-chip-label"
              MenuProps={MenuProps}
              onChange={handleChange}
              value={value}
            >
              {dashboards.map((d) => (
                <MenuItem
                  key={d.title}
                  value={d.title}
                >
                  {d.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            fullWidth
            id="name"
            label="Name"
            margin="dense"
            onChange={handleTextFieldChange}
            type="text"
            value={name}
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
            onClick={handleSubmit}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
