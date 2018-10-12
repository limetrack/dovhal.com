import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SectionLayout } from 'containers';
import styles from './Projects.style.js';

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.projects}>
        <SectionLayout>
          <Grid container spacing={32} justify="space-around">
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Coca-Cola
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Ford
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                BMW
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Military
              </Typography>
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
