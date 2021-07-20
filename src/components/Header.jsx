import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss'

function Header() {
    return (
        <header className="Header__container">
            <div className="Header__title-container">
                <h1 className="Header__title-1">Game</h1>
                <h1 className="Header__title-2">Tube&nbsp;</h1>
                <i className="Header__title-icon fas fa-video"></i>
            </div>
            <div className="Header__menu">
                <div className="Header__profile-container">
                    <i className="Header__menu-icon far fa-user"></i>
                    <h2>&nbsp;Profile</h2>
                </div>
                <ul>
                    <Link to="/">
                        <li>Account</li>
                    </Link>
                    <Link to="/">
                        <li>Logout</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;