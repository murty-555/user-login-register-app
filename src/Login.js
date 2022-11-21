import React, { useState } from "react";
import { Link } from "react-router-dom";
//import CreateUser from './CreateUser';
import "./Login.css";

const Login = () => {
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
          />
          <div>
            <button className="login-button" type="submit">
              Log In
            </button>
          </div>
        </form>
        <Link to="/register" className="register-link">
          New User? Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
