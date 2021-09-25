import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to <span className='header-color'>Hogwarts Museum</span> - 2021</h1>
            <h3>We're highlighting Harry Potter's biography and sculpture. 
                You can buy the sculptures if you want !!!</h3>
            <h1>Total Cost : 10 Crore</h1>

        </div>
    );
};

export default Header;