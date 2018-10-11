import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
          <p>Services</p>
        </MenuItem>
        <MenuItem>
          <p>Works</p>
        </MenuItem>
        <MenuItem>
          <p>About</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <p>Careers</p>
        </MenuItem>
      </Menu>
    );

    return (
      <Fragment>
        <AppBar position="sticky">
          <SectionLayout>
            <Toolbar>
              <img src={logo} className={classes.headerLogo} alt="dovhal" />
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button color="inherit">Services</Button>
                <Button color="inherit">Works</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Careers</Button>
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


