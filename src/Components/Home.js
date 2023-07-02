import React from 'react'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'
import { Route, Routes } from 'react-router-dom'
import RightBar from './RightBar'
import "../Styles/Home.css"
import MiddleBar from './MiddleBar'
import Explore from './Explore'
import Bookmarks from './Bookmarks'
import Profile from './Profile/Profile'
import SinglePost from './SinglePost';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home-main'>
                <SideNavbar />
                <Routes>
                    <Route path='/*' element={<MiddleBar />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/bookmarks' element={<Bookmarks />} />
                    <Route path='/profile/:username' element={<Profile />} />
                    <Route path="/post/:postId" element={<SinglePost />} />
                </Routes>
                <RightBar />
            </div>
        </>
    )
}

export default Home