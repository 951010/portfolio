  // Navbar.js
  import React, { useState } from 'react';
  import "./Navbar.css";
  import Mobilenav from './Mobilenav';

  const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };

    const handleHireMeClick = () => {
      const phoneNumber = '9510105354';
      const whatsappLink = `https://wa.me/${9510105354}`;
      window.open(whatsappLink, '');
    };

    return (
      <div id='navbarrr'>
        <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className='nav-wrapper'>
          <div className='nav-content'>
            <h2 className='logo'>Vinay Ramoliya</h2>
            <ul>
              <li>
                <a className='menu-item' href='#navbarrr'>Home</a>
              </li>
              <li>
                <a className='menu-item' href='#herooo'>About Me</a>
              </li>
              <li>
                <a className='menu-item' href='#skillsss'>Skills</a>
              </li>
              <li>
                <a className='menu-item' href='#contactt'>Contact Me</a>
              </li>
            </ul>
            <button className='contact-btn' onClick={handleHireMeClick}>Hire Me</button>
            <button className='menu-btn' onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  export default Navbar;
