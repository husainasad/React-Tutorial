import React from 'react';
import './index.css';
import logo from './logo.svg'

function HeaderComponent(){
  return (
      <header>
          <nav className="nav-bar">
              <img className= "nav-logo" src={logo} alt="react logo"></img>
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

export default HeaderComponent