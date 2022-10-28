import { TextField } from "@material-ui/core";
import React from 'react'
import {useField} from 'formik'
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom : theme.spacing(2),
  
    [`& fieldset`]: {
      borderRadius: 15,
    },

  }
}))

const InputField = ({
    name,
    ...otherProps
}) => {
    const [field, meta] = useField(name)
    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined',
    };
    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error
    }
    const classes = useStyles()
  
  return (
    
      <TextField {...configTextField} className={classes.textField} />
  
  )
}

export default InputField
