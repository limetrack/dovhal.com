import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styles from './ImgList.style'

function ImgList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridList} spacing='0' justify="center">
        {props.images.map(tile => (
            <Grid item className={classes.gridItem} xs={2}>
                <img src={props.imgPath + tile.logo} alt={tile.name} height='120px' width='auto'/>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

ImgList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgList);