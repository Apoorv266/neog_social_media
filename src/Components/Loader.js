import React from 'react'
import "../Styles/Loader.css"
import { ToastView } from './ToastComponent/ToastContainer'

const Loader = () => {
  return (
    <div className='loader-wrapper'>
        <img src={require("../Images/loader.gif")} alt="" srcSet="" />
        <ToastView />
    </div>
  )
}

export default Loader