import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import logo from '../../logo-ironhack-blue.png';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            {' '}
            <img src={logo} alt='ironhack logo'></img>
          </div>

          <p className='navbar-item'>Projects!</p>

          <a
            role='button'
            className='navbar-burger'
            ariaLabel='menu'
            ariaExpanded='false'
            dataTarget='navbarBasic'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div className='navbar-menu' id='navbarBasic'>
          <div className='navbar-start'>
            <a className='navbar-item'>Projects</a>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
