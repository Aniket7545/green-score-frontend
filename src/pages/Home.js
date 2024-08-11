
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="container-fluid p-0">
//       <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="/">
//             EcoIncentive
//           </a>
//           <div className="navbar-nav ms-auto">
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/register" className="nav-link">
//               Register
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <div className="text-center">
//         <header className="header bg-light text-center py-5 mt-5">
//          <h1  >Welcome to EcoIncentive</h1>
//         </header>
//       </div>

//       <main className="custom-container my-5 mx-auto">
//         <section className="row mb-5">
//           <div className="col-md-6">
//             <h2>What is EcoIncentive?</h2>
//             <p>
//               EcoIncentive is a cutting-edge fintech platform that helps
//               individuals and businesses measure, track, and improve their
//               environmental impact. By analyzing financial transactions and
//               sustainability practices, we provide personalized green scores and
//               actionable insights.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img
//               src="/green.jpg"
//               alt="Green Finance"
//               className="img-fluid rounded"
             
//             />
//           </div>
//         </section>

//         <section className="row mb-5">
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100">
//               <div className="card-body">
//                 <h3 className="card-title">For Individuals</h3>
//                 <ul className="list-unstyled">
//                   <li>✔ Personal sustainability scoring</li>
//                   <li>✔ Eco-friendly product recommendations</li>
//                   <li>✔ Carbon footprint tracking</li>
//                 </ul>
//                 <Link to="/individualscore" className="btn btn-primary">
//                   Calculate Your Score
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100">
//               <div className="card-body">
//                 <h3 className="card-title">For Businesses</h3>
//                 <ul className="list-unstyled">
//                   <li>✔ Corporate sustainability assessment</li>
//                   <li>✔ ESG reporting tools</li>
//                   <li>✔ Supply chain impact analysis</li>
//                 </ul>
//                 <Link to="/enterprisescore" className="btn btn-primary">
//                   Assess Your Business
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100">
//               <div className="card-body">
//                 <h3 className="card-title">For Investors</h3>
//                 <ul className="list-unstyled">
//                   <li>✔ Green investment opportunities</li>
//                   <li>✔ Sustainable portfolio analysis</li>
//                   <li>✔ Impact investing metrics</li>
//                 </ul>
//                 <Link to="/investorscore" className="btn btn-primary">
//                   Evaluate Your Portfolio
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="text-center">
//           <h2>Join the Green Finance Revolution</h2>
//           <p className="mb-4">
//             Start your journey towards a more sustainable financial future
//             today.
//           </p>
//           <Link to="/register" className="btn btn-success btn-lg me-3">
//             Get Started
//           </Link>
//           <Link to="/login" className="btn btn-outline-success btn-lg">
//             Login
//           </Link>
//         </section>
//       </main>

//       <footer className="footer bg-dark text-light text-center py-3 fixed-bottom">
//         <p>&copy; 2024 EcoIncentive. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            EcoIncentive
          </Link>
          <div className="navbar-nav ms-auto">
            <Link to="/login" className="nav-link btn btn-outline-light me-2">
              Login
            </Link>
            <Link to="/register" className="nav-link btn btn-light">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <header className="hero text-center text-black py-5">
        <div className="container">
          <h2 className="display-4 fw-bold mt-5">Welcome to EcoIncentive</h2>
          {/* <p className="lead mb-5">Empowering sustainable finance for a greener future</p> */}
        </div>
      </header>

      <main className="flex-grow-1">
        <div className="container my-5">
          <section className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">What is EcoIncentive?</h2>
              <p className="lead">
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
                className="img-fluid rounded shadow"
              />
            </div>
          </section>

          <section className="row mb-5">
            {[
              {
                title: "For Individuals",
                items: [
                  "Personal sustainability scoring",
                  "Eco-friendly product recommendations",
                  "Carbon footprint tracking"
                ],
                link: "/individualscore",
                buttonText: "Calculate Your Score"
              },
              {
                title: "For Businesses",
                items: [
                  "Corporate sustainability assessment",
                  "ESG reporting tools",
                  "Supply chain impact analysis"
                ],
                link: "/enterprisescore",
                buttonText: "Assess Your Business"
              },
              {
                title: "For Investors",
                items: [
                  "Green investment opportunities",
                  "Sustainable portfolio analysis",
                  "Impact investing metrics"
                ],
                link: "/investorscore",
                buttonText: "Evaluate Your Portfolio"
              }
            ].map((card, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{card.title}</h3>
                    <ul className="list-unstyled flex-grow-1">
                      {card.items.map((item, i) => (
                        <li key={i}>✔ {item}</li>
                      ))}
                    </ul>
                    <Link to={card.link} className="btn btn-success mt-auto">
                      {card.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="text-center mb-5">
            <h2 className="mb-4">Join the Green Finance Revolution</h2>
            <p className="lead mb-4">
              Start your journey towards a more sustainable financial future today.
            </p>
            <Link to="/register" className="btn btn-success btn-lg me-3">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline-success btn-lg">
              Login
            </Link>
          </section>
        </div>
      </main>

      <footer className="bg-dark text-light text-center py-3 fixed-bottom">
        <p className="mb-0">&copy; 2024 EcoIncentive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

