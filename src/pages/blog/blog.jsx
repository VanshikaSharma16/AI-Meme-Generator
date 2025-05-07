import React from 'react';
import { FiCalendar, FiClock, FiTag, FiArrowRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Meme Trends Dominating 2023",
      excerpt: "Discover the hottest meme formats and trends that are taking over social media this year.",
      date: "June 15, 2023",
      readTime: "5 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 2,
      title: "How to Make Your Memes Go Viral",
      excerpt: "Learn the secret sauce behind viral memes and how to increase your content's reach.",
      date: "May 28, 2023",
      readTime: "7 min read",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "The Psychology Behind Meme Humor",
      excerpt: "Why do we find memes funny? Explore the psychological principles that make memes so shareable.",
      date: "April 10, 2023",
      readTime: "8 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80"
    },
    {
      id: 4,
      title: "AI Meme Generation: The Future of Content",
      excerpt: "How artificial intelligence is revolutionizing meme creation and what it means for creators.",
      date: "March 22, 2023",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
  ];

  const popularTags = ["Memes", "Trends", "Viral", "AI", "Humor", "Social Media", "Templates", "Guide"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 mb-4">
            AI Meme Generator Blog
          </h1>
          <p className="text-lg text-purple-800 max-w-2xl mx-auto">
            Tips, trends, and insights about meme culture and AI-powered content creation
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Post */}
            <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                alt="Featured Post" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                  <span className="text-sm text-purple-600 ml-4">
                    <FiCalendar className="inline mr-1" /> June 30, 2023
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-purple-900 mb-2">
                  The Ultimate Guide to AI Meme Creation
                </h2>
                <p className="text-purple-700 mb-4">
                  Everything you need to know about creating hilarious, shareable memes using AI tools and techniques.
                </p>
                <Link 
                  to="/blog/ultimate-guide-ai-meme-creation"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Read more <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-1" /> {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{post.title}</h3>
                    <p className="text-purple-700 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <Link 
                        to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} 
                        className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center"
                      >
                        Read more <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <button className="px-3 py-1 rounded-l-md bg-purple-600 text-white font-medium">1</button>
                <button className="px-3 py-1 bg-white text-purple-600 hover:bg-purple-50 font-medium">2</button>
                <button className="px-3 py-1 bg-white text-purple-600 hover:bg-purple-50 font-medium">3</button>
                <button className="px-3 py-1 rounded-r-md bg-white text-purple-600 hover:bg-purple-50 font-medium">Next</button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-purple-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 text-purple-600">
                  <FiSearch />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-purple-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {["Trends", "Tips", "Tutorials", "Psychology", "Technology", "Interviews"].map((category) => (
                  <li key={category}>
                    <Link 
                      to={`/blog/category/${category.toLowerCase()}`} 
                      className="flex items-center justify-between text-purple-700 hover:text-purple-900"
                    >
                      <span>{category}</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        24
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog/tag/${tag.toLowerCase()}`}
                    className="inline-flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200"
                  >
                    <FiTag className="mr-1" /> {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
