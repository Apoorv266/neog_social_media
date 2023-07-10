import React from 'react'
import "../../../Styles/AvatarModal.css"
import { avatarData } from '../../../Data/AvatarData'


const AvatarModal = ({ setavatarModal, editInputField , seteditInputField}) => {

    const handleAddavatar = (imgUrl) =>{
        seteditInputField({
            ...editInputField,
            avatarUrl:imgUrl,
          })
        setavatarModal(false)
    }
    return (
        <div id="myModal" className="modal">


            <div className="modal-content">
                <span className="close" onClick={() => setavatarModal(false)}>X</span>
                <h1>Choose avatar : </h1>
                <div className='avatar-main'>
                    {avatarData.map((item) =>{
                        return (
                            <img
                            src={item.url}
                            alt=""
                            srcset=""
                            width={"90px"}
                            height={"90px"}
                            style={{
                                borderRadius: "50%",
                                backgroundSize: "cover",
                                objectFit: "cover",
                            }}
                            key={item.id}
                           onClick={()=>handleAddavatar(item.url)}
                        />
                        )
                    })}
                   
                </div>
            </div>

        </div>
    )
}

export default AvatarModal