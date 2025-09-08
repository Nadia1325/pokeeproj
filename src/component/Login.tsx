// src/components/LoginModal.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold text-yellow-600">Login</h2>
        <p className="text-gray-700 mb-4">Get access to your Orders, Wishlist and Recommendations.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="username">
              Enter Username/Email address
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter Username/Email address"
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
          
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-600">Remember me</label>
          </div>

          <div className="text-right mb-4">
            <button 
              type="button" 
              onClick={() => navigate('/register')}
              className="text-yellow-600 hover:underline"
            >
              Create an Account
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white rounded py-2 hover:bg-yellow-500"
          >
            LOG IN
          </button>
        </form>

        <button onClick={onClose} className="mt-4 text-gray-600 hover:underline">
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;