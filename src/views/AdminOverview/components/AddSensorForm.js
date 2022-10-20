/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  colors,
  Typography,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { makeConfig } from 'store/actions';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  label: {
    backgroundColor: theme.palette.background.paper
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  formControl: {
    width: '100%'
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

const Settings = (props) => {
  const { className, ...rest } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [values, setValues] = useState({
    id: '',
    sensorId: ''
  });
  const [value, setValue] = useState('');

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
      link: 'temp',
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
    }, {
      title: 'Energy Monitoring System',
      link: 'em',
      type: null
    },{
      title: 'Water Tank System',
      link: 'tank',
      type: null
    },
    {
      title: 'Environment Monitoring System',
      link: 'env',
      type: null
    },
    {
      title: 'Humidity & Temperature Monitoring System',
      link: 'humidity',
      type: null
    },
    {
      title: 'Security System',
      link: 'security',
      type: null
    },
    {
      title: 'Rectifier & Backup Battery Monitoring System',
      link: 'rectifier',
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
    },
    {
      title: 'Smart Hybrid Geyser System ',
      link: 'geyser_hybrid',
      type: null
    }
  ];

  const handleChange = (event) => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    });
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (value !== '') {
      const index = dashboards.findIndex((d) => d.title === value);
      const config = makeConfig('application/json');
      const body = {
        sensorId: values.sensorId
      };

      const data = await axios.post(
        `${process.env.REACT_APP_URL}${dashboards[index].link}/add/${values.id}`,
        body,
        config
      );
      enqueueSnackbar(data.data.message, {
        variant: data.data.variant,
        persist: false
      });
    } else {
      enqueueSnackbar('Please Select Dsahboard', {
        variant: 'error',
        persist: false
      });
    }
  };

  return (
    <>
      <Grid
        alignItems="center"
        container
        justify="center"
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Typography
            className={classes.root}
            variant="h2"
          >
            Add Module To User:
          </Typography>
          <Card
            {...rest}
            className={clsx(classes.root, className)}
          >
            <form onSubmit={handleSubmit}>
              <CardHeader title="Macro Settings" />
              <Divider />
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
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
                        input={
                          <OutlinedInput
                            fullWidth
                            id="select-multiple-chip"
                          />
                        }
                        labelId="demo-mutiple-chip-label"
                        MenuProps={MenuProps}
                        onChange={handleSelectChange}
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
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      helperText="Enter User ID"
                      label="User ID"
                      name="id"
                      onChange={handleChange}
                      type="text"
                      value={values.threshold}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      helperText="Enter Module ID"
                      label="Module ID"
                      name="sensorId"
                      onChange={handleChange}
                      type="text"
                      value={values.upperThreshold}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  className={classes.saveButton}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

Settings.propTypes = {
  className: PropTypes.string
};

export default Settings;
