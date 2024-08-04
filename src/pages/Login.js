
// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const { login, error, user } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const { email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         await login({ email, password });
//     };

//     // Redirect if logged in
//     useEffect(() => {
//         if (user) {
//             navigate('/dashboard');
//         }
//     }, [user, navigate]);

//     return (
//         <form onSubmit={onSubmit}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
//             <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Auth.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login logic here
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-form-container">
//                 <h2 className="mb-4">Login to Your GreenScore Account</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={handleChange} required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100">Login</button>
//                 </form>
//                 <p className="mt-3 text-center">
//                     Don't have an account? <Link to="/register">Register here</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;

// Assuming imports and CSS are already set up as per your provided code snippet

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findUserByEmailAndPassword } from './mockData.js'; // Ensure this function is correctly implemented
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve users from localStorage or another storage mechanism
        const user = findUserByEmailAndPassword(formData.email, formData.password);

        if (user) {
            // Handle successful login here
            alert('Login successful');
            navigate('/dashboard');
            // Optionally, store user information in state or context for further use
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <h2 className="mb-4">Login to Your GreenScore Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Login</button>
                </form>
                <p className="mt-3 text-center">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
