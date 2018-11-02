export default (theme) => ({
  projects: {
    paddingTop: `${theme.spacing.unit * 5}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`,
    backgroundColor: theme.palette.grey['100'],
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
    height: `${theme.spacing.unit * 40}px`,
  },
})
