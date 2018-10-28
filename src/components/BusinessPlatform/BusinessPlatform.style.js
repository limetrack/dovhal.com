export default (theme) => ({
  business: {
    // minHeight: `${theme.spacing.unit * 80}px`,
    paddingTop: `${theme.spacing.unit * 7}px`,
    paddingBottom: `${theme.spacing.unit * 7}px`,
  },
  photo: {
    maxWidth: '100%',
    maxHeight: `${theme.spacing.unit * 70}px`,
  },
  description: {
    // height: '100%',
  },
  companyItem: {
    position: 'relative',
  },
  companyName: {
    display: 'inline-block',
  },
  companyAmount: {
    display: 'inline-block',
    position: 'absolute',
    transform: 'translateX(-55%)',
    marginTop: '-5px',
    color: theme.palette.grey['50'],
    padding: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit * 1.5}px`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: `${theme.spacing.unit * 0.5}px`,
  },
})
