import React from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import search from '../assets/search.svg';
const Header = () => {
    const headerLeft = {
        display: 'flex',
        alignItems:'center', 
    }
    const date = {
        color: ' rgb(200, 200, 200)',
        marginLeft: '48px',
        fontSize: '24px',
        display:'inline-block',
        lineHeight: '29px',
        letterSpacing: '0%',
        paddingLeft: '34px',
        borderLeft: '2px solid grey',
        bottom: '18px',
        fontFamily: 'Big Shoulders Stencil, sans-serif',
        fontWeight: '400',
        fontStyle: 'normal',
    }
 



    return (
        <>
            <header >
                <div className="headerContainer" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'42px 33px 118px 40px'}}>
                <div style={headerLeft}>
            <img  src={logo}  alt="logo"  width="156" height="48"  />
            <span style={date}>
                Friday July 8th
            </span>
        </div>
        
            <div className="headerRigh">
                <button className="search" style={{background:'transparent', border:'none', paddingRight:'48px', position:'relative', top:'-22px', fontSize:'35px', color:'white' }}>
                   
                    <img src={search} alt="search" />
                </button>
                <img src={avatar} alt="avatar"  width="74" height="74"  />
                
            </div>
                </div>
     
        </header>
        
        </>
    
    );
};

export default Header;