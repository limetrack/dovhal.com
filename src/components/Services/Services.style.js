export default (theme) => ({
  services: {
    // minHeight: 600,
    marginBottom: `${theme.spacing.unit * 15}px`,
  },
  main: {
    // paddingTop: `${theme.spacing.unit * 6}px`,
    // paddingBottom: `${theme.spacing.unit * 12}px`,
  },
  title: {
    textTransform: 'uppercase',
  },
  description: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  papers: {
    marginTop: `${theme.spacing.unit * 2}px`,
  },
  paper: {
    height: '100%',
    padding: `${theme.spacing.unit * 1}px`,
  },
  icon: {
    width: '100%',
    margin: `${theme.spacing.unit * 2}px auto`,
  },
})
