import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import GreenScore from "./pages/GreenScore";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import IndividualScore from "./pages/IndividualScore";
import EnterpriseScore from "./pages/EnterpriseScore";
import InvestorScore from "./pages/InvestorScore";
import './styles/global.css';

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/greenscore" element={<GreenScore />} />
          <Route path="/individualscore" element={<IndividualScore />} />
          <Route path="/enterprisescore" element={<EnterpriseScore />} />
          <Route path="/investorscore"element={<InvestorScore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};
// ReactDOM.render(
//     <AuthProvider>
//         <App />
//     </AuthProvider>,
//     document.getElementById('root')
// );

export default App;
