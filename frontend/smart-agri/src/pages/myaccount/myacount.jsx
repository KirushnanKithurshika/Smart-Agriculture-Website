import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import './myaccount.css';
import Sidenavigationbar from '../../components/sidenavbar';
import { FaCamera } from 'react-icons/fa';

function Myaccount() {
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/100');
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    confirmPassword: false,
    newPassword: false,
  });

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);

      // Here you would send the file to the backend for permanent storage
    }
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field],
    }));
  };

  return (
    <div>
      <div className="cropmanagement-container">
        <div className="grid-item grid-item-1">
          <Navbar />
        </div>
        <div className="grid-item grid-item-2"></div>
        <div className="grid-item grid-item-3"></div>
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
                  style={{ display: 'none' }}
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Kirushnan Kithurshika</h2>
                <p className="profile-email">kirushnankithurshika@gmail.com</p>
              </div>
            </div>

            <form className="profile-form">
              <div className="form-groupmyaccount">
                <div>
                  <label>Full Name</label>
                  <input type="text" value="Kirushnan Kithurshika" />
                </div>
                <div>
                  <label>Contact Number</label>
                  <input type="text" placeholder="Enter Contact Number" />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value="kirushnankithurshika@gmail.com"
                    readOnly
                  />
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    value="Sanmugalingam Street, Karuwakerny, Valachchenai"
                  />
                </div>
                <div>
                  <label>Job Description</label>
                  <input type="text" value="Manager" />
                </div>
              </div>

              <button type="button" className="save-btn">
                Save
              </button>

              <h3>Password Settings</h3>
              <hr />

              <div className="form-groupmyaccount">
                <div>
                  <label>Old Password</label>
                  <div className="password-input" style={{ position: 'relative' }}>
                    <input
                      type={passwordVisibility.oldPassword ? 'text' : 'password'}
                      placeholder="Enter Old Password"
                      style={{ paddingRight: '30px' }}
                    />
                    <i
                      className={`fas ${passwordVisibility.oldPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                      onClick={() => togglePasswordVisibility('oldPassword')}
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        cursor: 'pointer',
                        position: 'absolute',
                        right: '10px',
                        top: '30%',
                        transform: 'translateY(-50%)',
                      }}
                    ></i>
                  </div>
                </div>
                <div>
                  <label>Confirm Password</label>
                  <div className="password-input" style={{ position: 'relative' }}>
                    <input
                      type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      style={{ paddingRight: '30px' }}
                    />
                    <i
                      className={`fas ${passwordVisibility.confirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        cursor: 'pointer',
                        position: 'absolute',
                        right: '10px',
                        top: '30%',
                        transform: 'translateY(-50%)',
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="form-groupmyaccount">
                <div>
                  <label>New Password</label>
                  <div className="password-input" style={{ position: 'relative' }}>
                    <input
                      type={passwordVisibility.newPassword ? 'text' : 'password'}
                      placeholder="Enter New Password"
                      style={{ paddingRight: '30px' }}
                    />
                    <i
                      className={`fas ${passwordVisibility.newPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                      onClick={() => togglePasswordVisibility('newPassword')}
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        cursor: 'pointer',
                        position: 'absolute',
                        right: '10px',
                        top: '30%',
                        transform: 'translateY(-50%)',
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              <button type="button" className="update-password-btn">
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
