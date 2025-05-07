import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-fuchsia-700 to-pink-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🤩</span>
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-white hover:from-amber-200 hover:to-gray-100 transition-all">
                AI Meme Magic
              </Link>
            </div>
            <p className="text-pink-100 mb-4">
              The most powerful AI meme generator on the internet. Create, share, and go viral!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-pink-100 hover:text-white text-2xl transition-colors"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-100 hover:text-white text-2xl transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://github.com/yourrepo" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-pink-100 hover:text-white text-2xl transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-400 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/templates" className="text-pink-100 hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/trendingMemes" className="text-pink-100 hover:text-white transition-colors">
                  Trending Memes
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-pink-100 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-pink-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-400 pb-2">Support</h3>
            <ul className="space-y-2">
              <li>
              <Link to="/helpCenter" className="text-pink-100 hover:text-white transition-colors">
                Help Center
              </Link>
              </li>
              <li>
                <Link to="/contactUs" className="text-pink-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-Policy" className="text-pink-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-pink-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-pink-500 text-center text-pink-200">
          <p className="flex items-center justify-center">
            Made by AI Meme Team © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;