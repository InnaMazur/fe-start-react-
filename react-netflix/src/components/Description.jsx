import React from 'react';

const Description = () => {
    return (
        <>
        <h1>
            Stranger Things
        </h1>
        
        <div className="film-info">
                
            <div className="film-info-item"> 2019 </div>
            <div > DIRECTOR:
                <span>Shawn Levy  </span>
            </div>
            <div className="film-info-item-2">seasons:
                <span>3 (5 Episodes)</span>
            </div>
        </div>
        <p className="description">
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
        </p>
        </>

    );
};

export default Description;