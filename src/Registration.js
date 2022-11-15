import React, { useState } from "react";
//import { Form, Alert } from "react-bootstrap";

import "./Registration.css"

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
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="container">
          
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label><br/>
                <input
                  type="text"
                  className="s"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label><br/>
                <input
                  type="email"
                  className="s"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label><br/>
                <input
                  type="password"
                  className="s"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label><br/>
                <input
                  type="Phone"
                  className="s"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              
                <br/>
              <button type="submit">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
              
            </form>
          
        </div>
    
    </>
  );
}

export default Registration;