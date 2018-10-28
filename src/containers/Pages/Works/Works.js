import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Paper, 
  Typography, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
} from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
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
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12} md={4}>
                <Paper className={classNames(classes.paper, classes.vi)} elevation={1}>
                  <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                    <Grid item xs={12} className={classes.companyItem}>
                      <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                        video intelligence
                      </Typography>
                      <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                        www.vi.ai
                      </Typography>
                      <Button color="inherit" target="_blank" href="https://www.vi.ai" className={classes.button}>
                        Visit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  Context is everything
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  vi is a contextual video platform
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  We connect publishers, content providers and brands through video storytelling
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Our tools use contextual matching to create compelling video experiences.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  vi offers a full suite of self-serve tools:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="a video syndication engine powered by machine learning" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="a video ad server" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="an SSP" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classNames(classes.works, classes.darkBackground)}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  NEWTEND
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  The electronic trading platform
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  NEWTEND is a high quality and prompt service for participation in the pre-threshold and above-threshold government tenders.
                  NEWTEND participated in the development of the ProZorro system and has all four accreditation levels.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  We provide the suppliers with:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="open new marketing outlets" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="equal access to the government orders" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="a prompt mailout of current procurements" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classNames(classes.paper, classes.newtend)} elevation={1}>
                  <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                    <Grid item xs={12} className={classes.companyItem}>
                      <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                        NEWTEND
                      </Typography>
                      <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                        www.newtend.com
                      </Typography>
                      <Button color="inherit" target="_blank" href="https://www.newtend.com" className={classes.button}>
                        Visit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12} md={4}>
                <Paper className={classNames(classes.paper, classes.tesla)} elevation={1}>
                  <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                    <Grid item xs={12} className={classes.companyItem}>
                      <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                        TeslaEnergo
                      </Typography>
                      <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                        www.teslaenergo.com
                      </Typography>
                      <Button color="inherit" target="_blank" href="https://www.teslaenergo.com" className={classes.button}>
                        Visit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  Teslaenergo
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  The company of energy solutions for houses №1 on the Ukrainian market
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Teslaenergo is a demanding professional in the Ukrainian energy market, relying on future innovations and premium quality.
                  We offer business cooperation to those who are willing to invest in the future of green energy.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  We monitor the most promising technological solutions in Europe to create:
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="a smart" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="energy-efficient home" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                        <CheckCircle color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="the first to bring them to the Ukrainian market" />
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
