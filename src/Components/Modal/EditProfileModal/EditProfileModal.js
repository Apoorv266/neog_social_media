import React, { useContext } from "react";
import "../../../Styles/EditProfileModal.css";
import { useState } from "react";
import { authContext } from "../../../Contexts/AuthContext";
import { userContext } from "../../../Contexts/UserContext";

const EditProfileModal = ({ seteditModal }) => {
  const { userData } = useContext(authContext);
  const { handleEditUserFunc } = useContext(userContext);
  const { firstName, lastName, website, bio, avatarUrl, backgroundImage } =
    userData;
  const inputState = {
    firstName: firstName,
    lastName: lastName,
    bio: bio,
    website: website,
    backgroundImage:backgroundImage,
    avatarUrl: avatarUrl,
  };
  const [editInputField, seteditInputField] = useState(inputState);

  const editInputFunc = (e) => {
    const { name, value } = e.target;
    if (name === "backgroundImage" || name === "avatarUrl") {
      seteditInputField({
        ...editInputField,
        [name]: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      seteditInputField({
        ...editInputField,
        [name]: value,
      });
    }
  };

  const handleSaveFunc = () => {
    handleEditUserFunc(editInputField);
    seteditInputField(inputState);
    seteditModal(false);
    console.log("editInputField",editInputField)
  };
  return (
    <div id="myModal" className="modal">
      <div className="modal-content ">
        <div className="close" onClick={() => seteditModal(false)}>
          X
        </div>

        <div className="edit-modal">
          <h3>Edit banner image : </h3>
          <label>
            <input
              type="file"
              className="hidden"
              name="backgroundImage"
              onChange={editInputFunc}
            />
            <img
              src={
                editInputField.backgroundImage
              }
              alt=""
              srcset=""
              width={"100%"}
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </label>

          <h3>Edit profile image : </h3>
          <label>
            <input
              type="file"
              className="hidden"
              name="avatarUrl"
              onChange={editInputFunc}
            />
            <img
              src={
                editInputField.avatarUrl 
              }
              alt=""
              srcset=""
              width={"90px"}
              height={"90px"}
              style={{
                borderRadius: "50%",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </label>

          <h3>First Name : </h3>
          <input
            type="text"
            id="input"
            name="firstName"
            value={editInputField.firstName}
            onChange={editInputFunc}
          />

          <h3>Last Name : </h3>
          <input
            type="text"
            id="input"
            name="lastName"
            value={editInputField.lastName}
            onChange={editInputFunc}
          />

          <h3>Bio :</h3>
          <input
            type="text"
            id="input"
            name="bio"
            value={editInputField.bio}
            onChange={editInputFunc}
          />

          <h3>Website :</h3>
          <input
            type="text"
            id="input"
            name="website"
            value={editInputField.website}
            onChange={editInputFunc}
          />
          <button className="save-btn" onClick={handleSaveFunc}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
