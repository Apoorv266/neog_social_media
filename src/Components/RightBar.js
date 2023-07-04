import React from 'react'
import "../Styles/Rightbar.css"
import SuggUserCard from './SuggUserCard'
import { useContext } from 'react'
import { userContext } from '../Contexts/UserContext'
import { authContext } from '../Contexts/AuthContext'
import { postContext } from '../Contexts/PostContext'

const RightBar = ({showFilter}) => {
  const {  setuserSearchField, userSearchField, filterUserFunc } = useContext(userContext);
  const { authLoader, userData, followUserList } = useContext(authContext);
  const { postDispatch, postState } = useContext(postContext)

  const { filterBytrending, filterByDate } = postState

  const suggUserList = filterUserFunc()?.filter((item) => item.username !== userData?.username && !followUserList?.includes(item.username))
  return (
    <div className='rightbar-main'>
      <input type="text" name="" id="search-input" placeholder='search for users !' value={userSearchField} onChange={(e)=>setuserSearchField(e.target.value)}/>

       {showFilter && <div className='filter-btn-container'>


          <button style={{ backgroundColor: filterBytrending ? "#00937E" : `var(--utils-color)` }} onClick={() => postDispatch({ type: "TOGGLE_FILTER_TRENDING" })} className='filter-btn' >Trending</button >


          <button style={{ backgroundColor: filterByDate ? "#00937E" : `var(--utils-color)` }} onClick={() => postDispatch({ type: "TOGGLE_FILTER_DATE" })} className='filter-btn'>Latest</button>
        </div>}
    
      {authLoader ? <div className="loader-img-main">
        <img src={require("../Images/loader2.gif")} alt="" srcset="" width={"50px"} />
      </div> : suggUserList.length > 0 && <div className='sug-users-main'>
        <h3>Suggested Users</h3>
        {suggUserList.map((item) => {
          return <SuggUserCard item={item} key={item._id} />
        })}
      </div>}
    </div>
  )
}

export default RightBar