// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        email: newEmail,
        password: newPassword,
      };
      
      const response = await axios.post('https://fakestoreapi.com/users', newUser);
      
      if (response.status === 201) {
        alert('Signup successful! You can now login with your new credentials.');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-red-600">Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
