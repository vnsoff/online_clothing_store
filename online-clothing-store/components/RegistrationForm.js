// components/RegistrationForm.js
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { response } from 'express';

function RegistrationForm () {

  const[email,setEmail] = useState("");
  const[username,setUsername]  = useState("");
  const[password,setPassword] = useState("");
  const[loginStatus,setLoginStatus] = useState("");
  const[registerStatus,setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("https://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      }
      else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }
  const login = (e) => {
    e.preventDefault();
    Axios.post("https://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      }
      else {
        setLoginStatus(response.data[0].email);
      }
    })
  }

    return (
      <div className='container'>
        <div className='loginForm'>
          <form>
            <h4>Login</h4>
            <label htmlFor="username">Username</label>
            <input className="textInput" type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter your username" required/>
            <label htmlFor="password">Password</label>
            <input className="textInput" type="text" onChange={(e)=>{setPassword(e.target.value)}} name="password"placeholder="Enter your password" required/>
            <input className='button' type='submit' onClick={login} value="Login"/>
          </form>
        </div>
        <div className='registrationForm'>
          <form>
          <h4>Register</h4>
          <label htmlFor="email">Email Adress</label>
          <input className="textInput" type="text"onChange={(e)=> {setEmail(e.target.value)}} name="email"placeholder="Enter your Email Adress" required/>
          <label htmlFor="username">Username</label>
          <input className="textInput" type="text" onChange={(e)=> {setUsername(e.target.value)}} name="username"placeholder="Enter your username" required/>
          <label htmlFor="password">Password</label>
          <input className="textInput" type="text" name="password"placeholder="Enter your password" required/>
          <input className='button' type='submit' onClick={register} value="Login"/>
          </form>
        </div>
      </div>      
    );
}

export default RegistrationForm;