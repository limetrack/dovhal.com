import React, { Component, Fragment } from 'react';
import * as Sections from 'components';

class FrontPage extends Component {
  render() {

    return (
      <Fragment>
        <Sections.Hero />
        <Sections.About />
        <Sections.Dream />
        <Sections.Consultation />
        <Sections.BusinessPlatform />
        <Sections.Technologies />
        <Sections.Services />
        <Sections.Phrase />
        {/* <Sections.ReadMore /> */}
        <Sections.Projects />
      </Fragment>
    );
  }
}

export default FrontPage;
