import React, { useState } from 'react';
import { 
  FaSearch, 
  FaQuestionCircle, 
  FaEnvelope, 
  FaChevronDown, 
  FaChevronUp,
  FaStar,
  FaRegStar,
  FaPhoneAlt,
  FaComments
} from 'react-icons/fa';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({});

  const faqCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'templates', name: 'Templates', icon: '🖼️' },
    { id: 'account', name: 'Account', icon: '👤' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I create my first meme?',
      answer: 'Click the "Create" button, select a template or upload your image, add text, and click "Generate". You can then download or share your meme.',
      category: 'getting-started',
      helpful: 42,
      unhelpful: 3
    },
    {
      id: 2,
      question: 'Can I use my own images?',
      answer: 'Yes! Click "Upload Image" when creating a meme. We support JPG, PNG, and GIF formats up to 10MB.',
      category: 'templates',
      helpful: 38,
      unhelpful: 2
    },
    // Add more FAQs here
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id) => {
    setExpandedFaqs(prev =>
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Thanks for reaching out! We'll contact you soon.");
      setContactForm({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeedback = (faqId, isHelpful) => {
    setFeedback(prev => ({
      ...prev,
      [faqId]: isHelpful
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
            <FaQuestionCircle className="text-blue-600 text-2xl mr-2" />
            <span className="text-blue-600 font-medium">Help Center</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or contact our support team
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                      activeCategory === 'all' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">📚</span> All Topics
                  </button>
                </li>
                {faqCategories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeCategory === category.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-2/4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              {/* Search Bar */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search help articles..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <h2 className="font-bold text-lg mb-6">
                {activeCategory === 'all' 
                  ? 'Frequently Asked Questions' 
                  : `${faqCategories.find(c => c.id === activeCategory)?.name} Questions`}
              </h2>
              
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map(faq => (
                    <div key={faq.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full text-left font-medium text-gray-900 hover:text-blue-600 focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        {expandedFaqs.includes(faq.id) ? (
                          <FaChevronUp className="text-gray-500" />
                        ) : (
                          <FaChevronDown className="text-gray-500" />
                        )}
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="mt-2 text-gray-600">
                          <p>{faq.answer}</p>
                          <div className="mt-4 flex items-center space-x-4">
                            <span className="text-sm text-gray-500">Was this helpful?</span>
                            <button 
                              onClick={() => handleFeedback(faq.id, true)}
                              className={`flex items-center text-sm ${feedback[faq.id] === true ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                              <FaStar className="mr-1" /> Yes ({faq.helpful})
                            </button>
                            <button 
                              onClick={() => handleFeedback(faq.id, false)}
                              className={`flex items-center text-sm ${feedback[faq.id] === false ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                              <FaRegStar className="mr-1" /> No ({faq.unhelpful})
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No results found for your search</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
              <h2 className="font-bold text-lg mb-4 flex items-center">
                <FaEnvelope className="text-blue-600 mr-2" />
                Contact Support
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-4">Other Ways to Connect</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-gray-600">1-800-MEME-HELP</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaComments className="text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;