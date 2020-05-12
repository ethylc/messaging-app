const settingsStyle = theme => ({
      contentNoChat: {
        height: '100%',
        overflow: 'auto',
        padding: '25px',
        left: '300px',
        boxSizing: 'border-box',
        width: 'calc(100% - 300px)',
        position: 'absolute',
        color:'white',
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        [theme.breakpoints.down('xs')]: {
          width: 'calc(100% - 70px)',
          left: '70px',
        },
      },
      userIcon:{
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop:'20px',
        margin:'auto',
      },
      profile: {
        textAlign: 'center',
        marginTop: '15%',
      },
      update: {
        marginTop: theme.spacing(3),
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color:'white',
        margin: '10px'
      },
      hide: {
        opacity: '0',
        position: 'absolute',
        zIndex: '-1',
        left: '10px',
        width: '30px',
      },
    
    });
    
    export default settingsStyle;