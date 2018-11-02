import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import { CoreLayout } from 'containers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import registerServiceWorker from './registerServiceWorker';

library.add(fab);

ReactDOM.render(<CoreLayout />, document.getElementById('root'));
registerServiceWorker();
