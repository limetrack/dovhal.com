export default (theme) => ({
  about: {
    marginTop: `-${theme.spacing.unit * 10}px`,
    minHeight: `${theme.spacing.unit * 70}px`,
    position: 'relative',
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
  },
})
