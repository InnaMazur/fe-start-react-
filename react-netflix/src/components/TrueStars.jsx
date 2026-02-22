import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons";

TrueStars.propTypes = {
    stars: PropTypes.number.isRequired
};

function TrueStars({stars}) {
    const totalStars = 5;
    return (
        <div>
            {Array.from({length: totalStars}, (_, index)=>(
            
                <FontAwesomeIcon key={index}
                icon={index < stars ? solidStar : regularStar}
                 style={{color: index<stars? 'yellow':'grey'}} />
        
            ))};
            
        </div>
    );
}

export default TrueStars;