import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCamera } from "react-icons/fa";
import Navbar from "../../components/navbar";
import Sidenavigationbar from "../../components/sidenavbar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./myaccount.css";

function Myaccount() {
  const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/100");
  const [profileData, setProfileData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    jobDescription: "",
    email: "",
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
      // Fetch user profile details from backend
      axios
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setProfileData({
            fullName: data.name,
            contactNumber: data.contactNumber,
            address: data.address,
            jobDescription: data.jobDescription,
            email: data.email, // Added email to be fetched
          });
          setProfilePicture(data.profilePicture || "https://via.placeholder.com/100");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          toast.error("Error fetching user data");
        });
    } else {
      toast.error("No token found, please log in.");
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
        .put("/profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => toast.success("Profile picture updated successfully!"))
        .catch((error) => toast.error("Error uploading profile picture"));
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
      .then((response) => toast.success("Profile updated successfully!"))
      .catch((error) =>
        toast.error(error.response?.data?.message || "Error updating profile")
      );
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return toast.error("New password and confirmation do not match!");
    }

    axios
      .put("/profile/password", passwordData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Password updated successfully!");
        setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
      })
      .catch((error) =>
        toast.error(error.response?.data?.message || "Error updating password")
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
                <p className="profile-email">{profileData.email}</p>
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

      {/* Toast Container */}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Myaccount;
