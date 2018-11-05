export default (theme) => ({
  consultation: {
    // minHeight: `${theme.spacing.unit * 40}px`,
    paddingTop: `${theme.spacing.unit * 5}px`,
    paddingBottom: `0px`,
    backgroundColor: theme.palette.grey['100'],
    [theme.breakpoints.up('md')]: {
      paddingBottom: `${theme.spacing.unit * 3}px`,
      backgroundImage: `linear-gradient(left, transparent 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    },
  },
  text: {
    color: theme.palette.grey['50'],
  },
  avatar: {
    backgroundColor: 'transparent',
  },
  friends: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: `${theme.spacing.unit * 6}px !important`,
    },
  },
  contactForm: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: `${theme.spacing.unit * 6}px !important`,
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: `${theme.spacing.unit * 3}px !important`,
    },
  },
  textField: {
    backgroundColor: theme.palette.grey['50'],
  },
  listItem: {
    paddingLeft: 0,
  },
  button: {
    marginTop: `${theme.spacing.unit * 1}px`,
  },
  description: {
    marginTop: `${theme.spacing.unit * 2.5}px`,
  },
  thanks: {
    height: '100%',
  },
})
