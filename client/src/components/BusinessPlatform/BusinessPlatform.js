import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, LinearProgress } from '@material-ui/core';
import { SectionLayout } from 'containers';
import styles from './BusinessPlatform.style.js';
import girl from './img/girl.png';

const budgets = [
  {
    name: 'Tencent',
    progress: 55,
    amount: '$21.9 Billion',
  },
  {
    name: 'Facebook',
    progress: 60,
    amount: '$40.6 Billion',
  },
  {
    name: 'JD.com',
    progress: 65,
    amount: '$55.7 Billion',
  },
  {
    name: 'Alphabet Inc.',
    progress: 70,
    amount: '$110.8 Billion',
  },
  {
    name: 'Amazon',
    progress: 75,
    amount: '$177.8 Billion',
  },
]

class BusinessPlatform extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.business}>
        <SectionLayout>
          <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={32} alignItems="center" justify="center" className={classes.description}>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    Do you want to be one of them?
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    All you need is an idea and the rest we will do ourselves!
                  </Typography>
                </Grid>
                  {budgets.map(budget => (
                    <Grid item xs={12} className={classes.companyItem} key={budget.name}>
                      <Typography variant="h6" align="justify" gutterBottom className={classes.companyName}>
                        {budget.name}
                      </Typography>
                      <Typography variant="subtitle1" align="justify" noWrap gutterBottom className={classes.companyAmount} style={{ left: `${budget.progress}%` }}>
                        {budget.amount}
                      </Typography>
                      <LinearProgress variant="determinate" value={budget.progress} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={girl} alt="CEO" className={classes.photo} />
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

BusinessPlatform.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessPlatform);
