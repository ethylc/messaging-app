const chatBoxStyle = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      outline: '1px solid slategrey'
    }
  },
    content: {
      height: 'calc(100% - 124px)',
      overflow: 'auto',
      padding: '25px',
      left: '300px',
      boxSizing: 'border-box',
      top: '63px',
      width: 'calc(100% - 300px)',
      position: 'absolute',
      backgroundColor:'rgba(255, 255, 255, 0.2)',
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 70px)',
        left: '70px',
      },
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '12px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: 'rgba(255, 255, 255, 0.5)',
      color: 'black',
      width: 'auto',
      maxWidth:'500px',
      borderRadius: '15px',
      position:'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '50%',
        width: '0',
        height: '0',
        border: '11px solid transparent',
        borderRightColor: 'rgba(255, 255, 255, 0.5)',
        borderLeft: '0',
        borderTop: '0',
        marginTop: '-5.5px',
        marginLeft: '-10.9px',
      },
      '& img':{
        width:'100%'
      }
    },

    userSent: {
      float: 'right',
      clear: 'both',
      padding: '12px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      width: 'auto',
      maxWidth:'500px',
      borderRadius: '15px',
      position:'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        right: '0',
        top: '50%',
        width: '0',
        height: '0',
        border: '11px solid transparent',
        borderLeftColor: 'rgba(0, 0, 0, 0.5)',
        borderRight: '0',
        borderBottom: '0',
        marginTop: '-5.5px',
        marginRight: '-10.9px',
      },
      '& a':{
        color:'white'
      },
      '& img':{
        width:'100%'
      }
    },
  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '63px',
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
      cursor:'default',
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 70px)',
        left: '70px',
      },
    },
    icon:{
      marginTop:'-4px',
      marginRight:'10px'
    },
  
  });
  
  export default chatBoxStyle;