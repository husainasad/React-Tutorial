import React from 'react';
import '../index.css'
import logo from '../logo.svg';

export default function Navbar(){
    return(
        <div className="Nav">
            <div className="NavLeft">
                <img src={logo} alt="React-logo"></img>
                <span>ReactFacts</span>
            </div>
            <div className="NavRight">
                React Project Info Site
            </div>
        </div>
    )
}