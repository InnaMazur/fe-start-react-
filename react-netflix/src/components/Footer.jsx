import React from 'react';

const Footer = () => {
    const  age= {
        position: 'fixed',
        bottom: '103px',
        right:'0',
        backgroundColor: 'gray',
        borderLeft: '33px solid red',
   
        paddingTop:'15px',
        paddingLeft:'26px',
        color: 'white',
        fontSize:'24px',
        fontWeight: '500',
        width: '174px',
        height: '66px',
        textAlign:'left',
        // alignItems:'center',
    }
    return (
        <footer>
   <div style={age}>
        16+
    </div>
        </footer>
     
    );
};

export default Footer;