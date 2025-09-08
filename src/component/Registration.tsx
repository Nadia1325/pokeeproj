// src/components/Registration.tsx
import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ username, email, password });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 mx-auto mt-10">
      <h2 className="text-xl font-bold text-yellow-600">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="username">
            Enter Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter Username"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="email">
            Enter Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="password">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white rounded py-2 hover:bg-yellow-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
