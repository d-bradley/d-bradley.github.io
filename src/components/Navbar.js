import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from './images/Logo.PNG';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link 
            to='hero' 
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            lassName='navbar-logo' 
            onClick={closeMobileMenu}>
            <img className='navbar-logo' src={Logo} alt='Dan Bradley' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                to='hero' 
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='portfolio'
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;