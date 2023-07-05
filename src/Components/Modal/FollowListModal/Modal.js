import React from 'react'
import "../../../Styles/Modal.css"
import ModalList from './ModalList'

const Modal = ({ modalData, setfollowModal, isUserFollowed }) => {

    const closeModalFunc = () => {
        setfollowModal({
            open: false,
            data: [],
            title: ""
        })
    }
    return (
        <>
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={closeModalFunc}>X</span>
                        <h3>{modalData.title}</h3>
                       {modalData?.data.length > 0 ? <>{modalData?.data.map((item) => {
                            return <ModalList item={item} key={item._id} isUserFollowed={isUserFollowed}/>
                        })}</> : <h4>List is empty !</h4>}
                </div>

            </div></>
    )
}

export default Modal