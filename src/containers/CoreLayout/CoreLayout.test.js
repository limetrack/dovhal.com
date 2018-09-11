import React from 'react';
import ReactDOM from 'react-dom';
import { CoreLayout } from 'containers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoreLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
