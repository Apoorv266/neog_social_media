import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext'
import "../Styles/SideNavbar.css"

const SideNavbar = () => {
    const { handleLogout } = useContext(authContext)
    return (
        <div className='sideNav-main'>
            <NavLink className="nav-link"><p>Home</p></NavLink>
            <NavLink className="nav-link"><p>Explore</p></NavLink>
            <NavLink className="nav-link"><p>Bookmark</p></NavLink>
            <NavLink className="nav-link"><p>Profile</p></NavLink>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default SideNavbar