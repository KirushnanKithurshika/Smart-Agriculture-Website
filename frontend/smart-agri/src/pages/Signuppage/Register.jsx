import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
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
            // Corrected the axios.post call
            const { data: response } = await axios.post('/register', {
                name,
                email,
                password,
            });

            // Check for an error in the response
            if (response.error) {
                toast.error(response.error);
            } else {
                setData({ name: '', email: '', password: '' }); // Clear form data
                toast.success('Registration successful. Welcome!');
                navigate('/'); // Navigate to the home page
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred during registration.');
        }
    };

    return (
        <div className="container">
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter email..."
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password..."
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
