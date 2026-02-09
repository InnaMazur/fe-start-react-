import React from 'react';
import PropTypes from 'prop-types';

GenreNav.propTypes = {
    navValue:PropTypes.arrayOf(
    PropTypes.shape({
        value:PropTypes.string,
        link:PropTypes.string
    })
),
};
GenreNav.defaultProps = {
    navValue:[],
};

function GenreNav(props) {
    const genreSpan = {
        display: 'inline-block',
        padding:'1px 18px',
        color:'white',
        textDecoration: 'none',

    }
    let linksEl = props.navValue.map((item,index)=>{
        const noBorder = index === 0 ? genreSpan : { ...genreSpan, borderLeft: '3px solid white' };
    return (
        <a key={index} style={noBorder} href={item.link} > {item.value}</a>
    );
});
return <div>{linksEl}</div>;
}

export default GenreNav;