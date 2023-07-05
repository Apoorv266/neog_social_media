import React from 'react'
import "../../../Styles/Modal.css"
import { useContext } from 'react'
import { userContext } from '../../../Contexts/UserContext'
import { authContext } from '../../../Contexts/AuthContext'
import { Link } from 'react-router-dom'
const ModalList = ({item, isUserFollowed}) => {
    const { followUsers, unFollowFunc } = useContext(userContext)
    const { userData } = useContext(authContext)
  return (
    <div className='followList-Main'>
         <img src={item.avatarUrl} alt="" width={"50px"} height={"50px"} style={{ borderRadius: "50%", backgroundSize: "cover", objectFit: "cover" }} />

         <Link to={`/profile/${item.username}`} style={{ textDecoration: 'none' }}>
        <div className='user-info'>
            <p>{item.firstName} {item.lastName}</p>
            <p>@{item.username}</p>
        </div>
        </Link>
       {userData.username === item.username ? "" : isUserFollowed(item.username) ? <button className='follow-btn' onClick={() => unFollowFunc(item._id)}>Unfollow</button>:  <button className='follow-btn' onClick={() => followUsers(item._id)}>Follow</button>}
    </div>
  )
}

export default ModalList