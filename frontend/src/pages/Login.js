import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // State to store the login status
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the fakestore API
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;

      // Check if the email and password match any user in the response
      const loggedInUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (loggedInUser) {
        // Set the login status to 'success'
        setLoginStatus('success');
        // Redirect to the homepage on successful login
        navigate('/');
      } else {
        // Set the login status to 'error'
        setLoginStatus('error');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Set the login status to 'error' in case of an error
      setLoginStatus('error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px] h-[400px]">
        <div className="flex justify-start gap-4">
          <FiShoppingCart className="text-4xl text-[#f12b2c]" />
          <h1 className="text-3xl font-semibold mb-4 text-[#f12b2c]">Login</h1>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#f12b2c] hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

          {/* Conditionally render the login status message */}
          {loginStatus === 'success' && (
            <div className="text-green-600 mt-2">Login successful!</div>
          )}
          {loginStatus === 'error' && (
            <div className="text-red-600 mt-2">Login failed. Invalid email or password.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
