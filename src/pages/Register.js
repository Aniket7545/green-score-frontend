

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { saveUserToStorage } from './mockData' ;
// import './Auth.css'; // Assuming similar styling can be applied
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         saveUserToStorage({ ...formData });
//         alert('Registration successful');
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-form-container">
//                 <h2 className="mb-4">Register for Your GreenScore Account</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={handleChange} required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100">Register</button>
//                 </form>
//                 <p className="mt-3 text-center">
//                     Already have an account? <Link to="/login">Login here</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveUserToStorage } from './mockData';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveUserToStorage({ ...formData });
        alert('Registration successful');
        navigate('/login'); // Redirect to the login page after successful registration
    };

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <h2 className="mb-4">Register for Your GreenScore Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
                <p className="mt-3 text-center">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
