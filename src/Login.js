import React,{useState} from 'react';
//import CreateUser from './CreateUser';
import './Login.css';



const Login = (e) =>{
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    
   
    const handleSubmit = () => {
        e.preventDefault();
        console.log(username); 
    }
  return (
    <center>
    <div className='auth-form-container'>
            <h2>Login</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">UserName</label>
            <input value={username}  onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" placeholder="USERNAME" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <p> 
          Register
        </p>
        <p>
          Home
        </p>
    </div>
    </center>
  )
  }

export default Login;