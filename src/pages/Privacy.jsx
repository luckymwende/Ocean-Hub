import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Header Section */}
      <div className="relative py-24 sm:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/ocean-bg.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue-700/70 to-deep-sea-900/70 animate-wave-bg">
          <div className="absolute inset-0 bg-wave-pattern opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-ocean-blue-200 to-white drop-shadow-xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl leading-8 text-ocean-blue-100 font-medium drop-shadow-lg">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-ocean-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {/* Information We Collect */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">1. Information We Collect</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {['Name and contact information', 'Account credentials', 'Profile information', 'Transaction data', 'Communication preferences'].map(
                (item, index) => (
                  <li key={index} className="flex items-start gap-3 group/list-item">
                    <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {['Provide and maintain our services', 'Process your transactions', 'Send you updates and notifications', 'Improve our platform', 'Comply with legal obligations'].map(
                (item, index) => (
                  <li key={index} className="flex items-start gap-3 group/list-item">
                    <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">3. Information Sharing</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {['Service providers who assist in our operations', 'Law enforcement when required by law', 'Other users when you choose to share publicly'].map(
                (item, index) => (
                  <li key={index} className="flex items-start gap-3 group/list-item">
                    <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Data Security */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">4. Data Security</h2>
            <p className="text-lg leading-8 text-ocean-blue-600">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">5. Your Rights</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {['Access your personal information', 'Correct inaccurate data', 'Request deletion of your data', 'Opt-out of marketing communications'].map(
                (item, index) => (
                  <li key={index} className="flex items-start gap-3 group/list-item">
                    <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up text-center" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">6. Contact Us</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-6">
              Email: <a href="mailto:privacy@oceanhub.co.ke" className="text-ocean-blue-500 hover:text-ocean-blue-700">privacy@oceanhub.co.ke</a><br />
              Phone: <a href="tel:+254792635025" className="text-ocean-blue-500 hover:text-ocean-blue-700">+254 792635025</a><br />
              Address: Mombasa, Kenya
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group relative rounded-full bg-ocean-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-ocean-blue-600 hover:scale-105 transition-all duration-300 overflow-hidden"
                aria-label="Contact Ocean Hub for privacy inquiries"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-ocean-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <Link
                to="/about"
                className="text-lg font-semibold text-ocean-blue-600 hover:text-ocean-blue-700 flex items-center gap-2 group/link"
                aria-label="Learn more about Ocean Hub"
              >
                About Us
                <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}