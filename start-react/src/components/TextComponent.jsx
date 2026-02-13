import React from 'react';
import PropTypes from 'prop-types';
TextComponent.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};
TextComponent.defaultProps = {
    title: 'Default Title',
    text: 'Default Text',
};

function TextComponent (props)  {
    return (
        <>
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center"> 
        <h1 className="display-4 fw-normal text-body-emphasis">{props.title}</h1>
         <p className="fs-5 text-muted">{props.text}</p>
        </div>
          
        </>

    );
};

export default TextComponent;