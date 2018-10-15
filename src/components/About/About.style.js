export default (theme) => ({
  about: {
    top: '-50px',
    minHeight: 600,
    position: 'relative',
    // backgroundColor: theme.palette.grey['100'],
  },
  paper: {
    paddingTop: `${theme.spacing.unit * 6}px`,
    paddingBottom: `${theme.spacing.unit * 6}px`,
  },
  title: {
    textTransform: 'uppercase',
  },
  description: {
    margin: `0 ${theme.spacing.unit * 5}px`,
  },
  icon: {
    width: '100%',
    margin: `${theme.spacing.unit * 2}px auto`,
  }
})
