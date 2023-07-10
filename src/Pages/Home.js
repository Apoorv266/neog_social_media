import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SideNavbar from '../Components/SideNavbar'
import { Route, Routes } from 'react-router-dom'
import RightBar from '../Components/RightBar'
import "../Styles/Home.css"
import MiddleBar from '../Components/MiddleBar'
import Explore from './Explore'
import Bookmarks from './Bookmarks'
import Profile from '../Components/Profile/Profile'
import SinglePost from '../Components/SinglePost';
import { ToastContainer } from 'react-toastify'
import { ToastView } from '../Components/ToastComponent/ToastContainer'

const Home = () => {
    const [showFilter, setshowFilter] = useState(true)
    return (
        <>
            <Navbar />
            <div className='home-main'>
                <SideNavbar setshowFilter={setshowFilter}/>
                <Routes>
                    <Route path='/*' element={<MiddleBar />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/bookmarks' element={<Bookmarks />} />
                    <Route path='/profile/:username' element={<Profile />} />
                    <Route path="/post/:postId" element={<SinglePost />} />
                </Routes>
                <RightBar showFilter={showFilter}/>
                <ToastView />
            </div>
        </>
    )
}

export default Home