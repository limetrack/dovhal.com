import React, { Component, Fragment } from 'react';
import * as Sections from 'components';

class FrontPage extends Component {
  render() {

    return (
      <Fragment>
        <Sections.Hero mainHero />
        <Sections.About />
        <Sections.Dream />
        <Sections.Services />
        <Sections.BusinessPlatform />
        <Sections.Technologies />
        <Sections.Projects />
        <Sections.Phrase />
      </Fragment>
    );
  }
}

export default FrontPage;
