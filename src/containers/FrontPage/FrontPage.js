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
        <Sections.Services />
        <Sections.ReadMore />
        <Sections.BusinessPlatform />
        <Sections.Projects />
        <Sections.Phrase />
        <Sections.Technologies />
      </Fragment>
    );
  }
}

export default FrontPage;
