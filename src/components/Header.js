import React from 'react';



const Header = () => {
  return ( 
    <div className='navbar'>
        <div className='logo-section'>
            <a>
                <span>Johnny Lu</span>
            </a>
        </div>
        <div className='nav-links'>
            <a>Projects</a>
            <a>Technologies</a>
            <a>About</a>
        </div>
        <div className='nav-icons'>
            <a className='social-icons'>GitHub</a>
            <a className='social-icons'>LinkedIn</a>
        </div>
    </div>
  )
};

export default Header;
