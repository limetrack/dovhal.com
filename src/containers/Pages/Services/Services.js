import React, { Component, Fragment } from 'react';
import { Hero } from 'components';
import hero from './images/hero.jpg';

class Services extends Component {
  render() {

    return (
      <Fragment>
        <Hero backgroundImage={hero} title="Our services" />
      </Fragment>
    );
  }
}

export default Services;
