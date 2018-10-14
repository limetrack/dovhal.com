import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Hero.style.js';

class Hero extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.hero}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" alignItems="center" direction="column" className={classes.main}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" align="center" className={classNames(classes.title, classes.text)}>
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
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
