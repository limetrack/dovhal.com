import hero from './img/hero.jpg';

export default (theme) => ({
  hero: {
    background: 'rgba(0, 0, 0, 0.3)',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      zIndex: '-1',
    }
  },
  main: {
    minHeight: 600,
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
  }
})
