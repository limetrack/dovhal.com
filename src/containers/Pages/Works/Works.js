import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
} from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Hero } from 'components';
import styles from './Works.style.js';
import hero from './images/hero.jpg';

// const advantages = [
//   'up to date technologies',
//   'high quality and balanced cost',
//   'individual approach',
//   'warranty and support',
// ]

class Works extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero backgroundImage={hero} title="Our works" />
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} justify="center" className={classes.main}>
            </Grid>
          </SectionLayout>
        </section>
      </Fragment>
    );
  }
}

Works.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Works);
