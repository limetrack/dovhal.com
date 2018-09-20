import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import styles from './Header.style.js';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              {/* <CameraIcon className={classes.icon} /> */}
              <Typography variant="title" color="inherit" noWrap>
                dovhal.com
              </Typography>
            </Toolbar>
          </AppBar>
        <header className={classes.headerHeader}>


          <img src={logo} className={classes.headerLogo} alt="dovhal.com" />
          {/* <h1 className={classes.headerTitle}>studio</h1> */}
          <Typography variant="headline" className={classes.headerTitle}>
            Custom Software Development
          </Typography>
          {/* <h2 className={classes.headerSubTitle}>Custom Software Development</h2> */}
          <Button variant="contained" color="secondary" href="mailto: adovgal78@gmail.com" className={classes.headerButton}>
            write an email
          </Button>
          <Button variant="contained" color="primary" href="mailto: adovgal78@gmail.com" className={classes.headerButtonSecondary}>
            apply
          </Button>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
