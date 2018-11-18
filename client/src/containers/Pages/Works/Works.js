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
          title="Our succeses" 
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
              <Grid item xs={12} md={8} className={classes.desktop}>
                <Typography variant="subtitle2" color="textSecondary" align="right" gutterBottom>
                  NEWTEND is a high quality and immediate service used to participate in the pre-threshold and above-threshold governmental tenders.
                  NEWTEND and ProZorro work hand in hand to allow efficient distiribution at all four accreditation levels.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" align="right" gutterBottom paragraph>
                  We provide the suppliers with:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemText 
                      primary="New marketing outlets"
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
                      primary="A prompt notification of current projects"
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
              <Grid item xs={12} md={8} className={classes.mobile}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  NEWTEND is a high quality and immediate service used to participate in the pre-threshold and above-threshold governmental tenders.
                  NEWTEND and ProZorro work hand in hand to allow efficient distiribution at all four accreditation levels.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom paragraph>
                  We provide the suppliers with:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="New marketing outlets" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Equal access to the government orders" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="A prompt notification of current projects" />
                  </ListItem>
                </List>
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
                 Top energy solutions for homes in Ukraine
                </Typography>
              </Grid> 
              <Grid item xs={12} md={4} className={classes.paper}>
                <Project name="tesla" />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  TeslaEnergo is the preeminent suppplier of new ideas and innovations in the Ukrainian energy market.
                  We collaborate with businesses that invest in the future of green energy.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom paragraph>
                  We monitor the most promising technological solutions in Europe to create:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Smart Technology" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Energy-efficient homes" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Pioneers in Ukraine" />
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
