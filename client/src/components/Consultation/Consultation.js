import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, Avatar, TextField, MenuItem, Button, Grow } from '@material-ui/core';
import { HearingOutlined, WhereToVoteOutlined, BeachAccessOutlined } from '@material-ui/icons';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
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
  'Viber',
  'Telegram',
  'WhatsApp',
];

const initialState = {
  name: '',
  company: '',
  messenger: 'Email',
  contact: '',
  text: '',
  showForm: true,
}

class Consultation extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }
  
  componentDidMount() {
    const contactGridHeight = document.getElementById('contact-grid').clientHeight;
    this.setState({ contactGridHeight });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    return fetch("/api/send_request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        name: this.state.name, 
        company: this.state.company,
        messenger: this.state.messenger,
        contact: this.state.contact,
        text: this.state.text,
      }),
    }).then(response => {
      // response.json();
      this.setState({ showForm: false });
      setTimeout(() => this.setState(initialState), 4000);
    });
  };

  render() {
    const { classes } = this.props;
    const { showForm, contactGridHeight } = this.state;

    return (
      <section id="contact" className={classes.consultation}>
        <SectionLayout>
          <Grid container spacing={32} justify="center" direction="row" className={classes.main}>
            <Grid id="contact-grid" item xs={12} md={6} className={classes.contactForm} style={{ minHeight: contactGridHeight }}>
              <Grow
                in={showForm}
                style={!showForm ? { display: 'none' } : {}}
                {...(showForm ? { timeout: 1000 } : {})}
              >
                <ValidatorForm
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}
                >
                  <Grid container spacing={8}>
                    <Grid item xs={12}>
                      <Typography variant="h4" gutterBottom>
                        Get in Touch
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextValidator
                        id="outlined-name"
                        name="name"
                        label="Name"
                        value={this.state.name}
                        className={classes.textField}
                        onChange={this.handleChange('name')}
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        validators={['required']}
                        errorMessages={['']}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="outlined-company"
                        label="Company"
                        value={this.state.company}
                        className={classes.textField}
                        onChange={this.handleChange('company')}
                        fullWidth
                        margin="dense"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="outlined-select-messenger"
                        select
                        label="Preferred means of communication"
                        value={this.state.messenger}
                        className={classes.textField}
                        onChange={this.handleChange('messenger')}
                        fullWidth
                        margin="dense"
                        variant="outlined"
                      >
                        {messengers.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextValidator
                        id="outlined-contact-input"
                        name="contact"
                        label={this.state.messenger}
                        value={this.state.contact}
                        className={classes.textField}
                        onChange={this.handleChange('contact')}
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        validators={['required']}
                        errorMessages={['']}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextValidator
                        id="outlined-multiline-text"
                        name="text"
                        label="How can we help"
                        multiline
                        rows="4"
                        rowsMax="4"
                        value={this.state.text}
                        className={classes.textField}
                        onChange={this.handleChange('text')}
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        validators={['required']}
                        errorMessages={['']}
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.button}>
                      <Button 
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                      >
                        Send request
                      </Button>
                    </Grid>
                  </Grid>
                </ValidatorForm>
              </Grow>
              <Grow
                in={!showForm}
                style={showForm ? { display: 'none' } : {}}
                {...(!showForm ? { timeout: 1000 } : {})}
              >
                <Grid container spacing={32} direction="column" alignItems="center" justify="center" className={classes.thanks}>
                  <Grid item>
                    <Typography variant="h6" align="center" gutterBottom>
                      Thank you
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                      Our team will be in touch soon!
                    </Typography>
                  </Grid>
                </Grid>
              </Grow>
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
