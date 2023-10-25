// components/RegistrationForm.js
import React, { Component } from 'react';
import { useState } from 'react';
import Axios from 'axios';

//function App () {}
class RegistrationForm extends Component {
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

  render() {
    return (
      <div className="max-w-md my-10 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4 my-10">
            <input
              type="text"
              name="username" // Changed 'name' to 'username'
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-md"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="email" // Changed 'login' to 'email'
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md"
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover-bg-blue-600 text-white rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
