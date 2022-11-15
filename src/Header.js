import React from "react";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h2>User Authentication App</h2>
      <nav>
        <ul>
          <li>
            <a href="/">User Profile</a>
          </li>
          <li>
            <a href="/">Total Users</a>
          </li>
          <li>
            <a href="/">New User</a>
          </li>
          <button>Logout</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
