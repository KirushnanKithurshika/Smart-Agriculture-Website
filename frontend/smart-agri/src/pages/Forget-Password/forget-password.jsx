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

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
    if (success) setSuccess('');
  };

  const sendResetEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/reset-password', { email });
      if (response.data.success) {
        setSuccess('Password reset link sent to your email.');
        toast.success('Password reset link sent.');
        setEmail('');
      } else {
        setError(response.data.error || 'Failed to send reset link.');
        toast.error(response.data.error || 'Failed to send reset link.');
      }
    } catch (error) {
      console.error(error);
      setError('An unexpected error occurred.');
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <div className="login-container"> {/* Reused class name */}
      <header className="login-header"> {/* Reused class name */}
        <div className="logo">
          <img className="Logo" src={Logo} alt="Logo" />
        </div>
      </header>

      <div className="login-background" style={{ backgroundImage: `url(${BackgroundImage})` }}> {/* Reused class name */}
        <div className="login-form"> {/* Reused class name */}
          <h2>Reset Password</h2>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={sendResetEmail}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <input
                className='loginplaceholder'
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

          <div className="forget-password"> {/* Same class for back navigation */}
            <Link to="/" className="forget-password-link">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
