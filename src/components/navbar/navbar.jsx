import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 p-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0">
          <span className="text-4xl">🤣</span>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
            AI Meme Generator
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/trendingMeme"
            className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors"
          >
            <span className="font-semibold">Create</span>
          </Link>

          <Link
            to="/templates"
            className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors"
          >
            <span className="font-semibold">Templates</span>
          </Link>

          <div className="hidden md:block w-px h-8 bg-white bg-opacity-30"></div>

          <Link
            to="/account"
            className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors"
          >
            <span className="text-xl">👤</span>
            <span className="font-semibold">Account</span>
          </Link>

          <Link
            to="/pricing"
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Premium
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
