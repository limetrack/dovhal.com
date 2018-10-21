import React, { Component, Fragment } from 'react';
import * as Sections from 'components';

class FrontPage extends Component {
  render() {

    return (
      <Fragment>
        <Sections.Hero />
        <Sections.About />
        <Sections.Dream />
        <Sections.Services />
        <Sections.BusinessPlatform />
        <Sections.Technologies />
        <Sections.Phrase />
        <Sections.Projects />
        {/* <Sections.ReadMore /> */}
        <Sections.Consultation />
      </Fragment>
    );
  }
}

export default FrontPage;
