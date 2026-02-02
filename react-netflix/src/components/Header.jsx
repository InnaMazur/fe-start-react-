import React from 'react';

const Header = () => {
    return (
        <>
            <header>
             <div class="header-left">
            {/* <img src="img/netflix-logo-png-2562 1.png" class="logo" alt="logo"> */}
            <span class="date">
                Friday July 8th
            </span>
        </div>
        
            <div class="header-righ">
                <button class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                {/* <img src="img/Ellipse 2 (1).png" class="avatar" alt="avatar"> */}
                
            </div>
        </header>
        
        </>
    
    );
};

export default Header;