import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { SectionLayout } from 'containers';
import { Hero } from 'components';
import styles from './Works.style.js';
import hero from './images/hero.jpg';

// const advantages = [
//   'up to date technologies',
//   'high quality and balanced cost',
//   'individual approach',
//   'warranty and support',
// ]

class Works extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Hero backgroundImage={hero} title="Our works" />
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} justify="center">
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Our mission
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom className={classes.description}>
                    We believe in building software that improves lives and makes us a little happier
                  </Typography>
                </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12} md={3}>
                <Paper className={classNames(classes.paper, classes.vi)} elevation={1}>
                  <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                    <Grid item xs={12} className={classes.companyItem}>
                      <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                        video intelligence
                      </Typography>
                      <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                        www.vi.ai
                      </Typography>
                      <Button color="inherit" target="_blank" href="https://www.vi.ai" className={classes.button}>
                        Visit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={32} alignItems="center" justify="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      We connect publishers, content providers and brands through video storytelling
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Context is everything
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Our tools use contextual matching to create compelling video experiences. vi offers a full suite 
                      of self-serve tools: a video syndication engine powered by machine learning, a video ad server and an SSP.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classNames(classes.works, classes.darkBackground)}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={32} alignItems="center" justify="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      The electronic trading platform NEWTEND is a high quality and prompt service for participation in 
                      the pre-threshold and above-threshold government tenders. NEWTEND participated in the development 
                      of the ProZorro system and has all four accreditation levels.
                      We open new marketing outlets for the suppliers and provide them with open and equal access to the 
                      government orders. We provide the participants with Concierge service and Legal support services at 
                      all stages of bidding. We provide with a prompt mailout of current procurements and inform about the 
                      status of the tender participant. It is possible to participate in public property biddings at the 
                      NEWTEND platform.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classNames(classes.paper, classes.newtend)} elevation={1}>
                  <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                    <Grid item xs={12} className={classes.companyItem}>
                      <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                        NEWTEND
                      </Typography>
                      <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                        www.newtend.com
                      </Typography>
                      <Button color="inherit" target="_blank" href="https://www.newtend.com" className={classes.button}>
                        Visit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
        <section className={classes.works}>
          <SectionLayout>
            <Grid container spacing={32} alignItems="center" justify="center" className={classes.main}>
              <Grid item xs={12} md={3}>
                <Paper className={classNames(classes.paper, classes.tesla)} elevation={1}>
                  <Grid container direction="row" spacing={32} justify="center" alignItems="center" className={classes.companyGrid}>
                    <Grid item xs={12} className={classes.companyItem}>
                      <Typography variant="h5" align="center" gutterBottom className={classes.itemText}>
                        TeslaEnergo
                      </Typography>
                      <Typography variant="subtitle2" align="center" gutterBottom className={classes.itemText}>
                        www.teslaenergo.com
                      </Typography>
                      <Button color="inherit" target="_blank" href="https://www.teslaenergo.com" className={classes.button}>
                        Visit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={32} alignItems="center" justify="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Компания энергетических решений для домов №1 на рынке Украины
                      Teslaenergo — требовательный профессионал на рынке энергетики Украины, делающий ставку на инновации будущего и 
                      качество премиум класса.
                      Мы отслеживаем самые перспективные технологические решения Европы для создания умного энергоэффективного дома и 
                      первыми выводим их на рынок Украины.
                      Мы предлагаем бизнес-сотрудничество тем, кто готов инвестировать в будущее экологичной энергетики.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </SectionLayout>
        </section>
      </Fragment>
    );
  }
}

Works.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Works);
