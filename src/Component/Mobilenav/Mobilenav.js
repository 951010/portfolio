// Mobilenav.js
import React from 'react';
import "./Mobilenav.css";

const Mobilenav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <h2 className='logo'>Vinay Ramoliya</h2>
        <ul>
          <li>
            <a className='menu-item'>Home</a>
          </li>
          <li>
            <a className='menu-item'>About Me</a>
          </li>
          <li>
            <a className='menu-item'>Skills</a>
          </li>
          <li>
            <a className='menu-item'>Contact ME</a>
          </li>
        </ul>
        
      </div>
    </div>
  );
}

export default Mobilenav;
