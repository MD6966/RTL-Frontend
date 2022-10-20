import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeConfig } from 'store/actions';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
    maxWidth: '100%'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  label: {
    backgroundColor: theme.palette.background.paper
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
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

export default function SensorSelect(props) {
  const classes = useStyles();
  const { data } = props;
  const [values, setValues] = useState(data.split(','));
  const [id, setId] = useState(values[0]);
  const [status, setStatus] = useState(values[1]);
  const statuses = ['Pending', 'In Process', 'Resolved'];

  const handleChange = async (event) => {
    setStatus(event.target.value);
    const config = await makeConfig('application/json');
    const body = {
      id,
      status: event.target.value
    };

    axios.post(`${process.env.REACT_APP_URL}admin/changeStatus`, body, config);
  };

  return (
    <div>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel
          id={`demo-mutiple-chip-label${id}`}
          className={classes.label}>
          Change Status
        </InputLabel>
        <Select
          labelId={`demo-mutiple-chip-label${id}`}
          id={id}
          value={status}
          onChange={handleChange}
          input={<OutlinedInput fullWidth id="select-multiple-chip" />}
          MenuProps={MenuProps}>
          {statuses.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
