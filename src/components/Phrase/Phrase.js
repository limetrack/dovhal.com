import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Phrase.style.js';

class Phrase extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.phrase}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" alignItems="center" direction="column" className={classes.main}>
            <Grid item xs={6}>
              <Typography variant="h2" color="primary" gutterBottom>
                Phrase
              </Typography>
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Phrase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phrase);
