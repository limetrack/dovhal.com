import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Body, Footer } from 'containers';
import withRoot from 'withRoot';

// Router needs to be moved to withRoot?????????????
class CoreLayout extends Component {
  render() {
    return (
      <Router> 
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withRoot(CoreLayout);
