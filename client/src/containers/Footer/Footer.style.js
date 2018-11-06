export default (theme) => ({
  footer: {
    backgroundColor: '#262729',
    marginTop: '-1px',
  },
  divider: {
    backgroundColor: theme.palette.grey['800'],
  },
  text: {
    color: theme.palette.grey['300'],
  },
  icon: {
    marginRight: `${theme.spacing.unit * 1}px`,
    marginLeft: `${theme.spacing.unit * 1}px`,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  logo: {
    height: 30,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
