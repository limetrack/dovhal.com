import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.style.js';
import logo from 'containers/Header/logo.svg';

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        {/* <SectionLayout>
          <Grid container spacing={32} justify="space-around" className={classes.main}>
            <Grid item xs={8} md={4}>
              <Typography variant="h6" gutterBottom className={classes.text}>  
                Address
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                Heroiv Stalinhrada Ave, 6a
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                Kyiv, 04210
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                Ukraine
              </Typography>
            </Grid>
            <Grid item xs={8} md={4}>
              <Typography variant="h6" gutterBottom className={classes.text}>  
                Email
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                support@dovhal.com
              </Typography>
              <Typography variant="h6" className={classes.text}>
                <FontAwesomeIcon icon={['fab', 'skype']} className={classes.icon} />
                <FontAwesomeIcon icon={['fab', 'telegram']} className={classes.icon} />
                <FontAwesomeIcon icon={['fab', 'viber']} className={classes.icon} />
                <FontAwesomeIcon icon={['fab', 'whatsapp']} className={classes.icon} />
              </Typography>
            </Grid>
          </Grid>
        </SectionLayout>
        <Divider className={classes.divider} /> */}
        <SectionLayout>
          <Grid container spacing={32} justify="space-around">
            <Grid item xs={4}>
              <img src={logo} className={classes.logo} alt="dovhal" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" align="right" className={classes.text}>
                <FontAwesomeIcon icon={['fab', 'skype']} className={classes.icon} />
                <FontAwesomeIcon icon={['fab', 'telegram']} className={classes.icon} />
                <FontAwesomeIcon icon={['fab', 'viber']} className={classes.icon} />
                <FontAwesomeIcon icon={['fab', 'whatsapp']} className={classes.icon} />
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
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
