import React , { Component } from 'react';
import { withStyles, withWidth } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { Page } from 'components';
import compose from 'recompose/compose';

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  },
  imageContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  }
});


class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };

  }
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  
  render() {

    const { classes } = this.props;
    const isMobile = ['xs', 'sm', 'md'].includes(this.props.width);

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Page
          className={classes.root}
          title="Error 404"
        >
          <Typography
            align="center"
            variant={isMobile ? 'h4' : 'h1'}
          >
          500: Oops, something went terribly wrong!
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
          >
          Our Servers got stuck due to some unknown reason. Please refresh the page and try again.
          </Typography>
          <div className={classes.imageContainer}>
            <img
              alt="Under development"
              className={classes.image}
              src="/images/undraw_server_down_s4lk.svg"
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              color="primary"
              component={RouterLink}
              href="/"
              variant="outlined"
            >
            Back to home
            </Button>
          </div>
        </Page>
      )
    }
    else {
      return this.props.children;
    }
  }
}

export default compose(withStyles(styles),
  withWidth())(ErrorBoundary);