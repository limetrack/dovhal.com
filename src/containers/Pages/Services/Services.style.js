export default (theme) => ({
  services: {
    paddingTop: `${theme.spacing.unit * 4}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`,
  },
  card: {
    height: '100%',
  },
  media: {
    objectFit: 'cover',
  },
  description: {
    marginBottom: `${theme.spacing.unit * 5}px`,
  },
})
