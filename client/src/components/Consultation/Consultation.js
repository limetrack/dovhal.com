import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, Avatar, TextField, MenuItem, Button } from '@material-ui/core';
import { HearingOutlined, WhereToVoteOutlined, BeachAccessOutlined } from '@material-ui/icons';
import { SectionLayout } from 'containers';
import styles from './Consultation.style.js';

const things = [
  {
    title: 'We hear you',
    description: 'We listen to you carefully, because the client is always right',
    icon: HearingOutlined,
  },
  {
    title: 'We are here for you',
    description: 'We are always ready to help. As soon as we need you, we are right there at the distance of one message',
    icon: WhereToVoteOutlined,
  },
  {
    title: 'We cherish all interaction',
    description: 'Every appeals are carefully considered, analyzed and get a decent response',
    icon: BeachAccessOutlined,
  },
]

const messengers = [ 
  'Email',
  'Telegram',
  'Viber',
  'WhatsApp',
];

class Consultation extends Component {
  state = {
    name: '',
    company: '',
    messenger: 'Email',
    contact: '',
    text: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = (email = "adovgal@gmail.com", userName = "Anakin Skywalker") => {
    return fetch("/api/send_email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email: "adovgal@gmail.com", 
        userName: "Anakin Skywalker",
      }),
    }).then(response => response.json());
  }
  

  render() {
    const { classes } = this.props;

    return (
      <section id="contact" className={classes.consultation}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" direction="row" className={classes.main}>
            <Grid item xs={12} md={6} className={classes.contactForm}>
              <form noValidate autoComplete="off">
                <Grid container spacing={8}>
                  <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                      Get in Touch
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-name"
                      label="Name"
                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-company"
                      label="Company"
                      className={classes.textField}
                      value={this.state.company}
                      onChange={this.handleChange('company')}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-select-messenger"
                      select
                      label="Preferred means of communication"
                      className={classes.textField}
                      value={this.state.messenger}
                      onChange={this.handleChange('messenger')}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    >
                      {messengers.map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-contact-input"
                      label={this.state.messenger}
                      className={classes.textField}
                      value={this.state.contact}
                      onChange={this.handleChange('contact')}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-multiline-text"
                      label="How can we help"
                      multiline
                      rows="4"
                      rowsMax="4"
                      value={this.state.text}
                      onChange={this.handleChange('text')}
                      className={classes.textField}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.button}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      onClick={this.sendEmail}
                    >
                      Send request
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={6} className={classes.friends}>
              <Typography variant="h4" gutterBottom className={classes.text}>
                Our customers are our friends
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom className={classNames(classes.text, classes.description)}>
                We always try to build our relationships on friendship and trust, hence comes a deep understanding of 
                desires and successful achievement of goals
              </Typography>
              <List>
                {things.map(thing => {
                  const Icon = thing.icon;

                  return (
                    <ListItem key={thing.title} className={classes.listItem}>
                      <Avatar className={classes.avatar}>
                        <Icon fontSize="large" />
                      </Avatar>
                      <ListItemText disableTypography>     
                        <Typography variant="h6" className={classes.text}>
                          {thing.title}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>
                          {thing.description}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
          </Grid>
        </SectionLayout>
      </section>
    );
  }
}

Consultation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Consultation);
