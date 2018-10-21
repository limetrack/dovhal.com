import vi from './img/vi.png';
import newtend from './img/NEWTEND.png';
import teslaEnergo from './img/TeslaEnergo.png';

export default (theme) => ({
  projects: {
    // minHeight: 600,
    marginBottom: `${theme.spacing.unit * 15}px`,
  },
  main: {
    // paddingTop: `${theme.spacing.unit * 6}px`,
    // paddingBottom: `${theme.spacing.unit * 12}px`,
  },
  title: {
    textTransform: 'uppercase',
  },
  description: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  papers: {
    marginTop: `${theme.spacing.unit * 2}px`,
  },
  paper: {
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: '80%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundOrigin: 'content-box',
    // padding: `${theme.spacing.unit * 4}px`,
    height: `${theme.spacing.unit * 30}px`,
    '&:hover': {
      // '&:before': {
      //   top: 0,
      //   left: 0,
      //   content: '""',
      //   position: 'absolute',
      //   width: '100%',
      //   height: '100%',
      //   background: theme.palette.primary.main,
      // },
    }
  },
  vi: {
    backgroundImage: `url(${vi})`,
  },
  newtend: {
    backgroundImage: `url(${newtend})`,
  },
  tesla: {
    backgroundImage: `url(${teslaEnergo})`,
  },
  companyGrid: {
    opacity: 0,
    transition: 'opacity 0.4s',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    background: theme.palette.primary.main,
    '&:hover': {
      opacity: 0.97,
    }
  },
  companyItem: {
    textAlign: 'center',
  },
  itemText: {
    color: theme.palette.grey['50'],
  },
  button: {
    color: theme.palette.grey['50'],
  },
})
