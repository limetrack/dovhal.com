import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, withWidth } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { HashLink } from 'react-router-hash-link';
import styles from './Hero.style.js';
import heroXs from './images/hero@xs.jpg';
import heroMd from './images/hero@md.jpg';
import heroXl from './images/hero@xl.jpg';

class Hero extends Component {
  getBackground = () => ({
    xs: this.props.backgroundImageXs,
    sm:  this.props.backgroundImageXs,
    md:  this.props.backgroundImageMd,
    lg:  this.props.backgroundImageMd,
    xl:  this.props.backgroundImageXl,
  })

  render() {
    const { 
      classes, 
      width,
      mainHero, 
      title } = this.props;

    const backgroundImage = this.getBackground()[width];

    return (
      <section className={classes.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" alignItems="center" direction="column" 
                className={classes.main} 
                style={{ minHeight: mainHero ? '640px' : '' }}>
            {mainHero && (
              <Fragment>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" align="center" className={classNames(classes.title, classes.text, classes.desktop)}>
                    Custom software development
                  </Typography>
                  <Typography variant="h4" align="center" className={classNames(classes.title, classes.text, classes.mobile)}>
                    Custom software development
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom className={classes.text}>
                    we will create the best user experience
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    component={HashLink}
                    to={`#contact`} 
                    className={classNames(classes.button, classes.mobile)}>
                    Contact us
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    component={HashLink}
                    smooth
                    to={`#contact`} 
                    className={classNames(classes.button, classes.desktop)}>
                    Contact us
                  </Button>
                </Grid>
              </Fragment>
            )}
            {!mainHero && (
              <Grid item xs={12} md={6}>
                <Typography variant="h2" align="center" className={classNames(classes.title, classes.text, classes.desktop)}>
                  {title}
                </Typography>
                <Typography variant="h4" align="center" className={classNames(classes.title, classes.text, classes.mobile)}>
                  {title}
                </Typography>
              </Grid>
            )}
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Hero.defaultProps = {
  mainHero: false,
  backgroundImageXs: heroXs,
  backgroundImageMd: heroMd,
  backgroundImageXl: heroXl,
  title: 'Default title',
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  mainHero: PropTypes.bool,
  backgroundImageXs: PropTypes.string,
  backgroundImageMd: PropTypes.string,
  backgroundImageXl: PropTypes.string,
};

export default withStyles(styles)(withWidth()(Hero));
