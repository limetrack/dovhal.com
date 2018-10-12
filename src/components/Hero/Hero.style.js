import hero from './img/hero.jpg';

export default (theme) => ({
  hero: {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  main: {
    minHeight: 600,
  }
})
