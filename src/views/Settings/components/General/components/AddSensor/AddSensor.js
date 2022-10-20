
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch,useSelector } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { addsenser } from 'store/actions/userActions';
import {CircularProgress, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  colors
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {},
    saveButton: {
      color: theme.palette.white,
      backgroundColor: colors.green[600],
      '&:hover': {
        backgroundColor: colors.green[900]
      }
    }

}))
const dashboardNames = [
  {
    name : 'Hybrid Geyser System'
  },
  {
    name : 'Smart Geyser System'
  }
]
const AddSensor = (props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
      loading : false
    })
    const { user,className, ...rest } = props;
   const user_id =user.id
    const [values, setValues] = useState({
        geyserName: '',
        boardId: '',
        dashboard: '',
      

      });

      
      const handleChange = event => {
        event.persist();
    
        setValues({
          ...values,
          [event.target.name]:
            event.target.type === 'checkbox'
              ? event.target.checked
              : event.target.value
        });
      };
      const handleSubmit = (event,) => {
        event.preventDefault();
        setData({
          ...data,
          loading : true
        })
        console.log(user_id)
       dispatch(addsenser(values,user_id)).then( (res) =>{
        // console.log('RESPONSE',res.res.data.message) yahan alert lagana hai
        // alert(res.res.data.message)
        console.log(values.dashboard, '++++++++++++++++dashbaord')
        setData({
          ...data,
          loading : false
        })
      alert(res.res.data.message)
      
       
       })
      
    
      };
    const classes = useStyles()
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
        <form onSubmit={handleSubmit}>
        <CardHeader title="Add Sensor" />
        <Divider />
        <CardContent>
        <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Enter Your Geyser Name"
                label="Geyser Name"
                name="geyserName"
               onChange={handleChange}
                required
                value={values.geyserName}
                variant="outlined"
                
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Enter Your Board-ID"
                label="Board-ID"
                name="boardId"
                onChange={handleChange}
                required
                value={values.boardId}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
             
              
              <TextField
                fullWidth
                required
                label="Dashboards"
                name="dashboard"
                onChange={handleChange}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                variant="outlined">
                {dashboardNames.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
                </TextField>
         
            </Grid>
          </Grid>
          </CardContent>
          <Divider />
        <CardActions>
          <Button
            className={classes.saveButton}
            type="submit"
            variant="contained">
            {
              data.loading ? <CircularProgress color='inherit' size='1.5rem' />  :  'Add Geyser'
            }
           
          </Button>
        
          
        </CardActions>
        </form>

    </Card>
  )
}
AddSensor.propTypes = {
    className: PropTypes.string,
    profile: PropTypes.object.isRequired
  };
export default AddSensor
