export default (theme) => ({
  about: {
    paddingTop: `${theme.spacing.unit * 6}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`,
  },
  text: {
    marginBottom: `${theme.spacing.unit * 5}px`,
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
  blueBackground: {
    backgroundColor: theme.palette.primary.main,
  },
  whiteText: {
    color: theme.palette.grey['50'],
  },
})
