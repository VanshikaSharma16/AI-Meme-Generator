import React, { useState, useEffect } from 'react';
import { FiUpload, FiSearch, FiFilter, FiAlertCircle } from 'react-icons/fi';

const Templates = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Meme templates data with categories
  const memeTemplates = [
    {
      id: 1,
      name: "Distracted Boyfriend",
      image: "https://i.imgflip.com/1bij.jpg",
      thumbnail: "https://i.imgflip.com/1bij.jpg?width=300",
      used: 1250000,
      category: "popular",
      tags: ["reaction", "relationships"]
    },
    {
      id: 2,
      name: "Drake Hotline Bling",
      image: "https://i.imgflip.com/1g8my.jpg",
      thumbnail: "https://i.imgflip.com/1g8my.jpg?width=300",
      used: 980000,
      category: "popular",
      tags: ["approval", "decision"]
    },
    {
      id: 3,
      name: "Two Buttons",
      image: "https://i.imgflip.com/1bgw.jpg",
      thumbnail: "https://i.imgflip.com/1bgw.jpg?width=300",
      used: 750000,
      category: "reaction",
      tags: ["choice", "dilemma"]
    },
    {
      id: 4,
      name: "Expanding Brain",
      image: "https://i.imgflip.com/1ihzfe.jpg", // Intentionally malformed for demo
      thumbnail: "https://i.imgflip.com/1ihzfe.jpg?width=300",
      used: 620000,
      category: "brain",
      tags: ["intelligence", "evolution"]
    },
    {
      id: 5,
      name: "Change My Mind",
      image: "https://i.imgflip.com/1h7in3.jpg",
      thumbnail: "https://i.imgflip.com/1h7in3.jpg?width=300",
      used: 540000,
      category: "debate",
      tags: ["opinion", "argument"]
    },
    {
      id: 6,
      name: "Woman Yelling at Cat",
      image: "https://i.imgflip.com/1h7in3.jpg",
      thumbnail: "https://i.imgflip.com/1h7in3.jpg?width=300",
      used: 890000,
      category: "animals",
      tags: ["argument", "cat"]
    }
  ];

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter templates based on search term
  useEffect(() => {
    const results = memeTemplates.filter(template =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredTemplates(results);
  }, [searchTerm]);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (e, template) => {
    console.error(`Error loading image for ${template.name}`);
    e.target.src = template.thumbnail || '/fallback-meme.png';
    e.target.onerror = null; // Prevent infinite loop
    setLoadedImages(prev => ({ ...prev, [template.id]: true }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-gradient-to-r from-purple-100 to-indigo-100 animate-pulse"></div>
                <div className="p-4 space-y-2">
                  <div className="h-6 bg-purple-100 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-purple-100 rounded animate-pulse w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <FiAlertCircle className="mx-auto text-6xl text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-purple-900 mb-2">Error Loading Templates</h2>
            <p className="text-purple-700 mb-6">{error.message}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-800 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 mb-4">
            Meme Templates
          </h2>
          <p className="text-lg text-purple-800 max-w-3xl mx-auto mb-8">
            Choose from popular templates or upload your own image to create the perfect meme.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-purple-400" />
            </div>
            <input
              type="text"
              placeholder="Search templates or tags..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button className="p-1 text-purple-500 hover:text-purple-700">
                <FiFilter />
              </button>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative">
                  {/* Loading skeleton */}
                  {!loadedImages[template.id] && (
                    <div className="w-full h-64 bg-gradient-to-r from-purple-100 to-indigo-100 animate-pulse"></div>
                  )}
                  
                  <img 
                    src={template.thumbnail || template.image}
                    alt={template.name}
                    className={`w-full h-64 object-cover ${loadedImages[template.id] ? 'block' : 'hidden'}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(template.id)}
                    onError={(e) => handleImageError(e, template)}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{template.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {template.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs bg-purple-600/80 text-white px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-purple-700">
                      Used {template.used.toLocaleString()} times
                    </span>
                    <button 
                      className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-indigo-800 transition-all group-hover:shadow-lg"
                      onClick={() => console.log('Selected template:', template.id)}
                    >
                      Use This Template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-purple-800 mb-2">No templates found</h3>
            <p className="text-purple-600 mb-6">Try a different search term</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-800 transition-all"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Upload Your Own Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-purple-100">
          <div className="text-center">
            <div className="mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
              <FiUpload className="text-3xl text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Create Your Own Template</h3>
            <p className="text-purple-700 mb-6 max-w-2xl mx-auto">
              Upload your own image to create a custom meme template that you can share with the community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:from-yellow-300 hover:to-yellow-200 transition-all transform hover:scale-105">
                Upload Image
              </button>
              <button className="border-2 border-purple-600 text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-all">
                Learn How To Make Great Memes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;