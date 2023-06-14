import React from 'react'
import "../Styles/Rightbar.css" 
import SuggUserCard from './SuggUserCard'
const RightBar = () => {
  return (
    <div className='rightbar-main'>
        <input type="text" name="" id="search-input"  placeholder='search for users !'/>
        <div className='sug-users-main'>
            <h3>Suggested Users</h3>
            <SuggUserCard/>
            <SuggUserCard/>
            <SuggUserCard/>
        </div>
    </div>
  )
}

export default RightBar