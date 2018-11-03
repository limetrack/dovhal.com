import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { FingerprintOutlined, HighQualityOutlined, PeopleOutlined, VerifiedUserOutlined } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import styles from './Advantages.style.js';

const advantages = [
  {
    icon: FingerprintOutlined,
    title: 'Up to date technologies',
    description: 'As capabilities of technology are expected to continue growing exponentially, it is certain that the future of business will increasingly efficient.',
  },
  {
    icon: HighQualityOutlined,
    title: 'High quality',
    description: 'It’s easier than you think to balance quality and cost for your business when real professionals come to work.',
  },
  {
    icon: PeopleOutlined,
    title: 'Individual approach',
    description: 'Every person wants to feel special, and an individual approach lets us give you the care you need.',
  },
  {
    icon: VerifiedUserOutlined,
    title: 'Warranty and support',
    description: 'When we talk about warranty, we mean much more, namely warmth and care that we give to our loved ones.',
  },
];

class Advantages extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.advantages}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" className={classes.main}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Advantages
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2" color="textSecondary" align="center">
                We believe in building software that improves lives and makes us a little happier
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <Grid container spacing={32} justify="center" className={classes.papers}>
                {advantages.map(adv => {
                  const Icon = adv.icon;

                  return (
                    <Grid key={adv.title} item xs={12} md={3}>
                      <Paper className={classes.paper} elevation={1}>
                        <Icon fontSize="large" color="primary" className={classes.icon} />
                        <Typography variant="h6" align="center">
                          {adv.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                          {adv.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid> 
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Advantages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Advantages);
