export default (theme) => ({
  consultation: {
    minHeight: 600,
    [theme.breakpoints.up('md')]: {
      backgroundImage: `linear-gradient(left, transparent 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    },
    text: {
      color: theme.palette.grey['50'],
    },
  },
})
