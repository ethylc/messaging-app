const chatListStyle = theme => ({
    root: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      height: '100%',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px #303030',
      [theme.breakpoints.down('xs')]: {
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
    },
    note:{
      marginTop:'30%',
      color:'grey'
    },
    emoji:{
      fontSize:'65px',
      [theme.breakpoints.down('xs')]: {
        fontSize:'40px',
      },
    },
    bar: {
      paddingTop:'8px',
      width: '100%',
      position: 'absolute',
      textAlign: 'center'
    },
    list:{
      overflowY:'auto',
      overflowX:'hidden',
      height:'calc(100% - 55px)',
      marginTop:'55px',
      textAlign:'center',
      [theme.breakpoints.down('xs')]: {
        marginTop:'150px',
        height:'calc(100% - 150px)',
      },
    }
  });
  
  export default chatListStyle;