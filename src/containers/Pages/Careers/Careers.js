import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Hero } from 'components';
import styles from './Careers.style.js';
import hero from './images/hero.jpg';

// const advantages = [
//   'up to date technologies',
//   'high quality and balanced cost',
//   'individual approach',
//   'warranty and support',
// ]

class Careers extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero backgroundImage={hero} title="Careers" />
        <section className={classes.careers}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Employee Benefits
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.description}>
                    You're a person—not just a resource.
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.description}>
                    What if, instead of letting our differences separate us, they sparked creativity and innovation? 
                    What if you didn’t have to fit into a mold but could be yourself at work?
                    Our differences, both visible and invisible, benefit our teams, our communities, and the products we craft. 
                    That’s why dovhal.com strives to build a team with diverse backgrounds, skills, and perspectives. 
                    We’re committed to creating an environment of inclusion — a place where every Tree can thrive.
                  </Typography>
                </Grid>
            </Grid>
          </SectionLayout>
        </section>
      </Fragment>
    );
  }
}

Careers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Careers);
