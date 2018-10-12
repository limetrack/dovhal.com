import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SectionLayout } from 'containers';
import styles from './Footer.style.js';

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <SectionLayout>
          <Grid container spacing={32} justify="space-around">
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>  
                About company
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Just the best company that have ever been
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Our services
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Web development
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={32} justify="space-around">
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>  
                About company
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Just the best company that have ever been
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Our services
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Web development
              </Typography>
            </Grid>
          </Grid>
        </SectionLayout>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
