// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Home.css';

// // const Home = () => {
// //     return (
// //         <div className="container-fluid p-0">
// //             <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
// //                 <div className="container">
// //                     <a className="navbar-brand" href="/">EcoIncentive</a>
// //                     <div className="navbar-nav ms-auto">
// //                         <Link to="/login" className="nav-link">Login</Link>
// //                         <Link to="/register" className="nav-link">Register</Link>
// //                     </div>
// //                 </div>
// //             </nav>
// //            <div className='place'>
// //             <header className="header bg-light text-center py-5 mt-5">
// //                 <h1 align= "center"className="display-4">Welcome to EcoIncentive</h1>
// //                 {/* <p className="lead">Empowering sustainable finance through innovative technology</p> */}
// //             </header>
// //             </div>

// //             <main className="container my-5">
// //                 <section className="row mb-5">
// //                     <div className="col-md-6">
// //                         <h2>What is EcoIncentive?</h2>
// //                         <p>EcoIncentive is a cutting-edge fintech platform that helps individuals and businesses measure, track, and improve their environmental impact. By analyzing financial transactions and sustainability practices, we provide personalized green scores and actionable insights.</p>
// //                     </div>
// //                     <div className="col-md-6">
// //                         <img src="/green.jpg"  alt="Green Finance" className="img-fluid rounded" />
// //                     </div>
// //                 </section>

// //                 <section className="row mb-5">
// //                     <div className="col-md-4">
// //                         <div className="card h-100">
// //                             <div className="card-body">
// //                                 <h3 className="card-title">For Individuals</h3>
// //                                 <ul className="list-unstyled">
// //                                     <li>✔ Personal sustainability scoring</li>
// //                                     <li>✔ Eco-friendly product recommendations</li>
// //                                     <li>✔ Carbon footprint tracking</li>
// //                                 </ul>
// //                                 <Link to="/individualscore" className="btn btn-primary">Calculate Your Score</Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="col-md-4">
// //                         <div className="card h-100">
// //                             <div className="card-body">
// //                                 <h3 className="card-title">For Businesses</h3>
// //                                 <ul className="list-unstyled">
// //                                     <li>✔ Corporate sustainability assessment</li>
// //                                     <li>✔ ESG reporting tools</li>
// //                                     <li>✔ Supply chain impact analysis</li>
// //                                 </ul>
// //                                 <Link to="/enterprisescore" className="btn btn-primary">Assess Your Business</Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="col-md-4">
// //                         <div className="card h-100">
// //                             <div className="card-body">
// //                                 <h3 className="card-title">For Investors</h3>
// //                                 <ul className="list-unstyled">
// //                                     <li>✔ Green investment opportunities</li>
// //                                     <li>✔ Sustainable portfolio analysis</li>
// //                                     <li>✔ Impact investing metrics</li>
// //                                 </ul>
// //                                 <Link to="/investorscore" className="btn btn-primary">Evaluate Your Portfolio</Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 <section className="text-center">
// //                     <h2>Join the Green Finance Revolution</h2>
// //                     <p className="mb-4">Start your journey towards a more sustainable financial future today.</p>
// //                     <Link to="/register" className="btn btn-success btn-lg me-3">Get Started</Link>
// //                     <Link to="/login" className="btn btn-outline-success btn-lg">Login</Link>
// //                 </section>
// //             </main>

// //             <footer className="footer bg-dark text-light text-center py-3 fixed-bottom">
// //                 <p>&copy; 2024 EcoIncentive. All rights reserved.</p>
// //             </footer>
// //         </div>
// //     );
// // };

// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//     return (
//         <div className="container-fluid p-0">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
//                 <div className="container">
//                     <a className="navbar-brand" href="/">EcoIncentive</a>
//                     <div className="navbar-nav ms-auto">
//                         <Link to="/login" className="nav-link">Login</Link>
//                         <Link to="/register" className="nav-link">Register</Link>
//                     </div>
//                 </div>
//             </nav>

//             <div className='place'>
//                 <header className="header bg-light text-center py-5 mt-5">
//                     <h1 align="center" className="display-4">Welcome to EcoIncentive</h1>
//                 </header>
//             </div>

