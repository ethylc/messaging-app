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

    imageBtn:{
      color: 'royalblue',
      cursor: 'pointer',
      '&:hover': {
        color: 'white'
      },
      verticalAlign:'bottom',
      marginBottom:'10px',
      marginRight:'15px'
    },

    hide: {
      opacity: '0',
      position: 'absolute',
      zIndex: '-1',
      left: '10px',
      width: '30px',
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
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 70px)',
        left: '70px',
      },
    },
  
    textBar: {
      width: 'calc(100% - 150px)',
      color:'white',
      backgroundColor:'rgba(255, 255, 255, 0.8)',
      padding:'5px 10px',
      borderRadius:'20px'
    },
    'input': {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        whiteSpace: 'nowrap !important',
        overflow:'hidden !important'
      }
    }
  
  });
  
  export default textBarStyle;