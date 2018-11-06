import planet from './img/planet.png';

export default (theme) => ({
  phrase: {
    // minHeight: `${theme.spacing.unit * 80}px`,
    // backgroundColor: theme.palette.grey['100'],
    backgroundImage: `url(${planet})`,
    backgroundSize: 'auto',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    paddingTop: `${theme.spacing.unit * 7}px`,
    paddingBottom: `${theme.spacing.unit * 7}px`,
  },
  photo: {
    maxWidth: '100%',
    maxHeight: `${theme.spacing.unit * 70}px`,
  },
  sign: {
    maxWidth: '100%',
    maxHeight: `${theme.spacing.unit * 40}px`,
    [theme.breakpoints.up('md')]: {
      marginLeft: `${theme.spacing.unit * 15}px`,
    },
  },
  signItem: {
    marginTop: `-${theme.spacing.unit * 10}px`,
  },
  me: {
    marginLeft: '2px',
  },
})