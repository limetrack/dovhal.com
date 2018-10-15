import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import styles from './Dream.style.js';
import adovgal from './img/adovgal.png';

const advantages = [
  'It has been designed specifically for specific business needs.',
  'It is easier and more intuitive to use and does not contain unnecessary installations.',
  'One of the most important aspects is its flexibility.',
  'Expandable and connectable to different web services.',
  'Personalized workflow, specific departments, concrete limitations and endless possibilities.',
  'Custom software is created to have a simple interface with other software.',
];

class Dream extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.dream}>
        <SectionLayout>
          <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
            <Grid item xs={12} md={6}>
              <img src={adovgal} alt="CEO" className={classes.photo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={32} alignItems="center" justify="center" className={classes.description}>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    If you have a dream,
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    then we are the ones who will help you make it come true. We know that software, 
                    like a magic wand, turns an idea into a real business.
                    Advantages of custom software:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <List dense disablePadding>
                    {advantages.map(adv =>(
                      <ListItem key={adv} disableGutters>
                        <ListItemIcon>
                            <CheckCircle color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary={adv} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Dream.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dream);
