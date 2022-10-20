import { Box, Button, Card, Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { Page } from 'components'
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { set } from 'lodash';
import { useDispatch } from 'react-redux';
import { email } from 'store/actions';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      },

    margin: {
        margin: theme.spacing(3)
      },
      Box: {
        width:'100%',
        backgroundColor:'#ffffff',
        padding: theme.spacing(3),
        borderRadius: '10px',
      },
      TextField : {
            marginBottom: theme.spacing(1)
      },
      text: {
        textAlign:'center',
        marginBottom:theme.spacing(4)
      },
      btn: {
        marginTop: theme.spacing(5),
        display:'flex',
       justifyContent:'flex-end'
      },
      icon: {
        fontSize:'2rem',
        transform: 'rotate(-40deg)',
        marginBottom: theme.spacing(1)
      },
      Divider: {
        margin: '10px 0px '
      }
}))

const EmailForm = (props) => {
    const { className, ...rest } = props;
    const classes = useStyles()
    const initialValues = {
        to: "",
        message : ""
    }
    const [formValues, setFormValues] = useState(initialValues)
    const dispatch = useDispatch()
    const handleChange =(e) => {
        const {name , value} = e.target
    setFormValues({...formValues, [name]: value});

    }
    const handleSubmit =(e) => {
            e.preventDefault()
            setFormValues(initialValues)
            console.log(formValues)
            dispatch(email(formValues))
    }
  return (
    <>
      <Grid 
       alignItems="center"
       container
       justify="center"
      >
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
        className={classes.root}
        variant='h2'>
                Email
        </Typography>
        <Card
        {...rest}
        className={clsx(classes.root, className)}
        >
            <Box className={classes.Box}>
            <form onSubmit={handleSubmit}>
            <TextField variant='outlined' onChange={handleChange} label='To' fullWidth placeholder='Enter Sender Email' type='email' className={classes.TextField} required name='to' value={formValues.to}> </TextField>
            <TextField variant='outlined' onChange={handleChange} label='Message' fullWidth  multiline rows={10} required name='message' value={formValues.message}></TextField>

        
            <Box className={classes.btn}>
            <Button variant='contained' color='primary' style={{width:'120px'}} type='submit' endIcon={<SendIcon className={classes.icon} />} > Send</Button>
            </Box>
            </form>
            </Box>

        </Card>
    </Grid>
      </Grid>
    </>
  )
}

export default EmailForm
