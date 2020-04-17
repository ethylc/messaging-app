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
      height: 'calc(100% - 120px)',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      top: '60px',
      width: 'calc(100% - 300px)',
      position: 'absolute',
      backgroundColor:'rgba(255, 255, 255, 0.2)'
    },
    contentNoChat: {
      height: '100%',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      width: 'calc(100% - 300px)',
      position: 'absolute',
      color:'white',
      backgroundColor:'rgba(255, 255, 255, 0.2)'
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: 'rgba(255, 255, 255, 0.5)',
      color: 'black',
      width: 'auto',
      maxWidth:'500px',
      borderRadius: '10px'
    },
  
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      width: 'auto',
      maxWidth:'500px',
      borderRadius: '10px'
    },
  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '60px',
      backgroundColor: 'rgba(255,255,255,0.3)',
      position: 'fixed',
      marginLeft: '300px',
      fontSize: '18px',
      textAlign: 'left',
      color: 'white',
      padding: '15px',
      boxSizing: 'border-box',
      boxShadow: '0 2px 2px -2px #303030',
      zIndex:'9',
      display:'flex',
      cursor:'default'
    },
    icon:{
      marginTop:'-6px',
      marginRight:'10px'
    }
  
  });
  
  export default chatBoxStyle;