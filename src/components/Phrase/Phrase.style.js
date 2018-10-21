import planet from './img/planet.png';

export default (theme) => ({
  phrase: {
    // minHeight: `${theme.spacing.unit * 80}px`,
    // backgroundColor: theme.palette.grey['100'],
    backgroundImage: `url(${planet})`,
    backgroundSize: 'auto',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    paddingTop: `${theme.spacing.unit * 5}px`,
    paddingBottom: `${theme.spacing.unit * 5}px`,
  },
  photo: {
    maxWidth: '100%',
    maxHeight: `${theme.spacing.unit * 70}px`,
  },
  me: {
    marginLeft: '2px',
  },
})