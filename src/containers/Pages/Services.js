import React, { Component, Fragment } from 'react';
import * as Sections from 'components';
import hero from 'assets/images/ourServices.jpg';

class Services extends Component {
  render() {

    return (
      <Fragment>
        <Sections.Hero backgroundImage={hero} title="Our services" />
      </Fragment>
    );
  }
}

export default Services;
