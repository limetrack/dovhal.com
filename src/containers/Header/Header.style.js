export default theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolBar: {
    margin: `-${theme.spacing.unit * 2}px -${theme.spacing.unit * 2}px`,
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