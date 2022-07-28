import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <>
    <p><Link to="sortimentlist" smooth="true">Sortiment</Link></p>
    <p><Link to="contacts" smooth="true">Contacts</Link></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="slide__navbar">
        <NavLink to="/" className="slide__navbar-logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="slide__navbar-links">
          <Menu />
        </div>
        <div className="slide__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="var(--color-menu)" size={27} onClick={ () => setToggleMenu(false)} />
            : <RiMenu3Line color="var(--color-menu)" size={27} onClick={ () => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="slide__navbar-menu_container scale-up-center">
              <p><Link to="sortimentlist" smooth="true" onClick={ () => setToggleMenu(false)}>Sortiment</Link></p>
              <p><Link to="contacts" smooth="true" onClick={ () => setToggleMenu(false)}>Contacts</Link></p>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar