import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './CoreLayout.css';

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <div className="CoreLayout">
          <header className="CoreLayout-header">
            <img src={logo} className="CoreLayout-logo" alt="logo" />
            <h1 className="CoreLayout-title">Welcome to Dovhal.com</h1>
          </header>
          <p className="CoreLayout-intro">
            To get started, edit <code>src/CoreLayout.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default CoreLayout;
