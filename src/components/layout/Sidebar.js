import React from 'react'
import { FaChevronDown,FaInbix,FaRegCalendar } from 'react-icons/fa'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li>Inbox</li>
                <li>Today</li>
                <li>Next 7 days</li>
            </ul>
        </div>
    )
}

export default Sidebar
