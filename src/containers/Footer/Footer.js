import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Footer.style.js';

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footer}>
        <p>© 2018. Dovhal. All rights reserved.</p>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
