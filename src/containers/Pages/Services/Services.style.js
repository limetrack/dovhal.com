export default (theme) => ({
  services: {
    paddingTop: `${theme.spacing.unit * 4}px`,
    paddingBottom: `${theme.spacing.unit * 6}px`,
    backgroundColor: theme.palette.grey['100'],
  },
  card: {
    height: '100%',
  },
  media: {
    objectFit: 'cover',
  },
})
