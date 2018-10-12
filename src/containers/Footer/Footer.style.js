export default (theme) => ({
  footer: {
    marginTop: theme.spacing.unit * 8,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    padding: `${theme.spacing.unit * 6}px 0`,
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 1236,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})
