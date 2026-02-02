import React from 'react';

const Buttons = () => {
    return (
        <div className="buttons">
        <button className="stream">
            STREAM NOW
            <i className="fa-solid fa-circle-play"></i> 
        </button>
        <button className="episodes">
            ALL EPISODES
        </button>
    </div>
    );
};

export default Buttons;