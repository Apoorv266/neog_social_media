import React, { useContext } from 'react'
import { postContext } from '../../../Contexts/PostContext'

const EditPostModal = () => {
    const {seteditpostModal} = useContext(postContext)
  return (
    <div id="myModal" className="modal">

    <div className="modal-content">
      <span className="close" onClick={()=>seteditpostModal(false)}>X</span>
      <p>Some text in the Modal..</p>
    </div>
  
  </div>
  )
}

export default EditPostModal