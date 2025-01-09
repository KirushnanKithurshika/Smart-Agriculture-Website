import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidenavigationbar from "../../components/sidenavbar";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import "./myaccount.css";

function Myaccount() {
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/100"
  );
  const [profileData, setProfileData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    jobDescription: "",
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      axios
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setProfileData({
            fullName: data.fullName,
            contactNumber: data.contactNumber,
            address: data.address,
            jobDescription: data.jobDescription,
          });
          setProfilePicture(data.profilePicture || "https://via.placeholder.com/100");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          alert("Error fetching user data");
        });
    } else {
      alert("No token found, please log in.");
    }
  }, [token]);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);

      const formData = new FormData();
      formData.append("profilePicture", file);

      axios
        .post("/profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => alert("Profile picture updated successfully!"))
        .catch((error) => alert("Error uploading profile picture"));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field],
    }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    axios
      .put("/profile", profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => alert("Profile updated successfully!"))
      .catch((error) =>
        alert(error.response?.data?.message || "Error updating profile")
      );
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return alert("New password and confirmation do not match!");
    }

    axios
      .put("/profile", passwordData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert("Password updated successfully!");
        setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
      })
      .catch((error) =>
        alert(error.response?.data?.message || "Error updating password")
      );
  };

  return (
    <div>
      <div className="cropmanagement-container">
        <div className="grid-item grid-item-1"></div>
        <div className="grid-item grid-item-2"></div>
        <div className="grid-item grid-item-3">
          <Navbar />
        </div>
        <div className="grid-item grid-item-4">
          <Sidenavigationbar />
        </div>

        <div className="croplog-dashboard grid-item">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-picture-wrapper">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="profile-picture"
                />
                <label htmlFor="profile-picture-input" className="camera-icon">
                  <FaCamera />
                </label>
                <input
                  id="profile-picture-input"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  style={{ display: "none" }}
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">{profileData.fullName}</h2>
                <p className="profile-email">kirushnankithurshika@gmail.com</p>
              </div>
            </div>

            <form className="profile-form" onSubmit={handleProfileUpdate}>
              <div className="form-groupmyaccount">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Contact Number</label>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Enter Contact Number"
                    value={profileData.contactNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Job Description</label>
                  <input
                    type="text"
                    name="jobDescription"
                    value={profileData.jobDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type="submit" className="save-btn">
                Save Profile
              </button>
            </form>

            <h3>Password Settings</h3>
            <hr />

            <form onSubmit={handlePasswordUpdate}>
              <div className="form-groupmyaccount">
                <div>
                  <label>Old Password</label>
                  <div className="password-input" style={{ position: "relative" }}>
                    <input
                      type={passwordVisibility.oldPassword ? "text" : "password"}
                      name="oldPassword"
                      placeholder="Enter Old Password"
                      value={passwordData.oldPassword}
                      onChange={handlePasswordChange}
                    />
                    <i
                      className={`fas ${
                        passwordVisibility.oldPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      onClick={() => togglePasswordVisibility("oldPassword")}
                      style={{
                        fontSize: "12px",
                        color: "#808080",
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        top: "30%",
                        transform: "translateY(-50%)",
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="form-groupmyaccount">
                <div>
                  <label>New Password</label>
                  <div className="password-input" style={{ position: "relative" }}>
                    <input
                      type={passwordVisibility.newPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="Enter New Password"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                    />
                    <i
                      className={`fas ${
                        passwordVisibility.newPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      onClick={() => togglePasswordVisibility("newPassword")}
                      style={{
                        fontSize: "12px",
                        color: "#808080",
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        top: "30%",
                        transform: "translateY(-50%)",
                      }}
                    ></i>
                  </div>
                </div>
                <div>
                  <label>Confirm Password</label>
                  <div className="password-input" style={{ position: "relative" }}>
                    <input
                      type={passwordVisibility.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                    />
                    <i
                      className={`fas ${
                        passwordVisibility.confirmPassword
                          ? "fa-eye-slash"
                          : "fa-eye"
                      }`}
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                      style={{
                        fontSize: "12px",
                        color: "#808080",
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        top: "30%",
                        transform: "translateY(-50%)",
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              <button type="submit" className="update-password-btn">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
