import React from 'react';
import './SideDrawer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

function SideDrawer() {
    return (
        <div>
            <div className="side-drawer open">
                <a href="#"><FontAwesomeIcon icon={faInbox} /> Inbox</a>
                <a href="#"><FontAwesomeIcon icon={faCalendar} /> Today</a>
                <a href="#"><FontAwesomeIcon icon={faCalendarDays} /> Upcoming</a> 
            </div>
        </div>
    );
}

export default SideDrawer;
