import React from 'react';

const Header = ({handleToggledarkMode}) => {
        return(
        <div className='header'>
            <h1>Notes</h1>
            <button 
                onClick={() => handleToggledarkMode((prevDarkMode) => !prevDarkMode)}
                className='save'>Toggle mode</button>
        </div>
        );
};

export default Header;