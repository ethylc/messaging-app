const chatListStyle = theme => ({
    root: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      height: '100%',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px grey'
    },
    listItem: {
      cursor: 'pointer'
    },
    titleHeader:{
      marginTop:'20px'
    },
    unreadMessage: {
      color: '#d82636',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default chatListStyle;