import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './BusinessPlatform.style.js';
import girl from './img/girl.png';

class BusinessPlatform extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.business}>
        <SectionLayout>
          <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={32} alignItems="center" justify="center" className={classes.description}>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    Do you want to be one of them?
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    All you need is an idea and the rest we will do ourselves!
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={girl} alt="CEO" className={classes.photo} />
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

BusinessPlatform.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessPlatform);
