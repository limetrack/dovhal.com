import {
  blue as primaryMain,
  orange as secondaryMain,
  white as primaryContrastText
} from './dovhalColors';

export default {
  palette: {
    primary: {
      main: primaryMain,
      contrastText: primaryContrastText
    },
    secondary: {
      main: secondaryMain,
    }
  },
  typography: {
    useNextVariants: true,
  },
};