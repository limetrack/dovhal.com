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
        <Sections.Projects />
        <Sections.Phrase />
        {/* <Sections.ReadMore /> */}
        <Sections.Services />
      </Fragment>
    );
  }
}

export default FrontPage;
