const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  headerLogo: {
    height: '80px',
  },
  headerHeader: {
    // backgroundColor: theme.palette.primary.dark,//'hsl(193, 100%, 14%)', //#1769aa
    height: '400px',
    padding: '90px',
    color: 'white',
  },
  headerTitle: {
    // color: 'white',
    margin: '20px',
  },
  headerSubTitle: {
    fontSize: '1.5em',
    fontWeight: 'normal',
  },
  headerIntro: {
    fontSize: 'large',
  },
  headerButton: {
    margin: '20px'
  },
  headerButtonSecondary: {
    margin: '20px',
    // color: 'white',
    // border: 'solid 1px white'
  },
  appBar: {
    position: 'relative',
    backgroundColor: '#555',//theme.palette.primary.dark,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
})

export default styles