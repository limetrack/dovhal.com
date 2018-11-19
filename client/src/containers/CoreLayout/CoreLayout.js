import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer, FrontPage, Services, Works, About, Careers } from 'containers';
import withRoot from 'withRoot';

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route component={Header}/>
          <Switch>
            <Route path="/services" component={Services} />
            <Route path="/successes" component={Works} />
            <Route path="/about" component={About} />
            <Route path="/careers" component={Careers} />
            <Route component={FrontPage} />
          </Switch>
          <Route component={Footer}/>
        </Fragment>
      </Router>
    );
  }
}

export default withRoot(CoreLayout);
