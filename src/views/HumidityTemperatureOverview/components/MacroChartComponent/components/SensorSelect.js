import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '98%',
    maxWidth: '98%'
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function SensorSelect(props) {
  const {
    sensors,
    selectedids
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [moduleName,setModuleName] = useState([])
  let selector;
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    selector = event.target.value;

    sensors.map((s)=> {
      for(let i=0; i<=sensors.length; i++){
        if (s._id === selector[i]) {
          moduleName[i] = s.name
        }
      }
     
    });
    selectedids(event.target.value);
    setPersonName(event.target.value);
   
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
          Select Modules For Comparison
        </InputLabel>
        <Select
          id="demo-mutiple-chip"
          input={<OutlinedInput
            fullWidth
            id="select-multiple-chip"
          />}
          labelId="demo-mutiple-chip-label"
          MenuProps={MenuProps}
          multiple
          onChange={handleChange}
          renderValue={() => (
            <div className={classes.chips}>
             
              {
             
                moduleName.map((value) => (
                  <Chip
                    className={classes.chip}
                    color="primary"
                    key={value}
                    label={value}
                    size="small"
                  />
                ))}
            </div>
          )}
          value={personName}
        >
          {sensors.map((s) => (
             
            <MenuItem  
              key={s.name}
              style={getStyles(s._id, personName, theme)}
              value={s._id}
            >
              
              {s.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
