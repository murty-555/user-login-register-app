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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Total Users</Link>
          </li>
          <li>
            <Link to="/register">New User</Link>
          </li>
          <Link to="/">
            <button>Logout</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
