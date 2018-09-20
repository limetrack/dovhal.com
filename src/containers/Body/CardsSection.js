import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './CardsSection.style'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import classNames from 'classnames'
// import data from '../../data/data'

// const cards = data.services

const CardsSection = (props) => {
  const { classes } = props
  return (
    <div>
      <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40} justify='center'>
            {props.cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image = {props.imgPath + card.logo}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  )
}

export default withStyles(styles)(CardsSection)