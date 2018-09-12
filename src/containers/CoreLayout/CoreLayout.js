import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from 'containers';
import withRoot from 'withRoot';

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withRoot(CoreLayout);;
