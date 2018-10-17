import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Projects.style.js';

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.projects}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" className={classes.main}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Our works
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2" color="textSecondary" align="center">
                We value our every client and look forward to knowing you
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <Grid container spacing={32} justify="center" className={classes.papers}>
                <Grid item xs={12} md={3}>
                  <Paper className={classes.paper} elevation={1}>
                    <Typography variant="h6" align="center">
                      Video Intelligence
                    </Typography>
                  </Paper>
                </Grid> 
                <Grid item xs={12} md={3}>
                  <Paper className={classes.paper} elevation={1}>
                    <Typography variant="h6" align="center">
                      Newtend
                    </Typography>
                  </Paper>
                </Grid> 
                <Grid item xs={12} md={3}>
                  <Paper className={classes.paper} elevation={1}>
                    <Typography variant="h6" align="center">
                      TeslaEnergo
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid> 
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
