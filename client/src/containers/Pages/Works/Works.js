import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
} from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import { Hero, Project } from 'components';
import styles from './Works.style.js';
import heroXs from './images/hero@xs.jpg';
import heroMd from './images/hero@md.jpg';
import heroXl from './images/hero@xl.jpg';

class Works extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero 
          title="Our works" 
          backgroundImageXs={heroXs}
          backgroundImageMd={heroMd}
          backgroundImageXl={heroXl} 
        />
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  Context is everything
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom>
                  vi is a contextual video platform
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={classes.paper}>
                <Project name="vi" />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  We connect publishers, content providers and brands through video storytelling
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Our tools use contextual matching to create compelling video experiences.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom paragraph>
                  vi offers a full suite of self-serve tools:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="A video syndication engine powered by machine learning" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="A video ad server" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="An SSP" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classNames(classes.works, classes.darkBackground)}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  NEWTEND
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom>
                  The electronic trading platform
                </Typography>
              </Grid> 
              <Grid item xs={12} md={8}>
                <Typography variant="subtitle2" color="textSecondary" align="right" gutterBottom>
                  NEWTEND is a high quality and prompt service for participation in the pre-threshold and above-threshold government tenders.
                  NEWTEND participated in the development of the ProZorro system and has all four accreditation levels.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" align="right" gutterBottom paragraph>
                  We provide the suppliers with:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemText 
                      primary="Open new marketing outlets"
                      primaryTypographyProps={{ align: 'right' }} />
                    <ListItemIcon className={classes.iconRight}>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemText 
                      primary="Equal access to the government orders"
                      primaryTypographyProps={{ align: 'right' }} />
                    <ListItemIcon className={classes.iconRight}>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemText 
                      primary="A prompt mailout of current procurements"
                      primaryTypographyProps={{ align: 'right' }} />
                    <ListItemIcon className={classes.iconRight}>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4} className={classes.paper}>
                <Project name="newtend" />
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  TeslaEnergo
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom>
                 The company of energy solutions for houses №1 on the Ukrainian market
                </Typography>
              </Grid> 
              <Grid item xs={12} md={4} className={classes.paper}>
                <Project name="tesla" />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Teslaenergo is a demanding professional in the Ukrainian energy market, relying on future innovations and premium quality.
                  We offer business cooperation to those who are willing to invest in the future of green energy.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom paragraph>
                  We monitor the most promising technological solutions in Europe to create:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="A smart" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Energy-efficient home" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="The first to bring them to the Ukrainian market" />
                  </ListItem>
                </List>
              </Grid>
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
