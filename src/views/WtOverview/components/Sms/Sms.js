import React ,{ useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button,TextField } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const Sms = (props) => {
  const classes = useStyles();
  const { sensor } = props;
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async () => {
    const response = await axios.get(`https://pk.eocean.us/APIManagement/API/RequestAPI?user=snshub&pwd=AHb2V%2b%2fKpVLGgeGD0Dfr%2fV6scqa7H9llbLupT5WFxachGZA0aMpXcxc9ZpfaKsKj6A%3d%3d&sender=SnS%20Hub&reciever=${number}&msg-data=${message}&response=string`);
  }

  return (
    <Grid
      className={classes.container}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        sm={4}
        xs={4}
      >
        <TextField
          id="number"
          label="number"
          onChange={handleNumber}
          variant="outlined"
        />
      </Grid>
      <Grid
        item
        lg={4}
        sm={4}
        xs={4}
      >
        <TextField
          id="message"
          label="message"
          onChange={handleMessage}
          variant="outlined"
        />
      </Grid>
      <Grid
        item
        lg={4}
        sm={4}
        xs={4}
      >
        <Button
          color="inherit"
          onClick={handleSubmit}
          variant="outlined"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sms;
