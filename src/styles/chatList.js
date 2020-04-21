const chatListStyle = theme => ({
    root: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      height: '100%',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px #303030',
      overflowX:'hidden',
      overflowY:'auto',
      [theme.breakpoints.down('sm')]: {
        width: '70px',
      },
    },
    listItem: {
      cursor: 'pointer',
    },
    titleHeader:{
      marginTop:'20px'
    },
    unreadMessage: {
      color: '#d82636',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    itemText:{
      whiteSpace: 'nowrap',
      maxHeight: '45px',
      overflow: 'hidden',
    },
    text:{
      textOverflow: 'ellipsis'
    }
  });
  
  export default chatListStyle;