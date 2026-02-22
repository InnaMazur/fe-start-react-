import React from 'react';
import TrueStars from './TrueStars';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Rating = () => {


    return (
       <>
       <div className="star" style={{display: 'flex', alignItems: 'center', marginBottom:'40px'}}>
    <div className="filledStar" style={{marginRight:'17px'}}>
     
        <TrueStars stars={3}></TrueStars>
         
    </div>


</div>
</>
    );
};

export default Rating;