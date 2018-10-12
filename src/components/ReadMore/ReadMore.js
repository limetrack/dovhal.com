import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './ReadMore.style.js';

class ReadMore extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.read}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" alignItems="center" direction="column" className={classes.main}>
            <Grid item xs={6}>
              <Typography variant="h2" color="primary" gutterBottom>
                Custom software development
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" color="secondary" gutterBottom>
                we strive to create the best user experience
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={32} justify="center" alignItems="center">
                <Grid item xs={6}>
                  <Button variant="contained" color="primary">
                    Read more
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary">
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

ReadMore.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReadMore);
