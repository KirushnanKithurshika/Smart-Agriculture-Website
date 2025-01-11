import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginpage.css';
import Logo from '../../assets/slogo.png';
import axios from 'axios';
import BackgroundImage from '../../assets/BG-login.jpg';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/authContext'; 

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
 
    if (error) {
      setError('');
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/login', { email, password });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
        setError(responseData.error); 
      } else {
        localStorage.setItem('token', responseData.token); 

        
        login(responseData.token, responseData.user);

        setData({ email: '', password: '' });

        navigate('/homepage'); 
      }
    } catch (error) {
      console.error(error);
      setError('An unexpected error occurred'); 
      toast.error('An unexpected error occurred'); 
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
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>} 

          <form onSubmit={loginUser}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <input
                  className='loginplaceholder'
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
                  className='loginplaceholder'
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
                    fontSize:'12px',
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
              <Link to="/resetpassword" className="forget-password-link">
                Forget password?
              </Link>
            </div>

            <div className='submit-button-container'>
              <button className='submit-buttonL' type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
