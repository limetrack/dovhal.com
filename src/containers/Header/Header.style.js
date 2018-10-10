export default theme => ({
  root: {
    width: '100%',
  },
  menuBar: {
    alignItems: 'center',
  },
  menuContent: {
    maxWidth: 960,
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  headerLogo: {
    height: 30,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});