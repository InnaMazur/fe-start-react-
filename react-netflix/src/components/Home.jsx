import React from 'react';
import Header from './Header.jsx';
import Genre from './Genre.jsx';
import Description from './Description.jsx';
import Rating from './Rating.jsx';
import Buttons from './Buttons.jsx';
import Sliders from './Sliders.jsx';
import Footer from './Footer.jsx';
// import '../App.css';

function Home() {
 
    return (
        <>
        <div className='home-page'>

       
        <Header></Header>
        <div className="small-wrapper">
    <Genre></Genre>
    <Description></Description>
    <Rating></Rating>
    <Buttons></Buttons>
    <Sliders></Sliders>
     </div>
 
     <Footer></Footer>
     </div>
     </>
    );
}

export default Home;