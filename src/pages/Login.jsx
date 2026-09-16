import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <div className="auth-icon">🌾</div>
          <h1>Welcome Back</h1>
          <p>Login to your Crop Marketplace account</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="mobile no."
              placeholder="Enter your mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Login;