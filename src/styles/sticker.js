const stickerStyle = theme =>({
    main:{
        position:'absolute',
        bottom:'80px',
        left: '340px',
        [theme.breakpoints.down('sm')]: {
            left: '110px',
          },
    },
    card:{
        width: '250px',
        height: '350px',
        padding: '15px',
        zIndex: '99',
        background: 'rgba(67, 70, 75, 0.9)',
        color: 'white',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '10%',
            width: '0',
            height: '0',
            border: '11px solid transparent',
            borderTopColor: 'rgba(67, 70, 75, 0.9)',
            borderBottom: '0',
            marginLeft: '-5.5px',
            marginBottom: '-10.9px',
          },
    },
    searchBar: {
        color: 'white',
        'input': {
            '&::placeholder': {
                color: 'white'
            }
          }
    },
});

export default stickerStyle