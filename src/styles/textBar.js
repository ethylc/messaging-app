const textBarStyle = theme => ({

    sendBtn: {
      color: 'royalblue',
      cursor: 'pointer',
      '&:hover': {
        color: 'white'
      },
      verticalAlign:'bottom',
      marginBottom:'10px',
      marginLeft:'15px'
    },
  
    textBarContainer: {
      position: 'absolute',
      bottom: '0px',
      left: '300px',
      boxSizing: 'border-box',
      overflow: 'auto',
      minHeight:'60px',
      height:'auto',
      width: 'calc(100% - 301px)',
      backgroundColor:'rgba(255, 255, 255, 0.2)',
      padding:'10px 10px 10px 20px',
    },
  
    textBar: {
      width: 'calc(100% - 80px)',
      color:'white',
      backgroundColor:'rgba(255, 255, 255, 0.8)',
      padding:'5px 10px',
      borderRadius:'20px'
    }
  
  });
  
  export default textBarStyle;