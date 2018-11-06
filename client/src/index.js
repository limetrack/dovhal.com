import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import { CoreLayout } from 'containers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

const PRODUCTION_HOSTNAME_EX = /^(https?:\/\/)?(www\.)?dovhal\.com$/;

if (PRODUCTION_HOSTNAME_EX.test(window.location.hostname)) {
  ReactGA.initialize('UA-128835667-1');
  ReactGA.pageview('/');
}

library.add(fab);

ReactDOM.render(<CoreLayout />, document.getElementById('root'));
registerServiceWorker();
