export default (theme) => ({
  technologies: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: `${theme.spacing.unit * 14}px`,
  },
  main: {
    minHeight: `${theme.spacing.unit * 16}px`,
  },
  imgGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    maxHeight: `${theme.spacing.unit * 8}px`,
  },
})
