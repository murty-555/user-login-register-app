import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Users from "./Users";
import Registration from "./Registration";
import Login from "./Login";

const DUMMY_USERS = [
  {
    username: "ABC",
    email: "abc@gmail.com",
    number: 1234567890,
  },
  {
    username: "ABC",
    email: "abc@gmail.com",
    number: 1234567890,
  },
  {
    username: "ABC",
    email: "abc@gmail.com",
    number: 1234567890,
  },
  {
    username: "ABC",
    email: "abc@gmail.com",
    number: 1234567890,
  },
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users" element={<Users users={DUMMY_USERS} />} />
      </Routes>
      <Registration />
      <Login />
    </>
  );
}

export default App;
