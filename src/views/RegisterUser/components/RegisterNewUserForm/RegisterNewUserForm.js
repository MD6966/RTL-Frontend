import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './components/InputField'
import SelectComponent from './components/SelectComponent'
import Cities from '../RegisterNewUserForm/components/Cities Data/Cities.json'
import RegisterButtonComponent from './components/RegisterButtonComponent'
import "yup-phone";
import { register } from 'store/actions';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {Box, CircularProgress, IconButton, InputAdornment, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { useSnackbar } from 'notistack';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles((theme) => ({
    color: {
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
    }
}))
const RegisterNewUserForm = () => {
    const classes = useStyles()
    const initialFormValues = {
        username : "" ,
        email: "", 
        password: "",
        confirmpassword: "",
        contact: "",
        address: "",
        geyserid: "",
        geysername: "",
        module : 'Smart Hybrid Geyser System ',
        city : null,
        code : null,
        };
        const dispatch = useDispatch()
        const { enqueueSnackbar } = useSnackbar();
    const formValidation = Yup.object({
        username: Yup.string()
        .required("Username is required")
        .min(4, 'User name must be greater than 4' ),
        email: Yup.string()
        .email("Email is Invalid")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be 8 characters long"),
        confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Password isn't same")
        .required("Confirm Password is required")
        .min(8, "Must be 8 characters long"),
        contact : Yup.string()
        .required("Contact is required")
        .max(11)
        .min(11),
        address: Yup.string()
        .required("Address is required"),
        geyserid: Yup.string()
        .required("Geyser ID is required")
        .min(8, 'Enter Valid Geyser Id')
        .max(16, 'Invalid Geyser ID'),
        geysername: Yup.string()
        .required("Geyser Name is required")
        .min(4, 'Enter Valid Geyser Name'),
        city: Yup.string()
        .required("Please Select Your City")
        .nullable()
    })
    const [Loader ,setLoader] = useState({
        loading:false
      })
      const [showPassword, setShowPassword] = useState(false)
      const [showPassword1, setShowPassword1] = useState(false)
      const handleShowPassword = () => {
        setShowPassword(!showPassword)
      }
      const handleShowPassword1 = () => {
        setShowPassword1(!showPassword1)
      }
  return (
    <div>
        <Formik
        initialValues={{
            ...initialFormValues
        }}
        validationSchema = {formValidation}
        onSubmit={(values, {resetForm})=> {
            setLoader({
                ...Loader,
                loading : true
              })
            dispatch(register(values)).then(res => {
                setLoader({
                    ...Loader,
                    loading : false
                  })
                  resetForm({values: ''})
                  enqueueSnackbar( res.res.data.message,{
                    variant: 'success'
                  });
            })
        }}
        >
            <Form>
            <InputField 
            name="username"
            label="User Name"
            
            />
            <InputField 
            name="email"
            label="Email ID"
            />
            <InputField 
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                   <IconButton onClick={handleShowPassword}>
                    {showPassword ? <Visibility />  : <VisibilityOff />}
                   </IconButton>
                  </InputAdornment>
                ),
              }}
          
            />
            <InputField 
            name="confirmpassword"
            label="Confirm Password"
            type={showPassword1 ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                   <IconButton onClick={handleShowPassword1}>
                   {showPassword1 ? <Visibility />  : <VisibilityOff />}
                   </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <InputField 
            name="contact"
            label="Contact"
            />
            <InputField 
            name="address"
            label="Address"
            />
            <SelectComponent
          name='city'
          label="Select City"
          options={Cities}
             />
            <InputField 
            name="geyserid"
            label="Geyser ID"
            />
            <InputField 
            name="geysername"
            label="Geyser Name"
            />  
            
            {
                Loader.loading ? (
                    <Box className={classes.color}>

            <CircularProgress 
                    color="secondary"
                    size='2rem'
                    />
                    </Box>
                ): 
                <RegisterButtonComponent >
                Register 
            </RegisterButtonComponent>
            }
            
            

            </Form>

        </Formik>
    
    </div>
  )
}

export default RegisterNewUserForm
