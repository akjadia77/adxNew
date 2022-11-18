import React from 'react';
import ADXlogo from '../ADXlogo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar-cpomonent'>
            <div className="navbar-logo">
                <img className='logo' src={ADXlogo} alt='logo'/>
            </div>
            <div className="navbar-items">
                <a className="nevbar-item" href='/#'>
                    Home
                </a>
                <a className="nevbar-item" href='#packages'>
                    Our Services
                </a>
                <a className="nevbar-item" href='#aboutus'>
                    About Us
                </a>
                <a className="nevbar-item" href='#contactus'>
                    Contact Us
                </a>
            </div>
        </div>
    )
}

export default Navbar