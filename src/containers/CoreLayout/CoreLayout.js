import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer, FrontPage } from 'containers';
import withRoot from 'withRoot';

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <FrontPage />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default withRoot(CoreLayout);;
