import React, { useState } from 'react';
import './SideDrawer.css'; // Make sure to create a corresponding CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faInbox, faBars } from '@fortawesome/free-solid-svg-icons';


function SideDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleDrawer} className="hamburger-icon">
                <FontAwesomeIcon icon={faBars}  />
            </button>
            <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
                <a href="#"><FontAwesomeIcon icon={faInbox} /> Inbox</a>
                <a href="#"><FontAwesomeIcon icon={faCalendar} /> Today</a>
                <a href="#"><FontAwesomeIcon icon={faCalendarDays} /> Upcoming</a> 
            </div>
            {isOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
        </div>
    );
}

export default SideDrawer;