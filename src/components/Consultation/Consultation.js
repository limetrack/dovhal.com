import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, Avatar, TextField, MenuItem } from '@material-ui/core';
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
    currency: 'EUR',
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
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                The more information we know, the better we’ll be prepared and able to help. Our team will be in touch soon!
              </Typography>
              <form className={classes.container} noValidate autoComplete="off">
              <Grid container spacing={8}>
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
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
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
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="How can we help"
                    multiline
                    rows="5"
                    rowsMax="5"
                    value={this.state.multiline}
                    onChange={this.handleChange('multiline')}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom className={classes.text}>
                Our customers are our friends
              </Typography>
              <List>
                {things.map(thing => {
                  const Icon = thing.icon;

                  return <ListItem key={thing.title}>
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
