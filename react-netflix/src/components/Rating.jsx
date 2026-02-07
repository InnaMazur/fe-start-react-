import React from 'react';
import starFild from '../assets/starFild.png';
import starLine from '../assets/starLine.png';
import TrueStars from './TrueStars';
const Rating = () => {


    return (
       <>
       <div className="star" style={{display: 'flex', alignItems: 'center', marginBottom:'40px'}}>
    <div className="filledStar" style={{marginRight:'17px'}}>
        {/* <img src={starFild} alt="starFild"/>
        <img src={starFild} alt="starFild"/>
        <img src={starFild} alt="starFild"/> */}
        <TrueStars stars={4}></TrueStars>
         
    </div>
    {/* <div className="lineStar" style={{marginRight:'17px'}} >
        <img src={starLine} alt="starLine"/>
        <img src={starLine} alt="starLine"/>
         
    </div> */}

</div>
</>
    );
};

export default Rating;