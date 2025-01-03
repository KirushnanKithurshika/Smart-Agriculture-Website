import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import '../Login-Page/loginpage.css';
import { toast } from 'react-hot-toast';
import Logo from '../../assets/slogo.png';
import BackgroundImage from '../../assets/BG-login.jpg';

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formVisible, setFormVisible] = useState(true); // Track form visibility

  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/updatepassword', { token, newPassword });
      if (response.data.success) {
        setSuccess('Password reset successfully');
        toast.success('Password reset successfully');
        setFormVisible(false); 
      } else {
        setError(response.data.error || 'Failed to reset password.');
        toast.error(response.data.error || 'Failed to reset password.');
      }
    } catch (error) {
      console.error(error);
      setError('An unexpected error occurred.');
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">
          <img className="Logo" src={Logo} alt="Logo" />
        </div>
      </header>

      <div className="login-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        {formVisible ? (
          <div className="login-form">
            <h2>Reset Your Password</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <form onSubmit={handlePasswordReset}>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <div className="input-container" style={{ position: 'relative' }}>
                  <input
                    className="loginplaceholder"
                    type={passwordVisible ? 'text' : 'password'}
                    id="newPassword"
                    placeholder="Enter new password"
                    required
                    value={newPassword}
                    onChange={(e) => handleInputChange(e, setNewPassword)}
                  />
                  <i
                    className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={togglePasswordVisibility}
                    style={{
                      fontSize: '12px',
                      cursor: 'pointer',
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  ></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-container" style={{ position: 'relative' }}>
                  <input
                    className="loginplaceholder"
                    type={passwordVisible ? 'text' : 'password'} 
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    required
                    value={confirmPassword}
                    onChange={(e) => handleInputChange(e, setConfirmPassword)}
                  />
                  <i
                    className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={togglePasswordVisibility}
                    style={{
                      fontSize: '12px',
                      cursor: 'pointer',
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  ></i>
                </div>
              </div>

              <div className="submit-button-container">
                <button className="submit-buttonL" type="submit">
                  Reset Password
                </button>
              </div>
            </form>

            <div className="forget-password">
              <Link to="/" className="forget-password-link">
                Back to Login
              </Link>
            </div>
          </div>
        ) : (
          <div className="success-message-box">
            <h2>{success}</h2>
            <Link to="/" className="forget-password-link">
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
