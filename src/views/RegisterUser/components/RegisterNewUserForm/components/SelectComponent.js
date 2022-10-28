import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom : theme.spacing(2),
    [`& fieldset`]: {
      borderRadius: 15,
    },

  }
}))
const SelectComponent = (
    {
        name,
        options,
        ...otherProps
    }
) => {
    const {setFieldValue} = useFormikContext()
    const [field, meta] = useField(name)
    const handleChange = (e) => {
        const {value} = e.target;
        setFieldValue(name, value)
    };
    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant:'outlined',
        fullWidth:true,
        onChange: handleChange
    }
    if(meta && meta.touched && meta.error) {
        configSelect.error =true;
        configSelect.helperText = meta.error
    }
    const classes = useStyles()
  return (
    <div>
      <TextField {...configSelect} className={classes.textField}> 
      {Object.keys(options).map((item, pos)=> {
        return(
            <MenuItem key={pos} value={item}> 
            {options[item]}
            </MenuItem> 
        )
      })}
      </TextField> 
    </div>
  )
}

export default SelectComponent
