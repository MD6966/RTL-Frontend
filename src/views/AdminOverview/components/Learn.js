import React, { useState, useEffect } from 'react';
import {
  Grid,
  Slider,
  Typography,
  Button,
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { learnImage, getAllMLSensors } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  expansionPanel: {
    marginTop: theme.spacing(3)
  },
  label: {
    backgroundColor: '#F4F6F8'
  },
  sliders: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  },
  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function Learn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState([0, 179]);
  const [value2, setValue2] = useState([0, 255]);
  const [value3, setValue3] = useState([0, 255]);
  const image = useSelector((state) => state.led.learn_image);
  const led = useSelector((state) => state.led.led);
  const loading = useSelector((state) => state.led.generalLoading);
  const socket = useSelector((state) => state.socket.socket);
  const [key, saveKey] = useState(-1);
  const [name, setName] = useState(null);
  const [sensor, setSensor] = useState('');

  const sendValues = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      id: sensor,
      lower: [value[0], value2[0], value3[0]],
      upper: [value[1], value2[1], value3[1]]
    };

    axios
      .post(`${process.env.REACT_APP_URL}led/learnSlider`, body, config)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getAllMLSensors());
  }, []);

  const saveI = (i) => {
    console.log(i);
    saveKey(i);
  };

  useEffect(() => {
    clearInterval(key);

    if (sensor !== '') {
      var temp = setInterval(sendValues, 100);
      saveI(temp);
    }

    return () => {
      clearInterval(key);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, value2, value3, sensor]);

  useEffect(() => {
    socket.on(`image${sensor}`, (data) => {
      dispatch(learnImage(data));
    });

    return () => {
      socket.off(`image${sensor}`);
      const data = {
        buffer: null
      };
      dispatch(learnImage(data));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensor]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };

  const handleTextFieldChange = (event) => {
    setName(event.target.value);
  };

  const handleSensorChange = (event) => {
    setSensor(event.target.value);
  };

  const handleSubmit = () => {
    clearInterval(key);
    saveKey(-1);
    setSensor('');

    const data = {
      buffer: null
    };
    dispatch(learnImage(data));

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      name: name,
      id: sensor,
      lower: [value[0], value2[0], value3[0]],
      upper: [value[1], value2[1], value3[1]]
    };

    axios
      .post(`${process.env.REACT_APP_URL}led/save`, body, config)
      .then(() => console.log('saved'))
      .catch((err) => console.log(err));
  };

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      alignItems="center"
      justifyContent="center">
      <Grid item xs={12} md={6} xl={6} sm={12}>
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <FormControl variant="outlined" fullWidth size="small">
            <InputLabel
              id="demo-simple-select-outlined-label"
              className={classes.label}>
              Select Module For Learning
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sensor}
              fullWidth
              onChange={handleSensorChange}
              label="Select Module For Learning">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {led.map((l) => {
                return (
                  <MenuItem key={l._id} value={l._id}>
                    {l.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      </Grid>
      <Grid item xs={6} md={3} xl={3} sm={6}></Grid>
      <Grid item xs={6} md={3} xl={3} sm={6}></Grid>
      <Grid item xs={12} md={12} xl={12} sm={12}>
        <Divider className={classes.sliders} />
      </Grid>
      <Grid item xs={12} md={6} xl={6} sm={12}>
        <Typography variant="h5">
          Hue: {value[0]} - {value[1]}
        </Typography>
        <Slider
          className={classes.sliders}
          value={value}
          onChange={handleChange}
          aria-labelledby="range-slider1"
          valueLabelDisplay="auto"
          min={0}
          max={179}
        />
        <Typography variant="h5">
          Saturation: {value2[0]} - {value2[1]}
        </Typography>
        <Slider
          className={classes.sliders}
          value={value2}
          onChange={handleChange2}
          aria-labelledby="range-slider2"
          valueLabelDisplay="auto"
          min={0}
          max={255}
        />
        <Typography variant="h5">
          Variance: {value3[0]} - {value3[1]}
        </Typography>
        <Slider
          className={classes.sliders}
          value={value3}
          onChange={handleChange3}
          aria-labelledby="range-slider3"
          valueLabelDisplay="auto"
          min={0}
          max={255}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} xl={6} sm={12}>
            <TextField
              required
              id="standard-required"
              label="Color Name"
              onChange={handleTextFieldChange}
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6} sm={12}>
            <Button onClick={handleSubmit} variant="outlined" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} xl={6} sm={12}>
        {image !== null ? (
          <img src={`data:image/png;base64,${image}`} alt="not nice" />
        ) : (
          <div className={classes.alignItemsAndJustifyContent}>
            <Typography variant="body2">Not Connected to video feed</Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
