import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah K.',
      role: 'Social Media Manager',
      rating: 5,
      content: 'Our engagement increased by 300% using these templates. The AI suggestions are genius!',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Mike T.',
      role: 'Content Creator',
      rating: 4,
      content: 'I create 10x faster now. The mobile app is perfectly optimized for quick meme-making.',
      avatar: '🧑‍🎨'
    },
    {
      id: 3,
      name: 'Digital Agency',
      role: 'Marketing Team',
      rating: 5,
      content: 'Our clients love the memes we create. It became our secret weapon for viral campaigns.',
      avatar: '👨‍👩‍👧‍👦'
    },
    {
      id: 4,
      name: 'Emma L.',
      role: 'Community Manager',
      rating: 5,
      content: 'Even our non-designers can create professional memes. The interface is so intuitive!',
      avatar: '👩‍💻'
    }
  ];

  // const nextTestimonial = () => {
  //   setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  // };

  // const prevTestimonial = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  // };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Creators Worldwide
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:grid grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-start mb-4">
        <span className="text-4xl mr-4">{testimonial.avatar}</span>
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              i < testimonial.rating ? (
                <FaStar key={i} className="text-yellow-400" />
              ) : (
                <FaRegStar key={i} className="text-yellow-400" />
              )
            ))}
          </div>
        </div>
      </div>
      <div className="relative pl-8">
        <FaQuoteLeft className="absolute left-0 top-0 text-gray-200 text-2xl" />
        <p className="text-gray-700 italic">{testimonial.content}</p>
      </div>
    </div>
  );
};

export default Testimonials;