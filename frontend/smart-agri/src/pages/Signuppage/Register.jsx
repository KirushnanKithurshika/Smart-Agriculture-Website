import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import Logo from '../../assets/slogo.png';
import BackgroundImage from '../../assets/BG-login.jpg';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;

        try {
            const response = await axios.post('/register', {
                name,
                email,
                password,
            });
            const responseData = response.data;

            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                setData({ name: '', email: '', password: '' });
                toast.success('Registration successful. Welcome!');
                navigate('/login');
            }
        } catch (error) {
            console.error('Registration error:', error);
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <div className="logo">
                    <img className="Logo" src={Logo} alt="Logo" />
                </div>
                
                <button className="login-button" onClick={() => navigate('/login')}>Login</button>
            </header>
            <div className="login-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <div className="login-form">
                    <h2>Registration</h2>
                    <form onSubmit={registerUser}>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter name..."
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            required
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email..."
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password..."
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            required
                        />
                        <div className='submit-button-container'>
                            <button className='submit-buttonL' type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
