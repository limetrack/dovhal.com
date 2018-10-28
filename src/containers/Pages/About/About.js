import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { FingerprintOutlined, HighQualityOutlined, PeopleOutlined, VerifiedUserOutlined } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import { Hero } from 'components';
import styles from './About.style.js';
import hero from './images/hero.jpg';

// const advantages = [
//   'up to date technologies',
//   'high quality and balanced cost',
//   'individual approach',
//   'warranty and support',
// ]

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero backgroundImage={hero} title="About us" />
        <section className={classes.about}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  Our mission
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.text}>
                  We believe in building software that improves lives and makes us a little happier
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={32} justify="center">
                  <Grid item xs={12} md={3}>
                    <Paper className={classes.paper} elevation={1}>
                      <FingerprintOutlined fontSize="large" color="primary" className={classes.icon} />
                      <Typography variant="h6" align="center">
                        Up to date technologies
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                        As capabilities of technology are expected to continue growing exponentially, it is certain that the 
                        future of business will increasingly efficient.
                      </Typography>
                    </Paper>
                  </Grid> 
                  <Grid item xs={12} md={3}>
                    <Paper className={classes.paper} elevation={1}>
                      <HighQualityOutlined fontSize="large" color="primary" className={classes.icon} />
                      <Typography variant="h6" align="center">
                        High quality
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                        It’s easier than you think to balance quality and cost for your business when real professionals come to work.
                      </Typography>
                    </Paper>
                  </Grid> 
                  <Grid item xs={12} md={3}>
                    <Paper className={classes.paper} elevation={1}>
                      <PeopleOutlined fontSize="large" color="primary" className={classes.icon} />
                      <Typography variant="h6" align="center">
                        Individual approach
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                        Every person wants to feel special, and an individual approach lets us give you the care you need.
                      </Typography>
                    </Paper>
                  </Grid> 
                  <Grid item xs={12} md={3}>
                    <Paper className={classes.paper} elevation={1}>
                      <VerifiedUserOutlined fontSize="large" color="primary" className={classes.icon} />
                      <Typography variant="h6" align="center">
                        Warranty and support
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                        When we talk about warranty, we mean much more, namely warmth and care that we give to our loved ones.
                      </Typography>
                    </Paper>
                  </Grid> 
                </Grid>
              </Grid> 
            </Grid>
          </SectionLayout>
        </section>
        <section className={classNames(classes.about, classes.blueBackground)}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" align="center" className={classes.whiteText}>
                    Technology
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle2" align="center" gutterBottom className={classes.whiteText}>
                    Technology is inescapable. It pervades every facet of our life. From how we work, play and live our lives, 
                    technology has created a revolution that will grow for as long as humans continue to advance in their capabilities.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle2" align="center" gutterBottom className={classes.whiteText}>
                    As the days, months and years go by, technology just gets better and better. What was once the latest 
                    and greatest yesterday, is old hat today. The bottom line is, technology doesn’t wait for you and if 
                    your organization isn’t keeping up with it, you will surely be left in the dust by one of your competitors.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle2" align="center" gutterBottom className={classes.whiteText}>
                    Our main advantage is the use of only the latest proven technologies.
                  </Typography>
                </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section>
          <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.5138488937392!2d30.51933162924914!3d50.49592675183869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1b2fb432679%3A0xa494771134c861e6!2sDovhal!5e0!3m2!1sen!2sua!4v1540744625860" 
            width="50%" 
            height="550" 
            frameborder="0" 
            style={{ border: 0 }}
            allowfullscreen>
          </iframe>
          <iframe 
            title="photo"
            src="https://www.google.com/maps/embed?pb=!4v1540745392412!6m8!1m7!1sf4rmqdmPtfno7zbATB7WtQ!2m2!1d50.49571534142549!2d30.52025289993295!3f314.91709279733846!4f42.91563514523651!5f0.7820865974627469" 
            width="50%" 
            height="550" 
            frameborder="0" 
            style={{ border: 0 }}
            allowfullscreen>
          </iframe>
        </section>
      </Fragment>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
