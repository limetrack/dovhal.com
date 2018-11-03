import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Phrase.style.js';
import idovgal from './img/idovgal.png';

class Phrase extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.phrase}>
        <SectionLayout>
          <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
            <Grid item xs={12} md={6}>
              <img src={idovgal} alt="CTO" className={classes.photo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={32} alignItems="center" className={classes.description}>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    Dovhal Ivan
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom className={classes.me}>
                    Founder
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="subtitle1" color="textSecondary" align="left" gutterBottom>
                    We are feeling intense enthusiasm and compelling desire for making software. 
                    Our passion stems from admiration for an idea.  We get enthusiastic enjoyment 
                    of an activity of creating masterpieces.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
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
