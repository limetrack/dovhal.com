export default (theme) => ({
  technologies: {
    backgroundColor: theme.palette.primary.main,
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
    maxWidth: '100%',
    maxHeight: `${theme.spacing.unit * 8}px`,
  },
})
