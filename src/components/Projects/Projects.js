import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './Projects.style.js';

const projects = [
  {
    title: 'video intelligence',
    linkName: 'www.vi.ai',
    url: 'https://www.vi.ai',
    style: 'vi',
  },
  {
    title: 'NEWTEND',
    linkName: 'www.newtend.com',
    url: 'https://www.newtend.com',
    style: 'newtend',
  },
  {
    title: 'TeslaEnergo',
    linkName: 'www.teslaenergo.com',
    url: 'https://www.teslaenergo.com',
    style: 'tesla',
  },
];

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.projects}>
        <SectionLayout>
          <Grid container spacing={32} justify="center">
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
                {projects.map(prj => (
                  <Grid key={prj.title} item xs={12} md={4}>
                    <ButtonBase href={prj.url} target="_blank" className={classes.button}>
                      <Paper className={classNames(classes.paper, classes[prj.style])} elevation={1}>
                        <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                          <Grid item xs={12} className={classes.companyItem}>
                            <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                              {prj.title}
                            </Typography>
                            <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                              {prj.linkName}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </ButtonBase>
                  </Grid>
                ))}
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
