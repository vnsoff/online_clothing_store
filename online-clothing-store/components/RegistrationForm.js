// components/Register.js

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
    // Send a POST request to the server with the form data
    fetch('/register.php', {
      method: 'POST',
      body: JSON.stringify(this.state),
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="login"
          placeholder="Username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;