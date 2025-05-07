import React from 'react';
import { FiCheck, FiZap, FiAward, FiGlobe } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out basic features",
      cta: "Get Started",
      popular: false,
      features: [
        "5 meme generations per day",
        "Basic templates",
        "Watermarked downloads",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "For serious meme creators",
      cta: "Go Pro",
      popular: true,
      features: [
        "Unlimited meme generations",
        "Premium templates",
        "No watermarks",
        "HD downloads",
        "Priority support",
        "Custom fonts"
      ]
    },
    {
      name: "Team",
      price: "$24.99",
      period: "/month",
      description: "For content teams & agencies",
      cta: "Get Team Plan",
      popular: false,
      features: [
        "Everything in Pro",
        "5 team members",
        "Shared templates",
        "Brand kits",
        "Collaboration tools",
        "Analytics dashboard"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-purple-800 max-w-2xl mx-auto">
            Whether you're a casual creator or a meme powerhouse, we've got you covered.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 ${
                plan.popular 
                  ? 'border-2 border-yellow-400' 
                  : 'border border-purple-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-purple-900 px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 bg-white">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-900">{plan.name}</h3>
                  {plan.name === "Pro" && <FiZap className="ml-2 text-yellow-500" />}
                  {plan.name === "Team" && <FiGlobe className="ml-2 text-indigo-500" />}
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-purple-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-purple-600"> {plan.period}</span>
                  )}
                  <p className="text-purple-700 mt-1">{plan.description}</p>
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold mb-6 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 hover:from-yellow-300 hover:to-yellow-200'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800'
                  }`}
                >
                  {plan.cta}
                </button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-purple-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-purple-100">
            <h3 className="text-2xl font-bold text-purple-900">Feature Comparison</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="p-4 font-semibold text-purple-800">Feature</th>
                <th className="p-4 font-semibold text-purple-800">Starter</th>
                <th className="p-4 font-semibold text-purple-800">Pro</th>
                <th className="p-4 font-semibold text-purple-800">Team</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Meme Generations", "5/day", "Unlimited", "Unlimited"],
                ["Templates", "Basic", "Premium", "Premium+"],
                ["Watermarks", "✓", "✕", "✕"],
                ["HD Downloads", "✕", "✓", "✓"],
                ["Team Members", "1", "1", "Up to 5"],
                ["Support", "Community", "Priority", "24/7"]
              ].map(([feature, ...plans], i) => (
                <tr 
                  key={i} 
                  className={i % 2 === 0 ? "bg-purple-50" : "bg-white"}
                >
                  <td className="p-4 font-medium text-purple-900">{feature}</td>
                  {plans.map((plan, j) => (
                    <td key={j} className="p-4 text-purple-800">
                      {plan === "✓" ? (
                        <FiCheck className="text-green-500 inline" />
                      ) : plan === "✕" ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        plan
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-purple-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade at any time."
              },
              {
                question: "Is there a free trial?",
                answer: "The Starter plan is completely free forever. Paid plans come with a 7-day free trial."
              },
              {
                question: "How do team seats work?",
                answer: "Each team member gets their own login and access to shared resources."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-purple-800 mb-2">
                  {item.question}
                </h4>
                <p className="text-purple-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;