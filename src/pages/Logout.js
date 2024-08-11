// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Example: Assume 'users' in localStorage stores session data
    // Remove only the session data, not the entire user object
    delete localStorage.users.sessionData; // Adjust based on your actual session data structure

    // Redirect to login page after logout
    navigate('/', { replace: true });
  }, [navigate]);

  return null; // Render nothing, just perform side effects
};

export default Logout;
