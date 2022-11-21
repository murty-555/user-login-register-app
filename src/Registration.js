import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Registration.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem("sanskarPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Full Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <label htmlFor="number">Phone No.</label>
          <input
            type="Phone"
            id="number"
            placeholder="Enter contact number"
            onChange={(event) => setPhone(event.target.value)}
          />
          <div>
            <button className="register-button" type="submit">
              Register
            </button>
          </div>
        </form>
        <Link to="/" className="login-link">
          Already registered? Log in
        </Link>
      </div>
    </div>
  );
}

export default Registration;
