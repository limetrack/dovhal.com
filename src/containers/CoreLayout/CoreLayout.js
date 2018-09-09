import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from 'containers';
import './CoreLayout.css';

const theme = createMuiTheme();

class CoreLayout extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Footer />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default CoreLayout;
