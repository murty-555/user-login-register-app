import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h2>User Authentication App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">User Profile</Link>
          </li>
          <li>
            <Link to="/users">Total Users</Link>
          </li>
          <li>
            <Link to="/">New User</Link>
          </li>
          <button>Logout</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
