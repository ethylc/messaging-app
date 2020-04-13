const loginStyle = theme => ({
    main: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(400 + theme.spacing(6))]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      marginTop: theme.spacing(17),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(),
    },
    submit: {
      marginTop: theme.spacing(3),
      background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color:'white'
    },
    signupHeader: {
      marginTop: theme.spacing(2),
      width: '100%'
    },
    signupLink: {
      width: '100%',
      textDecoration: 'none',
      color: '#FE6B8B',
      fontWeight: 'bolder'
    },
    errorText: {
      color: '#d82636',
      textAlign: 'center',
      marginTop:theme.spacing(2),
      display: 'flex',
      alignItems: 'center'
    }
  });
  
  export default loginStyle;