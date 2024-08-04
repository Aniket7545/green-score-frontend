
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const { name, email, password, confirmPassword } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//         } else {
//             try {
//                 const newUser = { name, email, password };
//                 const res = await axios.post('http://localhost:5000/api/users/register', newUser);
//                 setUser(res.data);
//                 setError(null);
//             } catch (err) {
//                 if (err.response && err.response.data) {
//                     setError(err.response.data.msg);
//                 } else {
//                     setError(err.message);
//                 }
//             }
//         }
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-md-center">
//                 <Col md={6}>
//                     <h2 className="mb-4">Register</h2>
//                     {error && <Alert variant="danger">{error}</Alert>}
//                     <Form onSubmit={onSubmit}>
//                         <Form.Group controlId="formName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter name"
//                                 name="name"
//                                 value={name}
//                                 onChange={onChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="formEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 placeholder="Enter email"
//                                 name="email"
//                                 value={email}
//                                 onChange={onChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="formPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 placeholder="Enter password"
//                                 name="password"
//                                 value={password}
//                                 onChange={onChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="formConfirmPassword">
//                             <Form.Label>Confirm Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 placeholder="Confirm password"
//                                 name="confirmPassword"
//                                 value={confirmPassword}
//                                 onChange={onChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit" className="mt-3">
//                             Register
//                         </Button>
//                     </Form>
//                     {user && (
//                         <Alert variant="success" className="mt-3">
//                             Registration successful! Welcome, {user.name}.
//                         </Alert>
//                     )}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveUserToStorage } from './mockData' ;
import './Auth.css'; // Assuming similar styling can be applied

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveUserToStorage({ ...formData });
        alert('Registration successful');
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

