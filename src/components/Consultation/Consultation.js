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

const currencies = [
  {
    value: 'email',
    label: 'Email',
  },
  {
    value: 'telegram',
    label: 'Telegram',
  },
  {
    value: 'viber',
    label: 'Viber',
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
  },
];

class Consultation extends Component {
  state = {
    name: '',
    age: '',
    multiline: '',
    currency: 'email',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.consultation}>
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
                      id="outlined-name"
                      label="Company"
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
                      id="outlined-select-currency"
                      select
                      label="Preferred means of communication"
                      className={classes.textField}
                      value={this.state.currency}
                      onChange={this.handleChange('currency')}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-email-input"
                      label={this.state.currency}
                      className={classes.textField}
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="How can we help"
                      multiline
                      rows="4"
                      rowsMax="4"
                      value={this.state.multiline}
                      onChange={this.handleChange('multiline')}
                      className={classes.textField}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.button}>
                    <Button variant="contained" color="primary" fullWidth>Send request</Button>
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

                  return <ListItem key={thing.title} className={classes.listItem}>
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
