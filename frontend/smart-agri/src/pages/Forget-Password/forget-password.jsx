import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login-Page/loginpage.css';
import Logo from '../../assets/slogo.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import BackgroundImage from '../../assets/BG-login.jpg';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);  // To toggle the form visibility

  const handleInputChange = (e) => {
    console.log('Input Changed:', e.target.value); // Debug log
    setEmail(e.target.value);
    if (error) setError('');
    if (success) setSuccess('');
  };

  const sendResetEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/resetpassword', { email });
      if (response.data.message) {
        // Success case - email sent successfully
        setSuccess(response.data.message);
        setIsFormVisible(false);  // Hide the form
        toast.success(response.data.message);
        setEmail('');
      } else {
        // Error case - reset link not sent
        setError('Failed to send reset link.');
        setIsFormVisible(false);  // Hide the form
        toast.error('Failed to send reset link.');
      }
    } catch (error) {
      console.error(error);
      setError('An unexpected error occurred.');
      setIsFormVisible(false);  // Hide the form
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

      {/* Success or error message box */}
      {(success || error) && (
        <div className="message-box">
          <p>{success || error}</p>
        </div>
      )}

      <div
        className="login-background"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {isFormVisible && (
          <div className="login-form">
            <h2>Reset Password</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <form onSubmit={sendResetEmail}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-container">
                  <input
                    className="loginplaceholder"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="submit-button-container">
                <button className="submit-buttonL" type="submit">
                  Send Reset Link
                </button>
              </div>
            </form>

            <div className="forget-password">
              <Link to="/" className="forget-password-link">
                Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
