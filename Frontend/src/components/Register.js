import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'Developer' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log('User registered:', response.data);
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="Developer">Developer</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
