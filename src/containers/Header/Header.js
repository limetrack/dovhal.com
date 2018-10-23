import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { SectionLayout } from 'containers';
import { 
  Menu,
  AppBar, 
  Button,
  Toolbar, 
  MenuItem, 
  IconButton,
} from '@material-ui/core';

import {
  MoreVert as MoreIcon,
} from '@material-ui/icons';

import logo from './logo.svg';
import styles from './Header.style.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMoreAnchorEl: null,
    };
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Link to="/services">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/works">Works</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Link to="/careers">Careers</Link>
        </MenuItem>
      </Menu>
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
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
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


