import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { saveTheme, changeTheme } from 'store/actions';
import { makeStyles } from '@material-ui/styles';
import {
  Popover,
  CardHeader,
  CardActions,
  Divider,
  Button,
  Box
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    maxWidth: '100%'
  },
  content: {
    width: '80%'
  },
  label: {
    backgroundColor: theme.palette.background.paper
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  divider2: {
    marginTop: theme.spacing(2)
  },
  actions: {
    justifyContent: 'center'
  }
}));

const SettingsPopover = (props) => {
  const { anchorEl, open,  ...rest } = props;
  console.log(open)

  const inputLabel = React.useRef(null);
  const s = useSelector((state) => state.auth.user.settings);
  const [theme, setTheme] = React.useState(s);
  const id = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const handleChange = (event) => {
    setTheme(event.target.value);
    dispatch(changeTheme(event.target.value));
  };

  const handleSave = () => {
    dispatch(saveTheme(id, theme));
    enqueueSnackbar('Settings Saved', {
      variant: 'success'
    });
    open=!open

  };

  return (
    <Popover
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}>
      <div className={classes.root}>
        <CardHeader title="Theme Settings" />
        <Divider className={classes.divider} />
        <Box display="flex" justifyContent="center">
          <FormControl variant="outlined" className={classes.content}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              ref={inputLabel}
              className={classes.label}>
              Theme
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              onChange={handleChange}
              value={theme}>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider className={classes.divider2} />
        <CardActions className={classes.actions}>
          <Button
            onClick={handleSave}
            size="small"
            variant="outlined"
            color="inherit">
            Save
          </Button>
        </CardActions>
      </div>
    </Popover>
  );
};

SettingsPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SettingsPopover;
