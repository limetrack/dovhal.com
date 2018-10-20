export default (theme) => ({
  consultation: {
    // minHeight: `${theme.spacing.unit * 40}px`,
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
})
