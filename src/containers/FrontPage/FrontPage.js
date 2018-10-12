import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as Sections from 'components';
import styles from './FrontPage.style.js';

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment className={classes.frontPage}>
        <Sections.Hero />
        <Sections.About />
        <Sections.Dream />
        <Sections.Consultation />
        <Sections.Services />
        <Sections.ReadMore />
        <Sections.BusinessPlatform />
        <Sections.Projects />
        <Sections.Phrase />
        <Sections.Partners />
      </Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
