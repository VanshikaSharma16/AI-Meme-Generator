import React from 'react';
import { FaLightbulb, FaImage, FaShareAlt, FaMobileAlt, FaDesktop, FaTabletAlt } from 'react-icons/fa';

const StepsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Create Memes in 3 Easy Steps
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Perfectly optimized for all devices
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaLightbulb className="text-blue-600 text-2xl" />
              </div>
              <span className="text-gray-500 font-medium">Step 1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Enter Your Idea</h3>
            <p className="text-gray-600">
              Type your meme text or let AI suggest ideas.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaImage className="text-purple-600 text-2xl" />
              </div>
              <span className="text-gray-500 font-medium">Step 2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Customize Design</h3>
            <p className="text-gray-600">
              Choose templates or upload images.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-pink-500">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <FaShareAlt className="text-pink-600 text-2xl" />
              </div>
              <span className="text-gray-500 font-medium">Step 3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Share Instantly</h3>
            <p className="text-gray-600">
              One-click sharing to social media. Optimized for each platform.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-md">
            Start Creating Now
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            Works perfectly on phones, tablets, and computers
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default StepsPage;