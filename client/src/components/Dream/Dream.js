import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import styles from './Dream.style.js';
import adovgal from './img/adovgal.png';

const advantages = [
  'Designed for specific business needs',
  'Easier and more intuitive to use without unnecessary installations',
  'Flexible',
  'Expandable and connectable to different web services',
  'Created with other software in mind',
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
              <Grid container spacing={32} alignItems="center" justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    If you have a dream,
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    then we are the ones who will help you make it come true. We know that software, 
                    like a magic wand, can turn an idea into a real business.
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
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
