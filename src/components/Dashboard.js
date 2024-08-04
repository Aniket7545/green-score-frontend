// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Dashboard.css';
// import { useNavigate } from 'react-router-dom';




// const Dashboard = () => {
//     // Dummy data for demonstration
//     const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/logout');
//   }
//     const user = {
//         name: 'John Doe',
//         greenScore: 75,
//         carbonFootprint: 12.5
//     };

//     return (
//         <div className="dashboard-container">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//                 <div className="container text-center">
//                     <a className="navbar-brand" href="/dashboard">GreenScore Dashboard</a>
//                     <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
//                 </div>
//             </nav>

//             <main className="container my-5">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h2 className="card-title">Welcome, {user.name}</h2>
//                                 <p className="card-text">Your GreenScore: {user.greenScore}</p>
//                                 <div className="progress mb-3">
//                                     <div className="progress-bar bg-success" role="progressbar" style={{width: `${user.greenScore}%`}} aria-valuenow={user.greenScore} aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                                 <p className="card-text">Carbon Footprint: {user.carbonFootprint} tons CO2e</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h3 className="card-title">Recent Transactions</h3>
//                                 <ul className="list-group">
//                                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                                         Organic Groceries
//                                         <span className="badge bg-success rounded-pill">+5 points</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                                         Public Transportation
//                                         <span className="badge bg-success rounded-pill">+3 points</span>
//                                     </li>
//                                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                                         Energy-efficient Appliance Purchase
//                                         <span className="badge bg-success rounded-pill">+10 points</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h3 className="card-title">Sustainability Tips</h3>
//                                 <ul className="list-group">
//                                     <li className="list-group-item">Reduce energy consumption by using LED bulbs</li>
//                                     <li className="list-group-item">Choose eco-friendly transportation options</li>
//                                     <li className="list-group-item">Support local and sustainable businesses</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h3 className="card-title">Green Investment Opportunities</h3>
//                                 <ul className="list-group">
//                                     <li className="list-group-item">Renewable Energy ETFs</li>
//                                     <li className="list-group-item">Sustainable Agriculture Funds</li>
//                                     <li className="list-group-item">Green Bond Investment Options</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             <footer className="bg-light text-center py-3 mt-5 fixed-bottom">
//                 <p>&copy; 2024 GreenScore. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', greenScore: 75, carbonFootprint: 12.5 });

    useEffect(() => {
        // Assume user's name is stored in local storage upon login
        const storedUserName = localStorage.getItem('username');
        if (storedUserName) {
            setUser((prevUser) => ({ ...prevUser, name: storedUserName }));
        }
    }, []);

    const handleLogout = () => {
        navigate('/logout');
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container text-center">
                    <a className="navbar-brand" href="/dashboard">GreenScore Dashboard</a>
                    <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
                </div>
            </nav>

            <main className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Welcome, {user.name}</h2>
                                <p className="card-text">Your GreenScore: {user.greenScore}</p>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${user.greenScore}%` }} aria-valuenow={user.greenScore} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text">Carbon Footprint: {user.carbonFootprint} tons CO2e</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h3 className="card-title">Recent Transactions</h3>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Organic Groceries
                                        <span className="badge bg-success rounded-pill">+5 points</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Public Transportation
                                        <span className="badge bg-success rounded-pill">+3 points</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Energy-efficient Appliance Purchase
                                        <span className="badge bg-success rounded-pill">+10 points</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h3 className="card-title">Sustainability Tips</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Reduce energy consumption by using LED bulbs</li>
                                    <li className="list-group-item">Choose eco-friendly transportation options</li>
                                    <li className="list-group-item">Support local and sustainable businesses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h3 className="card-title">Green Investment Opportunities</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Renewable Energy ETFs</li>
                                    <li className="list-group-item">Sustainable Agriculture Funds</li>
                                    <li className="list-group-item">Green Bond Investment Options</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-light text-center py-3 mt-5 fixed-bottom">
                <p>&copy; 2024 GreenScore. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
