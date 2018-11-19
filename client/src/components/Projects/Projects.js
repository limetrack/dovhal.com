import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Project } from 'components';
import styles from './Projects.style.js';

import { PROJECTS } from 'components/Projects/Project/Project';

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.projects}>
        <SectionLayout>
          <Grid container spacing={32} justify="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Our successes
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2" color="textSecondary" align="center">
                We value our every client and look forward to knowing you
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <Grid container spacing={32} justify="center" className={classes.papers}>
                {PROJECTS.map(prj => (
                  <Grid key={prj} item xs={12} md={4} className={classes.paper}>
                    <Project name={prj} />
                  </Grid>
                ))}
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
