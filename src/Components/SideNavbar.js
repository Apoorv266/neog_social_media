import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext'
import "../Styles/SideNavbar.css"


const SideNavbar = ({ setshowFilter }) => {
    const { handleLogout, userData } = useContext(authContext)
    let navigate = useNavigate();

    const routeFunc = (url, value) => {
        navigate(`${url}`)
        setshowFilter(value)
        window.scroll(0, 0);
    }
    return (
        <div className='sideNav-main'>
            <p onClick={() => routeFunc("/", true)} className="nav-link">Home</p>
            <p onClick={() => routeFunc("/explore", true)} className="nav-link">Explore</p>
            <p onClick={() => routeFunc("/bookmarks", false)} className="nav-link">Bookmark</p>
            <p onClick={() => routeFunc(`/profile/${userData.username}`, false)} className="nav-link">Profile</p>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default SideNavbar