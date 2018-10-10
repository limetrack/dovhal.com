import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CoreLayout } from 'containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CoreLayout />, document.getElementById('root'));
registerServiceWorker();
