import React from 'react';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#33cbf5',
      main: '#00BFF3',
      // dark: '#0085aa',
      // contrastText: 'white',
    },
    secondary: {
      // light: '#f76333',
      main: '#FF5E5B',
      // dark: '#ab2a00',
      // contrastText: 'white',
    },
    error: {
      main: '#FFED66'
    },
    contrastThreshold: 2, // 3
    tonalOffset: 0.15, // 0.2
    text: {
      main: '#FFFFFF'
    },
    typography: {
      color: 'white',
    },
  },
});

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset());

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName();

function withRoot(Component) {
  function WithRoot(props) {
    // JssProvider allows customizing the JSS styling solution.
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }

  return WithRoot;
}

export default withRoot;