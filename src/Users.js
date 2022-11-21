import classes from "./Users.module.css";

function Users({ users }) {
  return (
    <div className={classes["users-page"]}>
      <div className={classes.users}>
        {users.map((user, index) => (
          <div key={index} className={classes.user}>
            <h3>{user.username}</h3>
            <h4>{user.email}</h4>
            <p>{user.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
