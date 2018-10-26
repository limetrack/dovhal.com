import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Typography, 
  Card,
  CardContent, 
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import { Hero } from 'components';
import styles from './Services.style.js';
import hero from './images/hero.jpg';
import app from './images/app.jpg';
import web from './images/web.jpg';
import support from './images/support.jpg';

const services = [
  {
    image: app,
    title: 'App Development',
    description: 'We use our expertise in a variety of technologies to craft code that opens the door for ongoing iterations with our clients’ users. Our teams ensure a build with the foundation for success.',
    listItems: [
      'iOS App Development',
      'Android App Development',
      'Mobile App Development',
    ],
  },
  {
    image: web,
    title: 'Web Development',
    description: 'Our web development process is geared toward an intuitive experience for users. We create products that are both aesthetically pleasing and user friendly.',
    listItems: [
      'Web Development',
      'Responsive Web Design',
      'API Development',
      'Frontend Development',
      'Backend Development',
    ],
  },
  {
    image: support,
    title: 'Support',
    description: 'A launch date doesn’t mean “goodbye.” We continue collaborating for exponential success, keeping you and your products online.',
    listItems: [
      'Incident management',
      'Problem management',
      'Change management',
      'IT project management',
      'Asset management',
    ],
  },
]

class Services extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero backgroundImage={hero} title="Our services" />
        <section className={classes.services}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    We Know That The Service Should Please
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.description}>
                    Our team uses our expertise in design and development to explore and define the best strategy for your team. 
                    We work to grow and maintain a transparent collaboration that extends beyond a launch date. From concept to delivery, 
                    we offer solutions that will ensure a successful product.
                  </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} justify="center" className={classes.main}>
              {services.map(service => (
                <Grid item xs={12} md={4} key={service.title}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      alt={service.title}
                      className={classes.media}
                      height="240"
                      image={service.image}
                      title={service.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" align="center">
                        {service.title}
                      </Typography>
                      <Typography gutterBottom variant="subtitle2" color="textSecondary">
                        {service.description}
                      </Typography>
                      <List dense disablePadding>
                        {service.listItems.map(item =>(
                          <ListItem key={item} disableGutters>
                            <ListItemIcon>
                                <CheckCircle color="primary"/>
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </SectionLayout>
        </section>
      </Fragment>
    );
  }
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
