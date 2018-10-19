import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Projects.style.js';

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.projects}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" className={classes.main}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Our works
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2" color="textSecondary" align="center">
                We value our every client and look forward to knowing you
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <Grid container spacing={32} justify="center" className={classes.papers}>
                <Grid item xs={12} md={3}>
                  <Paper className={classNames(classes.paper, classes.newtend)} elevation={1}>
                    <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                      <Grid item xs={12} className={classes.companyItem}>
                        <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                          NEWTEND
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                          |||
                        </Typography>
                        <Button color="inherit" target="_blank" href="https://www.newtend.com" className={classes.button}>
                          Visit
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid> 
                <Grid item xs={12} md={3}>
                  <Paper className={classNames(classes.paper, classes.vi)} elevation={1}>
                    <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                      <Grid item xs={12} className={classes.companyItem}>
                        <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                          video intelligence
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                          |||
                        </Typography>
                        <Button color="inherit" target="_blank" href="https://www.vi.ai" className={classes.button}>
                          Visit
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid> 
                <Grid item xs={12} md={3}>
                  <Paper className={classNames(classes.paper, classes.tesla)} elevation={1}>
                    <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                      <Grid item xs={12} className={classes.companyItem}>
                        <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                          TeslaEnergo
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                          |||
                        </Typography>
                        <Button color="inherit" target="_blank" href="https://www.teslaenergo.com" className={classes.button}>
                          Visit
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid> 
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
