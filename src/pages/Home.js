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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <Link to="/login" className="nav-link btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/register" className="nav-link btn btn-light me-2">
                Register
              </Link>
              <a href="https://greennexus.onrender.com/" target="_blank" rel="noopener noreferrer" className="nav-link btn btn-light me-2">
                CarbonEmissionCalculator
              </a>
              <a href="https://greennexus-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="nav-link btn btn-outline-light">
                EnterpriseReport
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to EcoIncentive</h1>
          <p className="hero-subtitle">Empowering sustainable financial decisions</p>
        </div>
      </header>

      <main className="flex-grow-1">
        <div className="container my-5">
          <section className="row mb-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">What is EcoIncentive?</h2>
              <p className="lead">
                EcoIncentive is a cutting-edge fintech platform that helps
                individuals and businesses measure, track, and improve their
                environmental impact. By analyzing financial transactions and
                sustainability practices, we provide personalized green scores and
                actionable insights.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/green.jpg"
                alt="Green Finance"
                className="img-fluid rounded shadow eco-image"
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
      <div className="card h-100 shadow">
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{card.title}</h3>
          <ul className="list-unstyled flex-grow-1">
            {card.items.map((item, i) => (
              <li key={i} className="mb-2">✔ {item}</li>
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