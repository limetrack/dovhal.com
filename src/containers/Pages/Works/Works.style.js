import vi from './images/vi.png';
import newtend from './images/NEWTEND.png';
import teslaEnergo from './images/TeslaEnergo.png';

export default (theme) => ({
  works: {
    paddingTop: `${theme.spacing.unit * 4}px`,
    paddingBottom: `${theme.spacing.unit * 6}px`,
  },
  description: {
    marginBottom: `${theme.spacing.unit * 5}px`,
  },
  photo: {
    maxWidth: '100%',
    maxHeight: `${theme.spacing.unit * 70}px`,
  },
  darkBackground: {
    backgroundColor: theme.palette.grey['100'],
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
    height: `${theme.spacing.unit * 30}px`,
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
