import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faBars} className="hamburger-icon" onClick={handleMenuToggle} style={{ cursor: 'pointer', fontSize: '24px' }} />

      <Menu right isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
        <ul className="menu-list">
        <FontAwesomeIcon icon={faX} className='menu-close'/>
          <li>
            <a href="#apropos">À propos</a>
          </li>
          {/* <li>
            <a href="#experiences">Experiences</a>
          </li> */}
          <li>
            <a href="#competences">Compétences</a>
          </li>
          <li>
            <a href="#projets">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Menu>
    </div>
  );
}
