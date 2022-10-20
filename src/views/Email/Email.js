
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Page } from 'components'

import EmailForm from './components/EmailForm';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(3)
      },
}))

const Email = () => {
    const classes = useStyles()
  return (
    <Page className={classes.margin} title="Email">
        <EmailForm /> 
    </Page>
  )
}

export default Email
