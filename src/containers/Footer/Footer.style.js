export default (theme) => ({
  footer: {
    backgroundColor: '#262729',
  },
  footer1: {
    backgroundColor: '#262729',
  },
  divider: {
    backgroundColor: theme.palette.grey['800'],
  },
  text: {
    color: theme.palette.grey['300'],
  },
  icon: {
    marginRight: `${theme.spacing.unit * 2}px`,
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
