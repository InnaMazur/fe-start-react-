import React from 'react';
import NetflixComponent from './NetflixComponent.jsx';

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
    {/* <div style={age}>
        <NetflixComponent ages='18+'></NetflixComponent>
    </div> */}
 
        </footer>
     
    );
};

export default Footer;