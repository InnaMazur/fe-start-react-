import React from 'react';
import PropTypes, { number } from 'prop-types';

NetflixComponent.propTypes = { 
    text: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    name: PropTypes.string,
    season: PropTypes.string,
    description: PropTypes.string,
    ages: PropTypes.string,
      genreValue:PropTypes.arrayOf(
        PropTypes.shape({
            value:PropTypes.string,
            link:PropTypes.string
        })
    )
};
NetflixComponent.defaultProps = {
    text: 'Default Text',
    title: 'Default Title',
    year: 'Default Year',
    name: 'Default Name',
    season: 'Default Episodes',
    description: 'Default Description',
    ages: 'Default Age',
    genreValue:[],
};
function NetflixComponent(props) {
    return (
        <>
             <span >
            {props.text}
    </span>
    <h1>
        {props.title}
    </h1>
    <div>
        {props.year}
    </div>
    <span>
        {props.name}
    </span>
    <span>
        {props.season}
    </span>
    <p>
        {props.description}
    </p>

    <div>
        {props.ages}
    </div>
        </>

    );
}


export default NetflixComponent;