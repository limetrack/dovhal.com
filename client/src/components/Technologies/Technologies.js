import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SectionLayout } from 'containers';
import styles from './Technologies.style.js';
import nodeImg from './img/node.png';
import expressImg from './img/express.png';
import reactImg from './img/react.png';
import mongodbImg from './img/mongodb.png';

class Technologies extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.technologies}>
        <SectionLayout>
          <Grid container justify="space-around" alignItems="center" className={classes.main}>
            <Grid item xs={6} md={3} className={classes.imgGrid}>
              <img src={mongodbImg} alt="MongoDB" className={classes.img} />
            </Grid>
            <Grid item xs={6} md={3} className={classes.imgGrid}>
              <img src={expressImg} alt="Express" className={classes.img} />
            </Grid>
            <Grid item xs={6} md={3} className={classes.imgGrid}>
              <img src={reactImg} alt="React" className={classes.img} />
            </Grid>
            <Grid item xs={6} md={3} className={classes.imgGrid}>
              <img src={nodeImg} alt="Node" className={classes.img} />
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Technologies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Technologies);
