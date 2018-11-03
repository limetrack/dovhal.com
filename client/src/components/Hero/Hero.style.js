export default (theme) => ({
  hero: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // background: 'rgba(0, 0, 0, 0.6)',
    // position: 'relative',
    // '&:before': {
    //   content: '""',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '100%',
    //   zIndex: '-1',
    // }
  },
  main: {
    minHeight: `${theme.spacing.unit * 40}px`,
  },
  title: {
    textTransform: 'uppercase',
  },
  text: {
    color: theme.palette.grey['50'],
  },
  button: {
    whiteSpace: 'nowrap',
  },
  buttons: {
    marginTop: 0,
  },
  mobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
})
