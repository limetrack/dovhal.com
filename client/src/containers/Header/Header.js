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
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import {
  MoreVert as MoreIcon,
  Work as WorksIcon,
  Mail as ContactIcon,
  People as CareersIcon,
  Grain as ServicesIcon,
  DonutSmall as AboutIcon,
} from '@material-ui/icons';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.svg';
import styles from './Header.style.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
    });
  };

  render() {
    const { classes } = this.props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const menu = (
      <div className={classes.list}>
        <List>
          <ListItem button component={HashLink} to={`/services#top`}>
            <ListItemIcon><ServicesIcon /></ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button component={HashLink} to={`/works#top`}>
            <ListItemIcon><WorksIcon /></ListItemIcon>
            <ListItemText primary="Works" />
          </ListItem>
          <ListItem button component={HashLink} to={`/about#top`}>
            <ListItemIcon><AboutIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={HashLink} to={`/careers#top`}>
            <ListItemIcon><CareersIcon /></ListItemIcon>
            <ListItemText primary="Careers" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={HashLink} to={`#contact`}>
            <ListItemIcon><ContactIcon /></ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItem>
        </List>
      </div>
    );

    const renderMobileMenu = (
      <SwipeableDrawer
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        anchor="right"
        open={this.state.drawer}
        onClose={this.toggleDrawer(false)}
        onOpen={this.toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          {menu}
        </div>
      </SwipeableDrawer>
    );

    return (
      <Fragment>
        <AppBar id="top" position="absolute" className={classes.appBar}>
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


