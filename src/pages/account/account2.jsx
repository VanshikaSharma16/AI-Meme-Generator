import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here (e.g., API call, auth handling)
    console.log('Login submitted:', formData);
    // Navigate to homepage after login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-purple-600 text-center mb-8">Log in to continue</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-purple-800 mb-1">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-purple-800 mb-1">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-200 transition-all shadow-lg"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-purple-700">
            Don’t have an account?{' '}
            <Link to="/account" className="text-purple-600 font-semibold hover:text-purple-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