//             <main className="container my-5">
//                 <section className="row mb-5">
//                     <div className="col-md-6">
//                         <h2>What is EcoIncentive?</h2>
//                         <p>EcoIncentive is a cutting-edge fintech platform that helps individuals and businesses measure, track, and improve their environmental impact. By analyzing financial transactions and sustainability practices, we provide personalized green scores and actionable insights.</p>
//                     </div>
//                     <div className="col-md-6">
//                         <img src="/green.jpg" alt="Green Finance" className="img-fluid rounded" />
//                     </div>
//                 </section>

//                 <section className="row mb-5">
//                     <div className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <h3 className="card-title">For Individuals</h3>
//                                 <ul className="list-unstyled">
//                                     <li>✔ Personal sustainability scoring</li>
//                                     <li>✔ Eco-friendly product recommendations</li>
//                                     <li>✔ Carbon footprint tracking</li>
//                                 </ul>
//                                 <Link to="/individualscore" className="btn btn-primary">Calculate Your Score</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <h3 className="card-title">For Businesses</h3>
//                                 <ul className="list-unstyled">
//                                     <li>✔ Corporate sustainability assessment</li>
//                                     <li>✔ ESG reporting tools</li>
//                                     <li>✔ Supply chain impact analysis</li>
//                                 </ul>
//                                 <Link to="/enterprisescore" className="btn btn-primary">Assess Your Business</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <h3 className="card-title">For Investors</h3>
//                                 <ul className="list-unstyled">
//                                     <li>✔ Green investment opportunities</li>
//                                     <li>✔ Sustainable portfolio analysis</li>
//                                     <li>✔ Impact investing metrics</li>
//                                 </ul>
//                                 <Link to="/investorscore" className="btn btn-primary">Evaluate Your Portfolio</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="text-center">
//                     <h2>Join the Green Finance Revolution</h2>
//                     <p className="mb-4">Start your journey towards a more sustainable financial future today.</p>
//                     <Link to="/register" className="btn btn-success btn-lg me-3">Get Started</Link>
//                     <Link to="/login" className="btn btn-outline-success btn-lg">Login</Link>
//                 </section>
//             </main>

//             <footer className="footer bg-dark text-light text-center py-3">
//                 <p>&copy; 2024 EcoIncentive. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            EcoIncentive
          </a>
          <div className="navbar-nav ms-auto">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <div className="">
        <header className="header bg-light text-center py-5 mt-5">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <h1>Welcome to EcoIncentive</h1>
          </div>
          {/* <h1  >Welcome to EcoIncentive</h1> */}
        </header>
      </div>

      <main className="custom-container my-5 mx-auto">
        <section className="row mb-5">
          <div className="col-md-6">
            <h2>What is EcoIncentive?</h2>
            <p>
              EcoIncentive is a cutting-edge fintech platform that helps
              individuals and businesses measure, track, and improve their
              environmental impact. By analyzing financial transactions and
              sustainability practices, we provide personalized green scores and
              actionable insights.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/green.jpg"
              alt="Green Finance"
              className="img-fluid rounded"
            />
          </div>
        </section>

        <section className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">For Individuals</h3>
                <ul className="list-unstyled">
                  <li>✔ Personal sustainability scoring</li>
                  <li>✔ Eco-friendly product recommendations</li>
                  <li>✔ Carbon footprint tracking</li>
                </ul>
                <Link to="/individualscore" className="btn btn-primary">
                  Calculate Your Score
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">For Businesses</h3>
                <ul className="list-unstyled">
                  <li>✔ Corporate sustainability assessment</li>
                  <li>✔ ESG reporting tools</li>
                  <li>✔ Supply chain impact analysis</li>
                </ul>
                <Link to="/enterprisescore" className="btn btn-primary">
                  Assess Your Business
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">For Investors</h3>
                <ul className="list-unstyled">
                  <li>✔ Green investment opportunities</li>
                  <li>✔ Sustainable portfolio analysis</li>
                  <li>✔ Impact investing metrics</li>
                </ul>
                <Link to="/investorscore" className="btn btn-primary">
                  Evaluate Your Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2>Join the Green Finance Revolution</h2>
          <p className="mb-4">
            Start your journey towards a more sustainable financial future
            today.
          </p>
          <Link to="/register" className="btn btn-success btn-lg me-3">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-outline-success btn-lg">
            Login
          </Link>
        </section>
      </main>

      <footer className="footer bg-dark text-light text-center py-3 fixed-bottom">
        <p>&copy; 2024 EcoIncentive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
