import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Consultation } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.style.js';
import logo from 'containers/Header/logo.svg';

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Consultation />
        <footer className={classes.footer}>
          <SectionLayout>
            <Grid container spacing={32} justify="space-around">
              <Grid item xs={12} md={4} className={classes.item} >
                <img src={logo} className={classes.logo} alt="dovhal" />
              </Grid>
              <Grid item xs={12} md={4} className={classes.item} >
                <Typography variant="subtitle2" align="center" className={classes.text}>  
                  support@dovhal.com
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={classes.item} >
                <Typography variant="h6" align="right" className={classes.text}>
                  <FontAwesomeIcon icon={['fab', 'skype']} className={classes.icon} />
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} className={classes.icon} />
                  <FontAwesomeIcon icon={['fab', 'telegram']} className={classes.icon} />
                  <FontAwesomeIcon icon={['fab', 'viber']} className={classes.icon} />
                </Typography>
              </Grid>
            </Grid>
          </SectionLayout>
          <Divider className={classes.divider} />
          <SectionLayout>
            <Grid container spacing={32} justify="center">
              <Grid item xs={12}>
                <Typography variant="subtitle2" align="center" gutterBottom className={classes.text}>
                  <Button color="inherit">Services</Button>
                  <Button color="inherit">Works</Button>
                  <Button color="inherit">About</Button>
                  <Button color="inherit">Careers</Button>
                </Typography>
                <Typography variant="subtitle2" align="center" gutterBottom className={classes.text}>  
                  © 2018 Dovhal. All rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </SectionLayout>
        </footer>
      </Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
