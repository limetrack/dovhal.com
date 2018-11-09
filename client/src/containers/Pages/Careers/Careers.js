import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Hero } from 'components';
import styles from './Careers.style.js';
import heroXs from './images/hero@xs.jpg';
import heroMd from './images/hero@md.jpg';
import heroXl from './images/hero@xl.jpg';

const developers = [
  'Front-end developer',
  'NodeJS developer',
  'iOS developer',
  'Android developer',
  'Designer',
]

class Careers extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero 
          title="Careers" 
          backgroundImageXs={heroXs}
          backgroundImageMd={heroMd}
          backgroundImageXl={heroXl} 
        />
        <section className={classes.careers}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Employee Benefits
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom className={classes.description}>
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
        <section className={classNames(classes.careers, classes.blueBackground)}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" align="center" className={classes.whiteText}>
                    We are looking for
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <List>
                    {developers.map(dev => (
                      <ListItem dense key={dev} className={classes.listItem}>
                        <ListItemText disableTypography>     
                          <Typography variant="subtitle1" align="center" className={classes.whiteText}>
                            {dev}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classes.careers}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" align="center" gutterBottom className={classes.description}>
                    Join the Team
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.description}>
                    We’re driven by our goal of improving lives through the products we design and build. We look for people with a commitment 
                    to excellence who take initiative to make products great.
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.description}>
                    We look forward to hearing from you!
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
