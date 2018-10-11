import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './SectionLayout.style';

class SectionLayout extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <section className={classes.container}>
        { this.props.children }
      </section>
    );
  }
}

SectionLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default withStyles(styles)(SectionLayout);


