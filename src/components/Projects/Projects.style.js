import vi from './img/vi.png';
import newtend from './img/NEWTEND.png';
import teslaEnergo from './img/TeslaEnergo.png';

export default (theme) => ({
  projects: {
    paddingTop: `${theme.spacing.unit * 5}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`,
    backgroundColor: theme.palette.grey['100'],
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
