import React from 'react'
import "../Styles/Loader.css"

const Loader = () => {
  return (
    <div className='loader-wrapper'>
        <img src={require("../Images/loader.gif")} alt="" srcSet="" />
    </div>
  )
}

export default Loader