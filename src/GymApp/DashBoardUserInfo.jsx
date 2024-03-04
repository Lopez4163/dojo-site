import React from "react"
import whiteBeltImg from "./assets/whiteBelt.jpeg"
import "./DashboardStyling/ProfileInfo.css"
import { useEffect, useState } from "react"
import { db } from "../Auth/firebase.js"
import { useAuth } from "../Auth/AuthContext.jsx"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage"
import { storage } from "../Auth/firebase.js"
import { getAuth, updateProfile } from "firebase/auth"

const DashBoardUserInfo = () => {
  const authUser = useAuth()
  const [userData, setUserData] = useState(null)
  const [editMode, setEditMode] = useState(false) // New state for edit mode

  useEffect(() => {
    const fetchUserData = async userId => {
      try {
        const userRef = doc(db, "users", userId)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
          const userData = userDoc.data()
          console.log("User Data:", userData)
          setUserData(userData)
        } else {
          console.log("No such document!")
        }
      } catch (error) {
        console.error("Error getting user document:", error)
      }
    }

    if (authUser) {
      const userId = authUser.uid
      fetchUserData(userId).then(r => console.log("fetchUserData result:", r))
    }
  }, [authUser])

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleSaveClick = async () => {
    // Perform save/update logic to Firestore here
    try {
      const userRef = doc(db, "users", authUser.uid)
      await updateDoc(userRef, userData) // Update Firestore with the new data
      setEditMode(false) // After saving, switch back to display mode
    } catch (error) {
      console.error("Error updating user document:", error)
    }
  }
  const handleChange = e => {
    // Update the local state as the user types
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleImageChange = async e => {
    try {
      const file = e.target.files[0]

      if (file) {
        // Create a reference to the file in Firebase Storage
        const storageRef = ref(
          storage,
          `profileImages/${authUser.uid}/${file.name}`
        )
        console.log("Storage reference:", storageRef)

        // Create a new upload task
        const uploadTask = uploadBytesResumable(storageRef, file)

        // Get notified when the upload is complete
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Upload is " + progress + "% done")
          },
          error => {
            console.error("Error during upload:", error)
          },
          async () => {
            // Handle successful upload
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
              console.log("Download URL:", downloadURL)

              // Update the user's profile with the new photo URL
              const auth = getAuth()
              await updateProfile(auth.currentUser, { photoURL: downloadURL })
              console.log("Profile updated with new photo URL")

              // Update the userData state
              setUserData({ ...userData, profileImage: downloadURL })
              console.log("Updated userData:", userData)
            } catch (error) {
              console.error("Error getting download URL:", error)
            }
          }
        )
      }
    } catch (error) {
      console.error("Error uploading image:", error)
    }
  }

  return (
    <div className="profile-info-container">
      <section className="profile-section">
        <ul className="profile-section-ul">
          <li className="profile-li tight-start">
            {!editMode ? (
              <div className="edit-button-wrapper">
                <span
                  className="material-symbols-outlined"
                  id="edit-btn"
                  onClick={handleEditClick}
                >
                  edit
                </span>
                <div className="icon-details">
                  <h3>edit</h3>
                </div>
              </div>
            ) : (
              <span
                className="material-symbols-outlined"
                id="save-btn"
                onClick={handleSaveClick}
              >
                save
              </span>
            )}
          </li>
          <li className="profile-li">
            <div className="profile-pic-container">
              <img
                src={
                  userData?.profileImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMBGuTMOhxwMQ-vekHHzq3UI0qb7z3Ciu1A&usqp=CAU"
                }
                alt="profile-pic"
                className="profile-pic"
              />
              {editMode && (
                <label className="add-image-label" htmlFor="profileImageInput">
                  <span className="material-symbols-outlined" id="add-btn">
                    add_a_photo
                  </span>
                  <input
                    id="profileImageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              )}
              <li className="profile-li-name">
                <div className="profile-user-name">
                  <span>{userData?.name || "N/A"}</span>
                </div>
              </li>
            </div>
          </li>
        </ul>
        <ul className="profile-section-ul-details">
          {/*<li className="profile-li-name">*/}
          {/*    <div className='profile-user-name'>*/}
          {/*        <span>{userData?.name || 'N/A'}</span>*/}
          {/*    </div>*/}
          {/*</li>*/}
          <li className="profile-li">
            <div className="profile-li-row">
              <span>
                <h3>Gender</h3>
              </span>
              {editMode ? (
                <select
                  className="transparent-input"
                  name="gender"
                  value={userData?.gender || ""}
                  onChange={handleChange}
                >
                  <option value="">Not listed</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <span>{userData?.gender}</span>
              )}
            </div>
          </li>
          <li className="profile-li">
            <div className="profile-li-row">
              <span>
                <h3>Phone Number</h3>
              </span>
              {editMode ? (
                <input
                  className="transparent-input"
                  type="tel"
                  name="phone_number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Format: xxx-xxx-xxxx"
                  value={userData?.phone_number || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{userData?.phone_number}</span>
              )}
            </div>
          </li>
          <li className="Adresss">
            <div className="profile-li-row">
              <span>
                <h3>Address</h3>
              </span>
              {editMode ? (
                <input
                  className="transparent-input"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={userData?.address || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{userData?.address}</span>
              )}
            </div>
          </li>
          <li className="profile-li">
            <div className="profile-li-column">
              <div>
                <h3>Belt Grade</h3>
              </div>
              <div>
                {/*<span>{userData?.beltGrade}</span>*/}
                <div>
                  <img className="belt" src={whiteBeltImg} />
                </div>
              </div>
              {/*{editMode ? (*/}
              {/*    <input*/}
              {/*        type="text"*/}
              {/*        name="beltGrade"*/}
              {/*        value={userData?.beltGrade || ''}*/}
              {/*        onChange={handleChange}*/}
              {/*    />*/}
              {/*) : (*/}
              {/*    <h5>{userData?.beltGrade}</h5>*/}
              {/*)}*/}
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default DashBoardUserInfo
