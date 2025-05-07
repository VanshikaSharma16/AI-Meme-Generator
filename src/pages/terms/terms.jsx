import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 shadow-2xl shadow-purple-900/20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
            Terms of Service
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          <Section title="1. Acceptance of Terms">
            <p>
              By using AI Meme Generator ("Service"), you agree to these legally binding terms. If you're using the Service for an organization, you're agreeing on their behalf.
            </p>
            <div className="mt-4 p-4 bg-gray-700/50 rounded-lg border-l-4 border-purple-500">
              <p className="font-medium text-purple-300">Note:</p>
              <p className="text-sm">Creating an account or generating memes constitutes acceptance of these terms.</p>
            </div>
          </Section>

          <Section title="2. AI Meme Generation Rules">
            <p>When using our meme generator, you agree not to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-purple-400">
              <li>Generate harmful, abusive, or NSFW content</li>
              <li>Create memes that violate copyrights or trademarks</li>
              <li>Use the service for political misinformation</li>
              <li>Automate meme generation via scripts/bots</li>
              <li>Impersonate individuals or organizations</li>
            </ul>
          </Section>

          <Section title="3. Content Ownership">
            <div className="space-y-3">
              <p>Regarding your generated memes:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-purple-400">
                <li>You retain rights to original content you input</li>
                <li>AI-generated elements are licensed for personal/commercial use</li>
                <li>We may showcase popular memes (with attribution) in our gallery</li>
              </ul>
              <p className="text-sm text-gray-400 mt-3">
                By uploading content, you grant us processing rights to generate your memes.
              </p>
            </div>
          </Section>

          <Section title="4. Prohibited Uses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700/30 p-4 rounded-lg border border-purple-900/50">
                <h3 className="font-semibold text-pink-400 mb-2">Commercial Restrictions</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm marker:text-purple-400">
                  <li>No reselling generated memes as NFTs</li>
                  <li>No bulk meme generation services</li>
                  <li>No advertising automation</li>
                </ul>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg border border-purple-900/50">
                <h3 className="font-semibold text-pink-400 mb-2">Community Guidelines</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm marker:text-purple-400">
                  <li>No harassment via generated content</li>
                  <li>No deepfake creation</li>
                  <li>No spam generation</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. Service Modifications">
            <p>We may:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-purple-400">
              <li>Change features or pricing without notice</li>
              <li>Limit meme generation during high traffic</li>
              <li>Remove offensive content at our discretion</li>
            </ul>
          </Section>

          <Section title="6. Liability Disclaimer">
            <div className="space-y-3">
              <p>AI Meme Generator is provided "as is" without warranties. We're not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-purple-400">
                <li>Meme content created by users</li>
                <li>Service interruptions</li>
                <li>Third-party sharing of your memes</li>
              </ul>
              <p className="text-sm text-pink-300 mt-3">
                Maximum liability is limited to your last month's subscription fee (if applicable).
              </p>
            </div>
          </Section>

          <Section title="7. Governing Law">
            <p>
              These terms are governed by California law. Any disputes must be resolved in San Francisco courts.
            </p>
          </Section>

          <div className="pt-6 border-t border-purple-900/50">
            <p className="text-center text-gray-400 text-sm">
              By using AI Meme Generator, you confirm you're at least 13 years old and agree to our{' '}
              <Link to="/privacy" className="text-purple-400 hover:text-pink-400 transition">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced section component with interactive elements
const Section = ({ title, children }) => (
  <section className="group">
    <div className="flex items-start">
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-full mr-4 mt-1 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition">
        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-pink-400 transition"></div>
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

export default Terms;