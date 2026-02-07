import React from 'react';
import PropTypes from 'prop-types';
import starFild from '../assets/starFild.png';
import starLine from '../assets/starLine.png';

TrueStars.propTypes = {
    stars: PropTypes.number.isRequired
};

function TrueStars({stars}) {
    const totalStars = 5;
    return (
        <div>
            {Array.from({length: totalStars}, (_, index)=>(
                // <span key={index}>
                //     {index< stars?'<img src={starFild} alt="starFild"/>' :' <img src={starLine} alt="starLine"/>'}
                // </span>
                <img 
                key={index}
                src={index < stars ? starFild : starLine} 
                alt="start"
                />
            ))};
        </div>
    );
}

export default TrueStars;