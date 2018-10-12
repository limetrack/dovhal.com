import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SectionLayout } from 'containers';
import styles from './Partners.style.js';

class Partners extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.partners}>
        <SectionLayout>
          <Grid container spacing={32} justify="space-around" className={classes.main}>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" color="textPrimary" align="center" gutterBottom>
                Coca-Cola
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" color="textPrimary" align="center" gutterBottom>
                Ford
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" color="textPrimary" align="center" gutterBottom>
                BMW
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" color="textPrimary" align="center" gutterBottom>
                USA
              </Typography>
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partners  );
