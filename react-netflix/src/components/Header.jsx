import React  from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import search from '../assets/search.svg';
import NetflixComponent from './NetflixComponent.jsx';
import TrueFalse from './TrueFalse.jsx';
import {useState, useEffect} from 'react';
const Header = () => {
    let textValue='About page';
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
  
    const [show,setShow]=useState(false)
    const [text,setText]= useState('')
        function changeShowState(){
        setShow (!show)
        if(show) setText('')
        }

        useEffect(()=>{
            show? console.log('Input is opened'): console.log('Input is closed');
        },[show]);
    return (
        <>
            <header >
                <div className="headerContainer" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'42px 33px 118px 40px'}}>
                <div style={headerLeft}>
            <img  src={logo}  alt="logo"  width="156" height="48"  />
            <span style={date}>
                Friday July 8th
            </span>
            
{/*        
          <span style={date}>
          <NetflixComponent text='Hello date'></NetflixComponent>
          </span> */}
     
     {/* <span style={date}>
          <NetflixComponent text={textValue}></NetflixComponent>
          </span> */}
          
        </div>
        
            <div className="headerRigh" style={{display:'flex', alignItems:'center',gap:'8px'}}>
                <button className="search" style={{background:'transparent', border:'none',  paddingRight:'48px', fontSize:'35px', color:'white' }}>
                   
                   <img src={search} alt="search" onClick={changeShowState} />
               </button>
       
             {show && (
               <div style={{display:'flex',position:'relative'}}>

                   <input
                   type="text"
                   value ={text}
                   onChange={(e)=> setText(e.target.value)}
                   placeholder='Search...'
                   style={{width:'150px',fontSize:'14px',padding:'4px 8px', position:'absolute',left:'-250px'}}
                   />
               
               {show && text.length >= 3 && 'Stranger thing'. toLowerCase().includes(text.toLowerCase()) && (
                <div style={{backgroundColor:'white', color:'black',  position:'absolute', left:'-500px'}}>
                    Stranger thing
                    </div>
                )}
               {/* <img src={avatar} alt="avatar"  width="74" height="74"  /> */}
               {/* <TrueFalse></TrueFalse> */}

               </div>
    )}
                
                <TrueFalse isLogin={true}></TrueFalse>
                </div>
         
                </div>
     
        </header>
        
        </>
    
    );
};

export default Header;