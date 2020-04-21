const newChatStyle = theme => ({
    main: {

    },
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '60px',
      backgroundColor: 'rgba(255,255,255,0.3)',
      position: 'fixed',
      left: '300px',
      fontSize: '18px',
      textAlign: 'left',
      color: 'white',
      padding: '15px',
      boxSizing: 'border-box',
      boxShadow: '0 2px 2px -2px #303030',
      zIndex:'9',
      display:'flex',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 70px)',
        left: '70px',
      },
    },
  
    textBar: {
      width: 'calc(100% - 80px)',
      color:'white',
      backgroundColor:'rgba(255, 255, 255, 0.8)',
      padding:'0px 10px',
      borderRadius:'20px'
    },
    errorText: {
      color: 'red',
      textAlign: 'center'
    }
  });
  
  export default newChatStyle;