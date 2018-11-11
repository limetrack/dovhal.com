export default (theme) => ({
  works: {
    paddingTop: `${theme.spacing.unit * 6}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`,
  },
  description: {
    marginBottom: `${theme.spacing.unit * 5}px`,
  },
  darkBackground: {
    backgroundColor: theme.palette.grey['100'],
  },
  papers: {
    marginTop: `${theme.spacing.unit * 2}px`,
  },
  paper: {
    height: `${theme.spacing.unit * 30}px`,
  },
  iconRight: {
    marginRight: 0,
    marginLeft: `${theme.spacing.unit * 2}px`,
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
})
