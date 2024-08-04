

// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadUser = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 setLoading(false);
//                 return;
//             }

//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token}`,
//                 },
//             };

//             const { data } = await axios.get('http://localhost:3000/api/users/me', config);
//             setUser(data);
//         } catch (error) {
//             console.error('Error fetching user profile:', error);
//             setError(error.response?.data?.message || 'Error fetching user profile');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         loadUser();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, setUser, loading, error }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.get('http://localhost:5000/api/users/me', config);
            setUser(data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
            setError(error.response?.data?.message || 'Error fetching user profile');
        } finally {
            setLoading(false);
        }
    };

    const login = async ({ email, password }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post(
                'http://localhost:5000/api/users/login',
                { email, password },
                config
            );

            localStorage.setItem('token', data.token);
            await loadUser();
        } catch (error) {
            console.error('Login error:', error);
            setError(error.response?.data?.message || 'Login failed');
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, error, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
