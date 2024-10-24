import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginpage.css';
import Logo from '../../assets/slogo.png';
import axios from 'axios';
import BackgroundImage from '../../assets/BG-login.jpg';

export default function Login() { // Added parentheses after the function name
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    axios.get('')
    
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">
          <img className="Logo" src={Logo} alt="Logo" />
        </div>
        <button className="login-button">Login</button>
      </header>

      <div className="login-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>} 

          <form onSubmit={loginUser}>
            <div className="form-group">
              <label htmlFor="email">Email</label> {/* Changed htmlFor to "email" */}
              <div className="input-container">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  required
                  value={data.email}
                  onChange={handleInputChange}
                />
              </div> 
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container" style={{ position: 'relative' }}>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  required
                  style={{ paddingRight: '30px' }}
                  value={data.password}
                  onChange={handleInputChange}
                />
                <i
                  className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} 
                  onClick={togglePasswordVisibility} 
                  style={{ 
                    cursor: 'pointer', 
                    position: 'absolute', 
                    right: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)' 
                  }}
                ></i>
              </div>
            </div>

            <div className="forget-password">
              <Link to="/reset-password">
                <label htmlFor="password" style={{ cursor: 'pointer' }}>Forget password?</label>
              </Link>
            </div>

            <div className='submit-button-container'>
              <button className='submit-button' type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
