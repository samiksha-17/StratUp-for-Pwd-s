import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    const history = useHistory();

    useEffect(() => {
        // Add event listener when component mounts
        window.addEventListener('beforeunload', handleUnload);
        // Remove event listener when component unmounts
        return () => window.removeEventListener('beforeunload', handleUnload);
    }, []);

    const handleUnload = () => {
        // Send logout request when user navigates away
        axios.post('http://localhost:5000/logout')
            .then(res => {
                console.log('User logged out successfully');
            })
            .catch(err => {
                console.error('Error logging out:', err);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/signup', values) 
            .then(res => {
                if (res.data.message === "Signup successful") {
                    history.push('/login');
                } else {
                    alert("Error: " + res.data.message);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div style={{ 
            backgroundImage: `url('https://source.unsplash.com/1600x900/?nature,water')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" placeholder='Enter Username' name='username'
                            onChange={e => setValues({ ...values, username: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={e => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={e => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
                </form>
                <p className="text-center mt-3">Or</p>
                <div className="text-center">
                    <Link to="/login" className="btn btn-primary w-50 rounded-0">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
