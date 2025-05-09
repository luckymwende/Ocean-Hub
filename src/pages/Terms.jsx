import { Link } from 'react-router-dom';

export default function Terms() {
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
              Terms of Service
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
          {/* Acceptance of Terms */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-lg leading-8 text-ocean-blue-600">
              By accessing and using Ocean Hub, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          {/* User Accounts */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">2. User Accounts</h2>
            <p className="text-lg leading-8 text-ocean-blue-600">
              When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.
            </p>
          </div>

          {/* Platform Rules */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">3. Platform Rules</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              When using Ocean Hub, you agree to:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {[
                'Provide accurate information about fishing activities and marine conditions',
                'Respect other users and their rights',
                'Not engage in any illegal activities',
                'Not manipulate or abuse the platform',
                'Follow sustainable fishing practices',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/list-item">
                  <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace Guidelines */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">4. Marketplace Guidelines</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              For marketplace transactions:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {[
                'Sellers must accurately describe their products',
                'Products must be legally and sustainably sourced',
                'Buyers must complete payment for ordered items',
                'Ocean Hub is not responsible for transaction disputes',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/list-item">
                  <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Ownership */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">5. Content Ownership</h2>
            <p className="text-lg leading-8 text-ocean-blue-600">
              Users retain ownership of their content but grant Ocean Hub a license to use, display, and distribute it on the platform.
            </p>
          </div>

          {/* Prohibited Activities */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">6. Prohibited Activities</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-4">
              The following activities are strictly prohibited:
            </p>
            <ul className="space-y-3 text-lg leading-8 text-ocean-blue-600 list-none">
              {[
                'Posting false or misleading information',
                'Harassment of other users',
                'Promoting illegal fishing practices',
                'Violating intellectual property rights',
                'Creating multiple accounts for deceptive purposes',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/list-item">
                  <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Termination */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">7. Termination</h2>
            <p className="text-lg leading-8 text-ocean-blue-600">
              We reserve the right to terminate or suspend accounts that violate these terms or engage in harmful behavior.
            </p>
          </div>

          {/* Contact Information */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up text-center" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">8. Contact Information</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-6">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-6">
              Email: <a href="mailto:legal@oceanhub.co.ke" className="text-ocean-blue-500 hover:text-ocean-blue-700">legal@oceanhub.co.ke</a><br />
              Phone: <a href="tel:+254792635025" className="text-ocean-blue-500 hover:text-ocean-blue-700">+254 792635025</a><br />
              Address: Mombasa, Kenya
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group relative rounded-full bg-ocean-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-ocean-blue-600 hover:scale-105 transition-all duration-300 overflow-hidden"
                aria-label="Contact Ocean Hub for terms inquiries"
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