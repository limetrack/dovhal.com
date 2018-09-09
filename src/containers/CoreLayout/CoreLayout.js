import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './CoreLayout.css';

const theme = createMuiTheme();

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className="CoreLayout">
            <header className="CoreLayout-header">
              <img src={logo} className="CoreLayout-logo" alt="logo" />
              <h1 className="CoreLayout-title">Welcome to Dovhal.com</h1>
            </header>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default CoreLayout;
