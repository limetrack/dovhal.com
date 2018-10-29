import vi from './images/vi.png';
import newtend from './images/NEWTEND.png';
import teslaEnergo from './images/TeslaEnergo.png';

export default (theme) => ({
  buttonBase: {
    width: '100%',
    height: '100%',
    borderRadius: `${theme.spacing.unit * 0.5}px`,
  },
  paper: {
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: '80%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
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
      opacity: 0.96,
    }
  },
  companyItem: {
    textAlign: 'center',
  },
  itemText: {
    color: theme.palette.grey['50'],
  },
})
