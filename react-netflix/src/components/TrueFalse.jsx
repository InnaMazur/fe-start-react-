import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../assets/avatar.png';

TrueFalse.propTypes = {
      isLogin: PropTypes.bool,
};
TrueFalse.defaultProps = {
    isLogin: false,
}


function TrueFalse(props) {
    if(props.isLogin)
    return (
          <img src={avatar} alt="avatar"  width="74" height="74"  />
    );
    
    else{
        return(
       
         <button className='btn btn-secondary'>
            Login
         </button>
        )
    }

}

export default TrueFalse;