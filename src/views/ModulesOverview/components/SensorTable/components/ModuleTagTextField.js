import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, IconButton, CircularProgress } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { makeConfig } from 'store/actions';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  IconButton: {
    margin: theme.spacing(1)
  }
}));

export default function ModuleTagTextField(props) {
  const { dashboard, id } = props;

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
      title: 'Water Qualtiy Monitoring System',
      link: 'lms',
      type: 'qa'
    },
    {
      title: 'Fixed Asset Tracking System',
      link: 'coldChain',
      type: 'fa'
    }
  ];

  const classes = useStyles();
  const [tag, setTag] = useState(props.tag);
  const [isDisabled, setDisabled] = useState(true);
  const [status, setStatus] = useState('edit');
  const [loading, setL] = useState(false);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const changeModuleTag = async () => {
    setL(true);
    const config = await makeConfig('application/json');
    const index = dashboards.findIndex((d) => d.title === dashboard);
    const body = {
      id,
      board_id: tag
    };
    const data = await axios.post(
      `${process.env.REACT_APP_URL}${dashboards[index].link}/boardId`,
      body,
      config
    );
    setStatus('edit');
    setDisabled(!isDisabled);
  };

  const handleDisabledChange = () => {
    setDisabled(!isDisabled);
    if (status === 'check') {
      setStatus('edit');
    } else {
      setStatus('check');
    }
  };

  return (
    <Grid container>
      <Grid item xs={10} md={10} lg={10} xl={10}>
        <form noValidate autoComplete="off">
          <TextField
            id={tag}
            label="Module Tag"
            fullWidth
            variant="outlined"
            disabled={isDisabled}
            margin="dense"
            value={tag}
            onChange={(event) => handleChange(event)}
          />
        </form>
      </Grid>
      <Grid item xs={2} md={2} lg={2} xl={2}>
        {status === 'edit' ? (
          <IconButton
            onClick={() => handleDisabledChange()}
            className={classes.IconButton}>
            <EditIcon fontSize="small" />
          </IconButton>
        ) : status === 'check' ? (
          <IconButton
            onClick={() => changeModuleTag()}
            className={classes.IconButton}>
            {loading ? (
              <CircularProgress size={20} />
            ) : (
              <CheckIcon fontSize="small" />
            )}
          </IconButton>
        ) : null}
      </Grid>
    </Grid>
  );
}
