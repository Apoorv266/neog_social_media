import React from 'react'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'
import { Route, Routes } from 'react-router-dom'
import RightBar from './RightBar'
import "../Styles/Home.css"
import MiddleBar from './MiddleBar'
import Explore from './Explore'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home-main'>
                <SideNavbar />
                <Routes>
                    <Route path='/*' element={<MiddleBar />} />
                    <Route path='/explore' element={<Explore />} />
                </Routes>
                <RightBar />
            </div>
        </>
    )
}

export default Home