// src/App.js
import React, { useState } from "react";
import "./User.css";
import axios from "axios";

const User = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      console.log("1");
      const res = await axios.post(
        "http://localhost:8000/api/user/create-user",
        formData
      );
      console.log("2");
      console.log(res.data);
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
