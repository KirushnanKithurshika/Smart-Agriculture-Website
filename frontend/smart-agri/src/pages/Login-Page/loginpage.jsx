import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';
import Logo from '../../assets/slogo.png';
import BackgroundImage from '../../assets/BG-login.jpg';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };
  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">
          <img className=" Logo" src={Logo} alt="Logo" />

        </div>
        <button className="login-button">Login</button>
      </header>

      <div className="login-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <div className="input-container">

                <input type="text" id="username" placeholder="User Name" required />
              </div> </div>
              <div className="form-group">
  <label htmlFor="password">Password</label>
  <div className="input-container" style={{ position: 'relative' }}>
    <input
      type={passwordVisible ? 'text' : 'password'} 
      id="password"
      placeholder="Password"
      required
      style={{ paddingRight: '30px' }} 
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
};

export default Login;
