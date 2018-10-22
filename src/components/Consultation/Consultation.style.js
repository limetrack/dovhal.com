export default (theme) => ({
  consultation: {
    // minHeight: `${theme.spacing.unit * 40}px`,
    paddingTop: `${theme.spacing.unit * 5}px`,
    paddingBottom: `${theme.spacing.unit * 5}px`,
    backgroundColor: theme.palette.grey['100'],
    [theme.breakpoints.up('md')]: {
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
  },
  textField: {
    backgroundColor: theme.palette.grey['50'],
  },
})
