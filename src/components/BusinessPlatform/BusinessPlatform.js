import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SectionLayout } from 'containers';
import styles from './BusinessPlatform.style.js';

class BusinessPlatform extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.business}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" alignItems="center" direction="column" className={classes.main}>
            <Grid item xs={6}>
              <Typography variant="h2" color="primary" gutterBottom>
                BusinessPlatform
              </Typography>
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
