import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Login(props) {
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/login', values)
            .then(res => {
                if (res.data.loggedInUser) {
                    // Store login status in local storage
                    localStorage.setItem('isLoggedIn', true);
                    // Redirect to homepage or dashboard
                    history.push('/');
                } else {
                    alert("Error: " + res.data.message);
                }
            })
            .catch(err => console.log(err));
    }

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
            <div className='bg-white p-4 rounded shadow' style={{ maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={e => setValues({ ...values, email: e.target.value })} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={e => setValues({ ...values, password: e.target.value })} className='form-control' />
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Login</button>
                    <div className="mt-3 text-center">               
                        Don't have an account? <a className="btn btn-outline-primary" href="/register"><b>Sign Up</b></a>
                    </div>   
                    <div className="mt-3 text-danger text-center">  
                        <span id="message" name="message">{props.messageLog && props.messageLog.message ? props.messageLog.message : null}</span>
                    </div>  
                </form>
            </div>
        </div>
    )
};

export default Login;
