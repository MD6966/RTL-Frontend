/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import axios from 'axios';
import { Box, Grid, IconButton } from '@material-ui/core';
import { makeConfig } from 'store/actions';
import { useSnackbar } from 'notistack';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  label: {
    backgroundColor: theme.palette.background.paper
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

export default function DashboardSelect2(props) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [sensors, setSensors] = useState([]);
  const [index, setIndex] = useState(-1);
  const { id } = props;
  const { enqueueSnackbar } = useSnackbar();
  const dashboards = [
    {
      title: 'Fuel Monitoring System',
      link: 'fuel'
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
      link: 'led'
    },
    {
      title: 'Temperature Monitoring System',
      link: 'temp'
    },
    {
      title: 'Water Quality Monitoring System',
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
    },
    {
      title: 'Water Tank System',
      link: 'tank',
    },
    {
      title: 'Humidity & Temperature Monitoring System',
      link: 'humidity',
    },
    {
      title: 'Security System',
      link: 'security',
    },
    {
      title: 'Rectifier & Backup Battery Monitoring System',
      link: 'rectifier',
    },
    {
      title: 'Environment Monitoring System',
      link: 'env',
    },
    {
      title: 'Tubewell Monitoring System',
      link: 'tubewell'
    },
    {
      title: 'Smart Highway Lighting System',
      link: 'light'
    },
    {
      title: 'Smart Geyser System',
      link: 'geyser'
    }
  ];

  const handleChange = async (event) => {
    setLoading(true);
    setValue(event.target.value);
    const i = dashboards.findIndex((d) => d.title === event.target.value);
    setIndex(i);
    const config = await makeConfig('application/json');
    if (
      event.target.value === 'Fuel Monitoring System' ||
      event.target.value === 'CNC Monitoring System' ||
      event.target.value === 'Temperature Monitoring System'||
      event.target.value === 'Energy Monitoring System' ||
      event.target.value === 'Water Tank System' ||
      event.target.value === 'Humidity & Temperature Monitoring System' ||
      event.target.value === 'Security System' ||
      event.target.value === 'Rectifier & Backup Battery Monitoring System' ||
      event.target.value === 'Environment Monitoring System' ||
      event.target.value === 'Tubewell Monitoring System' ||
      event.target.value === 'Smart Highway Lighting System' ||
      event.target.value === 'Smart Geyser System'
    ) {
      const data = await axios.get(
        `${process.env.REACT_APP_URL}${dashboards[i].link}/${id}`,
        config
      );
      setLoading(false);
      setSensors(data.data);
    } else if (
      event.target.value === 'Smart Farm Fisheries' ||
      event.target.value === 'Water Quality Monitoring System'
    ) {
      console.log(
        `${process.env.REACT_APP_URL}${dashboards[i].link}/${id}/${dashboards[i].type}`
      );
      const data = await axios.get(
        `${process.env.REACT_APP_URL}${dashboards[i].link}/${id}/${dashboards[i].type}`,
        config
      );
      setLoading(false);
      setSensors(data.data);
    } else {
      const data = await axios.get(
        `${process.env.REACT_APP_URL}${dashboards[i].link}/${id}/${dashboards[i].type}`,
        config
      );
      setLoading(false);
      setSensors(data.data.sensors);
    }
  };

  const handleDelete = async (sensorID) => {
    const arr = sensors.filter((s) => s._id !== sensorID);
    const config = await makeConfig('application/json');
    const body = {
      sensorID,
      userID: id
    };
    const data = await axios.post(
      `${process.env.REACT_APP_URL}${dashboards[index].link}/unlinkSensor`,
      body,
      config
    );
    if (data.data === 'done') {
      setSensors(arr);
      enqueueSnackbar('Sensor Removed', {
        variant: 'success'
      });
    }
  };

  return (
    <div>
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
      <Box
        display="flex"
        justifyContent="center"
      >
        {isLoading ? (
          <CircularProgress />
        ) : index === -1 ? null : !isLoading && sensors.length === 0 ? (
          <Typography variant="body1">No Modules Found</Typography>
        ) : (
          <List dense>
            {sensors.map((s) => {
              return (
                <Grid
                  container
                  key={s._id}
                >
                  <Grid
                    item
                    lg={10}
                    md={10}
                    sm={10}
                    xl={10}
                  >
                    <ListItem key={s._id}>
                      <ListItemText
                        primary={s.name}
                        secondary={s._id}
                      />
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    md={2}
                    sm={2}
                    xl={2}
                  >
                    <IconButton
                      aria-label="delete"
                      key={s._id}
                      onClick={() => handleDelete(s._id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })}
          </List>
        )}
      </Box>
    </div>
  );
}
