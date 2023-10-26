// components/RegistrationForm.js
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

function RegistrationForm () {
/* class RegistrationForm extends Component { */
/*   constructor() {
    super();
    this.state = {
      username: '', // Changed 'name' to 'username'
      email: '',    // Changed 'login' to 'email'
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Registration successful!');
        } else {
          alert('Registration failed. Please try again.');
        }
        return response.json();
      })
      .then((data) => {
        // You can further process the response data if needed.
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };
 */

  const[email,setEmail] = useState("");
  const[username,setUsername]  = useState("");
  const[password,setPassword] = useState("");
  const[loginStatus,setLoginStatus] = useState("");
  const[registerStatus,setRegisterStatus] = useState("");

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
          <input className="textInput" type="text" name="email"placeholder="Enter your Email Adress" required/>
          <label htmlFor="username">Username</label>
          <input className="textInput" type="text" name="username"placeholder="Enter your username" required/>
          <label htmlFor="password">Password</label>
          <input className="textInput" type="text" name="password"placeholder="Enter your password" required/>
          <input className='button' type='submit' onClick={register} value="Login"/>
          </form>
        </div>
      </div>      
    );
}

export default RegistrationForm;