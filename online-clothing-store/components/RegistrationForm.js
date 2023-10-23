// components/RegistrationForm.js
import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      login: '',
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
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Registration successful!');
        } else {
          alert('Registration failed. Please try again.');
        }
      });
  };

  render() {
    return (
      <div className="max-w-md my-10 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4 my-10">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-md"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="login"
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
