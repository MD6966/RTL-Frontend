import { Box } from '@material-ui/core'
import React from 'react'
import { AddSensorForm, SensorTable } from 'views/AdminOverview/components'
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  }
}));

const ModulesOverview = () => {
const classes = useStyles()
  
  return (
    <Page title="Modules">
    <Box
    className={classes.margin}
    display="flex"
    justifyContent="center"
    >
      <SensorTable /> 
    </Box>
     <Box
     className={classes.margin}
     display="flex"
     justifyContent="center"
     >
       <AddSensorForm /> 
     </Box>
    </Page>
  )
}

export default ModulesOverview
