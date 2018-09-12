import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import styles from './Header.style.js';

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <header className={classes.headerHeader}>
          <img src={logo} className={classes.headerLogo} alt="logo" />
          <h1 className={classes.headerTitle}>Welcome to dovhal.com</h1>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
