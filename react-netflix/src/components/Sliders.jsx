import React from 'react';
import movie1 from '../assets/movie1.png';
import movie2 from '../assets/movie2.png';
import movie3 from '../assets/movie3.png';
import movie4 from '../assets/movie4.png';
import movie5 from '../assets/movie5.png';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
const Sliders = () => {
    return (
        <>
        <div className="choose" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'32px', width:'949px'}}>
        <p className="choice" style={{color:'white', fontSize:'22px', fontWeight:'800', lineHeight:'144.52%', letterSpacing:'13.5%',textAlign:'left'}}>
            POPULAR THIS WEEK
        </p>
        <div className="direction" style={{display:'flex', gap:'24px'}}>
            <button className="left" style={{borderRadius:'100%', border:'grey', width:'32px', height:'32px',backgroundColor:'transparent', color:'gray', textAlign:'center',cursor:'pointer'}}>
              <img src={left} alt="left"/>
            </button>
            <button className="right" style={{ borderRadius:'100%',  border:'white',width:'34px', height:'34px',backgroundColor:'transparent', color:'white', textAlign:'center', cursor:'pointer'}}>
            <img src={right} alt="right"/>
            </button>
        </div>
    </div>
    <div className="movies" style={{display:'flex', gap:'50px', marginBottom:'49px', justifyContent:'space-between', width:'151px', height:'210px'}}>
        <img src={movie1} alt="movie1"/>
        <img src={movie2} alt="movie2"/>
        <img src={movie3} alt="movie3"/>
        <img src={movie4} alt="movie4"/>
        <img src={movie5} alt="movie5"/>
    </div>
    </>
    );
};

export default Sliders;