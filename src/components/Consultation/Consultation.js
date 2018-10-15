import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Consultation.style.js';

class Consultation extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.consultation}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" direction="row" className={classes.main}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                The more information we know, the better we’ll be prepared and able to help. Our team will be in touch soon!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="secondary" gutterBottom>
                Our customers are our friends
              </Typography>
              <Typography variant="subtitle2" color="secondary" gutterBottom>
                Our customers are our friends
              </Typography>
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Consultation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Consultation);
