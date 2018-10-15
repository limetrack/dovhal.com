import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { MobileFriendly, LaptopMac, HeadsetMic } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import styles from './About.style.js';

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.about}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" className={classes.main}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={1}>
                <Grid container spacing={32} justify="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" align="center" color="primary" className={classes.title}>
                      About company
                    </Typography>
                    <Typography variant="h4" align="center">
                      We Provided Services All Over The World
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                      Dovhal Ltd. designs and builds beautiful world-class iOS, Android, and Web apps for startups and big brands. 
                      We bring together the best customer experience talent to hear what users have to say and turn thoughtful 
                      solutions into apps that make an impact. One user at a time, we’re improving lives.
                    </Typography>
                  </Grid> 
                  <Grid item xs={12}>
                    <Grid container spacing={32} justify="center">
                      <Grid item xs={12} md={4}>
                        <MobileFriendly fontSize="large" color="primary" className={classes.icon} />
                        <Typography variant="h6" align="center">
                          App Development
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                          We use our expertise in a variety of technologies to craft code that opens the door for ongoing iterations 
                          with our clients’ users. Our teams ensure a build with the foundation for success.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <LaptopMac fontSize="large" color="primary" className={classes.icon} />
                        <Typography variant="h6" align="center">
                          Web Development
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                          Our web development process is geared toward an intuitive experience for users. We create products that are 
                          both aesthetically pleasing and user friendly.
                        </Typography>
                      </Grid> 
                      <Grid item xs={12} md={4}>
                        <HeadsetMic fontSize="large" color="primary" className={classes.icon} />
                        <Typography variant="h6" align="center">
                          Support
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.description}>
                          A launch date doesn’t mean “goodbye.” We continue collaborating for exponential success, keeping you and your products online.
                        </Typography>
                      </Grid> 
                    </Grid>
                  </Grid> 
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
