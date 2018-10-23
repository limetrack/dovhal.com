import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer, FrontPage, Services } from 'containers';
import withRoot from 'withRoot';

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route component={Header}/>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/services" component={Services} />
          </Switch>
          <Route component={Footer}/>
        </Fragment>
      </Router>
    );
  }
}

export default withRoot(CoreLayout);;
