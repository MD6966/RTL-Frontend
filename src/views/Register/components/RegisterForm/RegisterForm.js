// /* eslint-disable linebreak-style */
// import React, { useState, useEffect } from 'react';
// // import { Redirect } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import validate from 'validate.js';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import { makeStyles, useTheme } from '@material-ui/styles';
// import {
//   Button,
//   TextField,
//   Typography,
//   CircularProgress
// } from '@material-ui/core';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Chip from '@material-ui/core/Chip';
// import { useSnackbar } from 'notistack';
// import { register, refreshRegister } from 'store/actions';

// const schema = {
//   name: {
//     presence: { allowEmpty: false, message: 'is required' },
//     length: {
//       maximum: 32
//     }
//   },
//   email: {
//     presence: { allowEmpty: false, message: 'is required' },
//     email: true,
//     length: {
//       maximum: 64
//     }
//   },
//   password: {
//     presence: { allowEmpty: false, message: 'is required' },
//     length: {
//       maximum: 128
//     }
//   },
//   names: {
//     presence: { allowEmpty: false, message: 'is required' }
//   }
// };

// const names = [
//   'Fuel Monitoring System',
//   'Smart Farm Fisheries',
//   'CNC Monitoring System',
//   'Temperature Monitoring System',
//   'Cold Chain Monitoring System',
//   'Fixed Asset Tracking System',
//   'Water Quality Monitoring System',
//   'Energy Monitoring System',
//   'Water Tank System',
//   'Environment Monitoring System',
//   'Rectifier & Backup Battery Monitoring System',
//   'Security System',
//   'Humidity & Temperature Monitoring System',
//   'Tubewell Monitoring System',
//   'Smart Highway Lighting System',
//   'Smart Geyser System'
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   fields: {
//     margin: theme.spacing(-1),
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       flexGrow: 1,
//       margin: theme.spacing(1)
//     }
//   },
//   policy: {
//     display: 'flex',
//     alignItems: 'center'
//   },
//   policyCheckbox: {
//     marginLeft: '-14px'
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//     width: '100%'
//   },
//   submitError: {
//     color: theme.palette.error.main,
//     alignText: 'center',
//     marginBottom: theme.spacing(),
//     marginTop: theme.spacing(2)
//   },
//   color: {
//     color: '#ffffff'
//   }
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// };

// const RegisterForm = (props) => {
//   const { className, ...rest } = props;
//   const initialValues = {
//     username : "" ,
//     email: "", 
//     password: "",
//     confirmpassword: "",
//     contact: "",
//     address: "",
//     geyserid: "",
//     geysername: "",
//     module : null,
//     city : null,
//     code : null,
//     };

//   const classes = useStyles();
//   const theme = useTheme();
//   const dispatch = useDispatch();
//   const error = useSelector((state) => state.error);
//   const user = useSelector((state) => state.auth.user);
//   const isAuthenticated = useSelector((state) => state.auth.isRegistered);
//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const { enqueueSnackbar } = useSnackbar();
//   const [formValues, setFormValues] = useState(initialValues) 
//   const [formErrors, setFormErrors] = useState({ })
//   const [formState, setFormState] = useState({
//     isValid: false,
//     values: {
//       names: []
//     },
//     touched: {},
//     errors: {},
//     submitError: null
//   });

//   useEffect(() => {
//     dispatch(refreshRegister());
//   }, []);

//   useEffect(() => {
//     const errors = validate(formState.values, schema);

//     setFormState((formState) => ({
//       ...formState,
//       isValid: errors ? false : true,
//       errors: errors || {}
//     }));
//   }, [formState.values]);

//   useEffect(() => {
//     if (error.id === 'REGISTER_FAIL') {
//       setFormState((formState) => ({
//         ...formState,
//         submitError: error.message
//       }));
//     }
//   }, [error]);

//   const handleChange = (event) => {
//     event.persist();

//     setFormState((formState) => ({
//       ...formState,
//       values: {
//         ...formState.values,
//         [event.target.name]:
//           event.target.type === 'checkbox'
//             ? event.target.checked
//             : event.target.value
//       },
//       touched: {
//         ...formState.touched,
//         [event.target.name]: true
//       }
//     }));
//   };

//   const handleMultiSelect = (event) => {
//     event.persist();

//     setFormState((formState) => ({
//       ...formState,
//       values: {
//         ...formState.values,
//         names: event.target.value
//       },
//       touched: {
//         ...formState.touched,
//         [event.target.name]: true
//       }
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     dispatch(register(formState.values));
//   };

//   const hasError = (field) =>
//     formState.touched[field] && formState.errors[field] ? true : false;

//   if (isAuthenticated) {
//     enqueueSnackbar('User Registered Succesfully', {
//       variant: 'success'
//     });
//     dispatch(refreshRegister());
//   }

//   return (
//     <form
//       {...rest}
//       className={clsx(classes.root, className)}
//       onSubmit={handleSubmit}
//     >
//       <div className={classes.fields}>
//         <FormControl className={classes.formControl}  size='small'>
//         <InputLabel style={{margin:'-2% 0% 0% 2%'}}  > Select Module</InputLabel>
//         <Select variant='outlined' name='module'  value={formValues.module} label='Select Module' onChange={handleChange} required>
//          <MenuItem value={'Smart Geyser System'}> Smart Geyser System</MenuItem>
//          <MenuItem value={'Smart Hybrid Geyser System '}> Smart Hybrid Geyser System</MenuItem>
//           </Select>
//           <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.module}</p>
//           <TextField variant='outlined' name='username' autoComplete='off' value={formValues.username} onChange={handleChange} size='small' label='Username' style={{marginTop:'2%',}}
//           required
//           /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.username}</p>
//           <TextField variant='outlined' name= 'email' autoComplete='off'  type='email' value={formValues.email}  onChange={handleChange} size='small' label='Email ID' style={{marginTop:'2%'}} 
//           required
//           /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.email}</p>
//           <TextField variant='outlined' name='password' autoComplete='off' type='password'  value={formValues.password} onChange={handleChange} size='small' label='Password' style={{marginTop:'2%'}} 
//           required
//           /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.password}</p>
//           <TextField variant='outlined' type='password' autoComplete='off' name='confirmpassword' value={formValues.confirmpassword}  onChange={handleChange} size='small' label='Confirm Password' style={{marginTop:'2%'}}
//           required
//           /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.confirmpassword}</p>
//           <TextField variant='outlined' value={formValues.contact} autoComplete='off' name='contact'  onChange={handleChange} size='small' label='Contact' style={{marginTop:'2%'}} 
//           required
//           /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.contact}</p>
//           <TextField variant='outlined' name ='address' autoComplete='off' value={formValues.address}  onChange={handleChange} size='small' label='Address' style={{marginTop:'2%'}} 
//          required
//           /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.address}</p>
//         </FormControl>
//         <FormControl className={classes.formControl} size='small'>
//             <InputLabel style={{margin:'-2% 0% 0% 2%'}}> Select City</InputLabel>
//           <Select variant='outlined' name= "city" value={formValues.city} label='Select City' onChange={handleChange} required>
//          {
//             cities.map((item) => {
//                 return (
//                     <MenuItem value={item.value}> {item.name}</MenuItem>
//                 )
//             })
//          }
       
//          </Select>
//          <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.city}</p>
//         </FormControl>
//         {/* <TextField
//           error={hasError('name')}
//           helperText={hasError('firstName') ? formState.errors.name[0] : null}
//           label="Name"
//           name="name"
//           onChange={handleChange}
//           value={formState.values.name || ''}
//           variant="outlined"
//         /> */}
//         {/* <TextField
//           error={hasError('email')}
//           fullWidth
//           helperText={hasError('email') ? formState.errors.email[0] : null}
//           label="Email address"
//           name="email"
//           onChange={handleChange}
//           value={formState.values.email || ''}
//           variant="outlined"
//         /> */}
//         {/* <TextField
//           error={hasError('password')}
//           fullWidth
//           helperText={
//             hasError('password') ? formState.errors.password[0] : null
//           }
//           label="Password"
//           name="password"
//           onChange={handleChange}
//           type="password"
//           value={formState.values.password || ''}
//           variant="outlined"
//         /> */}
//         {/* <FormControl className={classes.formControl}>
//           <InputLabel id="demo-mutiple-chip-label">
//             Select Dashboards
//           </InputLabel>
//           <Select
//             id="demo-mutiple-chip"
//             input={<Input id="select-multiple-chip" />}
//             labelId="demo-mutiple-chip-label"
//             MenuProps={MenuProps}
//             multiple
//             onChange={handleMultiSelect}
//             renderValue={(selected) => (
//               <div className={classes.chips}>
//                 {selected.map((value) => (
//                   <Chip
//                     className={classes.chip}
//                     key={value}
//                     label={value}
//                   />
//                 ))}
//               </div>
//             )}
//             value={formState.values.names}
//           >
//             {names.map((name) => (
//               <MenuItem
//                 key={name}
//                 style={getStyles(name, formState.values.names, theme)}
//                 value={name}
//               >
//                 {name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl> */}
//       </div>
//       {formState.submitError === null ? null : (
//         <Typography
//           className={classes.submitError}
//           variant="body2"
//         >
//           {formState.submitError}
//         </Typography>
//       )}
//       <Button
//         className={classes.submitButton}
//         color="secondary"
//         disabled={!formState.isValid}
//         size="large"
//         type="submit"
//         variant="contained"
//       >
//         {isLoading ? (
//           <CircularProgress
//             className={classes.color}
//             color="secondary"
//           />
//         ) : (
//           <Typography
//             className={classes.color}
//             variant="body2"
//           >
//             Create Account
//           </Typography>
//         )}
//       </Button>
//     </form>
//   );
// };

// RegisterForm.propTypes = {
//   className: PropTypes.string
// };

// export default RegisterForm;
