import React from 'react';
import style from './Buttons.module.css';
import buttonarrow from '../assets/buttonarrow.png';
function Buttons(props){

    const episodes={
width: '271px',
height:' 64px',
color:' rgb(255, 255, 255)',
fontFamily: 'Inter',
fontSize: '22px',
fontWeight:' 500',
lineHeight: '141.52%',
letterSpacing: '0%',
marginLeft: '90px',
background: 'transparent',
boxSizing:' border-box',
border: '3px solid rgb(255, 255, 255)',
borderRadius: '10px',
    }
    const callAlert=()=>{
        alert('Chose any episode');
    }
    
    return (
        <div className="buttons" style={{display: 'flex', marginBottom:'45px'}}>
        <button className={style.stream}>
            STREAM NOW
           <img src={buttonarrow}alt="arrow" />
        </button>
        <button onClick={callAlert} style={episodes}>
            ALL EPISODES
        </button>
    </div>
    );
};

export default Buttons;