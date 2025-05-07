import React from 'react';
import { FaArrowRight, FaMagic, FaRocket } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 sm:right-32 w-40 h-40 sm:w-48 sm:h-48 bg-indigo-400 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              <span className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm font-semibold flex items-center">
                <FaRocket className="mr-2 text-yellow-300" /> New Feature!
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Create <span className="text-yellow-300">Viral Memes</span> in Seconds
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90">
              Our AI-powered generator creates hilarious, share-worthy memes from your text. No design skills needed!
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Try It Free <FaArrowRight />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                <FaMagic /> See Examples
              </button>
            </div>
          </div>

          {/* Image/Preview placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="aspect-square bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-indigo-900 font-bold py-2 px-6 rounded-full shadow-lg text-sm sm:text-base">
                Trending Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;