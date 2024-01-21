import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import React from 'react';
import PomodoroTimer from './PomodoroTimer';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <PomodoroTimer />
            </ul>
        </nav>
    );
}

export default Navbar;
