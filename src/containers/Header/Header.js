import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { SectionLayout } from 'containers';
import {
  AppBar, 
  Button,
  Toolbar,
  IconButton,
} from '@material-ui/core';

import {
  MoreVert as MoreIcon,
} from '@material-ui/icons';

import logo from './logo.svg';
import styles from './Header.style.js';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    const renderMobileMenu = (
      <SwipeableDrawer
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        anchor="right"
        open={this.state.right}
        onClose={this.toggleDrawer('right', false)}
        onOpen={this.toggleDrawer('right', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('right', false)}
          onKeyDown={this.toggleDrawer('right', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    );

    return (
      <Fragment>
        <AppBar position="absolute" className={classes.appBar}>
          <SectionLayout>
            <Toolbar className={classes.toolBar}>
              <Link to="/"><img src={logo} className={classes.headerLogo} alt="dovhal" /></Link>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button color="inherit" component={Link} to="/services">Services</Button>
                <Button color="inherit" component={Link} to="/works">Works</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/careers">Careers</Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.toggleDrawer('right', true)} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </SectionLayout>
        </AppBar>
        {renderMobileMenu}
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);


