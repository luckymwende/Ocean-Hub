import { Link } from 'react-router-dom';

export default function About() {
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
              About Ocean Hub
            </h1>
            <p className="mt-6 text-xl leading-8 text-ocean-blue-100 font-medium max-w-2xl mx-auto drop-shadow-lg">
              Empowering Kenya’s coastal communities to protect our marine ecosystems
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-ocean-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {/* Mission */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg leading-8 text-ocean-blue-600">
              We empower coastal communities through technology and education, promoting sustainable fishing, marine conservation, and economic growth via our blue economy initiatives.
            </p>
          </div>

          {/* What We Do */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">What We Do</h2>
            <ul className="space-y-4 text-lg leading-8 text-ocean-blue-600 list-none">
              {[
                'Connect sustainable seafood producers with conscious consumers',
                'Monitor and report illegal fishing activities',
                'Provide real-time weather and marine condition updates',
                'Organize community events and beach cleanup drives',
                'Facilitate knowledge sharing and best practices',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/list-item">
                  <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Impact */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg leading-8 text-ocean-blue-600">
              {[
                { text: 'Reduced illegal fishing by 30%', value: '30%' },
                { text: 'Connected 100+ sustainable market place for vendors and consumers', value: '100+' },
                { text: 'Organized 50+ community cleanup events', value: '50+' },
                { text: 'Built a network of 1000+ conservationists', value: '1000+' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-ocean-blue-500 animate-count-up" data-value={item.value}>{item.value}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Us */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-semibold text-ocean-blue-900 mb-6">Join Us</h2>
            <p className="text-lg leading-8 text-ocean-blue-600 mb-8">
              Whether you’re a fisherman, conservationist, or ocean lover, there’s a place for you in our community. Together, we can build a sustainable future for Kenya’s marine ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/signup"
                className="group relative rounded-full bg-ocean-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-ocean-blue-600 hover:scale-105 transition-all duration-300 overflow-hidden"
                aria-label="Join Ocean Hub community"
              >
                <span className="relative z-10">Join Now</span>
                <span className="absolute inset-0 bg-ocean-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <Link
                to="/founders"
                className="text-lg font-semibold text-ocean-blue-600 hover:text-ocean-blue-700 flex items-center gap-2 group/link"
                aria-label="Learn about our founder"
              >
                Meet Our Founder
                <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}