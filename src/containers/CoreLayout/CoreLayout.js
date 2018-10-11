import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from 'containers';
import withRoot from 'withRoot';

import styles from './CoreLayout.style';

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <Fragment className={styles.root}>
          <Header />
        </Fragment>
      </Router>
    );
  }
}

export default withRoot(CoreLayout);;
