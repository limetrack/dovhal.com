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
          <Grid container spacing={32} justify="space-around" className={classes.main}>
            <Grid item xs={12} md={9}>
              <Typography variant="h6" color="textPrimary" align="left" gutterBottom>
                Last go with us for your future business
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant="contained" color="secondary">
                Read more
              </Button>
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
