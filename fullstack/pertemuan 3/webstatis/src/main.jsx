import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
            </li>

            <li>
              <Link to="/products" className="text-white">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
