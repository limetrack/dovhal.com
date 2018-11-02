import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import styles from './Project.style.js';

export const PROJECTS = [
  'vi',
  'newtend',
  'tesla',
];

const PROJECTS_DATA = {
  vi: {
    title: 'video intelligence',
    linkName: 'www.vi.ai',
    url: 'https://www.vi.ai',
    style: 'vi',
  },
  newtend: {
    title: 'NEWTEND',
    linkName: 'www.newtend.com',
    url: 'https://www.newtend.com',
    style: 'newtend',
  },
  tesla: {
    title: 'TeslaEnergo',
    linkName: 'www.teslaenergo.com',
    url: 'https://www.teslaenergo.com',
    style: 'tesla',
  },
};

class Project extends Component {
  render() {
    const { classes, name } = this.props;
    
    const data = PROJECTS_DATA[name];

    return (
      <ButtonBase href={data.url} target="_blank" className={classes.buttonBase}>
        <Paper className={classNames(classes.paper, classes[data.style])} elevation={1}>
          <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
            <Grid item xs={12} className={classes.companyItem}>
              <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                {data.title}
              </Typography>
              <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                {data.linkName}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </ButtonBase>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.oneOf(PROJECTS).isRequired,
};

export default withStyles(styles)(Project);
