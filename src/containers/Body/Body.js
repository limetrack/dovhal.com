import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './Body.style'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import classNames from 'classnames'
import data from '../../data/data'

const cards = data.services

const Body = (props) => {
  const { classes } = props
  return (
    <div>
      {/* <Button variant="contained" color="primary">
        Main call to action
      </Button> */}
      <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40} justify='center'>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // height="140"
                    // component="img"
                    image = {data.img + card.logo}
                    // image = {'/img/app.jpg'}
                    // image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title={card.name}
                    // title={data.img + card.logo}
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

export default withStyles(styles)(Body)