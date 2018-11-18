import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Button, ButtonBase } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Consultation } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
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
            <Grid container spacing={8} justify="space-around">
              <Grid item xs={12} md={4} className={classes.item} >
                <Link to="/#top"><img src={logo} className={classes.logo} alt="dovhal" /></Link>
              </Grid>
              <Grid item xs={12} md={4} className={classes.item} >
                <a href="mailto:info@dovhal.com" className={classes.link}>
                  <Typography variant="subtitle2" align="center" className={classes.text}>
                    info@dovhal.com  
                  </Typography>
                </a>
                <a href="tel:info@dovhal.com" className={classes.link}>
                  <Typography variant="subtitle2" align="center" gutterBottom className={classes.text}>  
                    +38 099 0354 001
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12} md={4} className={classes.item} >
                <Typography variant="h6" align="right" className={classes.text}>
                  <ButtonBase href="skype:380990354001?chat" target="_blank" disableRipple>
                    <FontAwesomeIcon icon={['fab', 'skype']} className={classes.icon} />
                  </ButtonBase>
                  <ButtonBase href="https://api.whatsapp.com/send?phone=380990354001" target="_blank" disableRipple>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} className={classes.icon} />
                  </ButtonBase>
                  <ButtonBase href="https://t.me/dovhal_com" target="_blank" disableRipple>
                    <FontAwesomeIcon icon={['fab', 'telegram']} className={classes.icon} />
                  </ButtonBase>
                  <ButtonBase href="viber://chat?number=380990354001" target="_blank" disableRipple>
                    <FontAwesomeIcon icon={['fab', 'viber']} className={classes.icon} />
                  </ButtonBase>
                </Typography>
              </Grid>
            </Grid>
          </SectionLayout>
          <Divider className={classes.divider} />
          <SectionLayout>
            <Grid container spacing={32} justify="center">
              <Grid item xs={12}>
                <Typography align="center" gutterBottom className={classes.text}>
                  <Button color="inherit" size="small" component={Link} to="/services#top">Services</Button>
                  <Button color="inherit" size="small" component={Link} to="/successes#top">Successes</Button>
                  <Button color="inherit" size="small" component={Link} to="/about#top">About</Button>
                  <Button color="inherit" size="small" component={Link} to="/careers#top">Careers</Button>
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
