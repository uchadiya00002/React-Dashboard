import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";
import Navbar from "../../components/navbar/Navbar";

import "react-circular-progressbar/dist/styles.css";
import React, { useState } from 'react';
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

// import {  } from '@material-ui/core';
import './profile.scss';

const Profile = () => {
    // const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState('Uchadiya');
    const [firstName, setFirstName] = useState('Avinash');
    const [email, setEmail] = useState('avinashuchadiya786@gmail.com');
    const [country, setCountry] = useState('India');
    const [address, setAddress] = useState('58/1 Kila Maidan Road');
    const [pincode, setPincode] = useState('452006');
    const [phone, setPhone] = useState('62648-26150');
    const [file, setFile] = useState("");
//       const handleEditClick = () => {
//     setIsEditMode(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditMode(false);
//     // Perform save operation with updated values
//   };

  return (

    
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>Profile</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                className="img"
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://images.pexels.com/photos/10677495/pexels-photo-10677495.jpeg?cs=srgb&dl=pexels-cottonbro-10677495.jpg&fm=jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
  
                  <div className="formInput" >
                    <label>First Name</label>
                    <input   value={firstName}
              onChange={(e) => setFirstName(e.target.value)}/>
                  </div>
                  <div className="formInput" >
                    <label>last Name</label>
                    <input   value={name}
              onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className="formInput" >
                    <label>Email</label>
                    <input    value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="formInput" >
                    <label>Phone Number</label>
                    <input   value={phone}
              onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className="formInput" >
                    <label>Address</label>
                    <input    value={address}
              onChange={(e) => setAddress(e.target.value)}/>
                  </div>
                  <div className="formInput" >
                    <label>Pin Code</label>
                    <input    value={pincode}
              onChange={(e) => setPincode(e.target.value)}/>
                  </div>
                  <div className="formInput" >
                    <label>Country</label>
                    <input    value={country}
              onChange={(e) => setCountry(e.target.value)}/>
                  </div>
  
                <button> Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>






  );
};

export default Profile;
