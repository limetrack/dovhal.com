import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Hero.style.js';
import hero from './images/hero.jpg';

class Hero extends Component {
  render() {
    const { classes, backgroundImage, mainHero, title } = this.props;

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
                  <Typography variant="h3" align="center" className={classNames(classes.title, classes.text, classes.mobile)}>
                    Custom software development
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="textSecondary" align="center" className={classes.text}>
                    we strive to create the best user experience
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Grid container spacing={32} justify="center" alignItems="center" className={classes.buttons}>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" className={classes.button}>
                        Read more
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="secondary" className={classes.button}>
                        Contact us
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Fragment>
            )}
            {!mainHero && (
              <Grid item xs={12} md={6}>
                <Typography variant="h2" align="center" className={classNames(classes.title, classes.text, classes.desktop)}>
                  {title}
                </Typography>
                <Typography variant="h3" align="center" className={classNames(classes.title, classes.text, classes.mobile)}>
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
  backgroundImage: hero,
  title: 'Default title',
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  mainHero: PropTypes.bool,
  backgroundImage: PropTypes.string,
};

export default withStyles(styles)(Hero);
