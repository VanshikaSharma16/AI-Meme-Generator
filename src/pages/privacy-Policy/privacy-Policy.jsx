import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 shadow-2xl shadow-purple-900/20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          <Section title="1. Information We Collect">
            <p>When you use our AI Meme Generator, we may collect:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-purple-400">
              <li>Images/text you upload for meme generation</li>
              <li>Device information (browser type, IP address)</li>
              <li>Usage patterns and interaction data</li>
              <li>Generated meme preferences</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Data">
            <p>Your information helps us:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-purple-400">
              <li>Generate and deliver personalized memes</li>
              <li>Improve our AI humor algorithms</li>
              <li>Prevent abuse and spam</li>
              <li>Analyze meme trends across our community</li>
            </ul>
          </Section>

          <Section title="3. Data Storage & Security">
            <div className="space-y-3">
              <p>We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-purple-400">
                <li>Meme content is processed in memory and not permanently stored</li>
                <li>Metadata encrypted and automatically deleted after 30 days</li>
                <li>Regular security audits and penetration testing</li>
              </ul>
            </div>
          </Section>

          <Section title="4. Third-Party Services">
            <div className="space-y-3">
              <p>We work with trusted partners:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-purple-400">
                <li>AI model providers (meme generation APIs)</li>
                <li>Cloudflare for DDoS protection</li>
                <li>Google Analytics (anonymous data only)</li>
              </ul>
              <p className="text-sm text-gray-400 mt-3">
                All third-parties are GDPR and CCPA compliant.
              </p>
            </div>
          </Section>

          <Section title="5. Your Rights">
            <div className="space-y-3">
              <p>Under privacy laws, you can:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-purple-400">
                <li>Request access to your data</li>
                <li>Ask for deletion of personal information</li>
                <li>Opt-out of data collection (via settings)</li>
                <li>Export your meme generation history</li>
              </ul>
            </div>
          </Section>

          <Section title="6. Contact Our Privacy Team">
            <div className="space-y-2">
              <p>For any privacy concerns:</p>
              <div className="flex items-center mt-3">
                <svg className="w-5 h-5 text-pink-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:privacy@ai-meme-generator.com" className="text-pink-400 hover:text-pink-300 transition">
                  privacy@ai-meme-generator.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+1 (555) MEME-HELP</span>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="group">
    <div className="flex items-start">
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-full mr-4 mt-1">
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
      </div>
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-3">
          {title}
        </h2>
        <div className="text-gray-300 space-y-3">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;