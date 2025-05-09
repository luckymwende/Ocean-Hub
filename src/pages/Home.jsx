import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      name: 'Sustainable Marketplace',
      description: 'Buy and sell ocean-related products from verified sustainable sources along Kenya\'s coast.',
      href: '/marketplace',
      icon: '🌊',
    },
    {
      name: 'Illegal Fishing Tracker',
      description: 'Report and track suspicious fishing activities in Kenya\'s territorial waters.',
      href: '/illegal-fishing-tracker',
      icon: '🎣',
    },
    {
      name: 'Community Forum',
      description: 'Connect with ocean enthusiasts along Kenya\'s coast, share knowledge, and discuss marine conservation.',
      href: '/community',
      icon: '🐠',
    },
    {
      name: 'Events Calendar',
      description: 'Join cleanup drives, workshops, and marine conservation events across Kenya\'s coastal regions.',
      href: '/events',
      icon: '🐋',
    },
    {
      name: 'Weather Monitor',
      description: 'Get real-time marine weather updates and fishing conditions for Kenya\'s coastal waters.',
      href: '/weather',
      icon: '🌅',
    },
    {
      name: 'Coastal Tourism',
      description: 'Explore Kenya’s coastal destinations, book hotels, guided tours, and sustainable activities.',
      href: '/tourism',
      icon: '🌴',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 deep-ocean-gradient">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm0 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
              Protecting Kenya's Oceans Together
            </h1>
            <p className="mt-6 text-xl leading-8 text-white max-w-xl drop-shadow">
              Join our community dedicated to sustainable ocean practices along Kenya's coast, marine conservation, and building a blue economy that benefits all Kenyans.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/marketplace"
                className="btn-primary rounded-full px-8 py-4 text-lg shadow-lg"
              >
                Get started
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-semibold leading-6 text-white hover:text-gray-200 transition-colors duration-300 flex items-center gap-2"
              >
                Learn more 
                <span aria-hidden="true" className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="relative seafoam-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
              Everything you need to support ocean conservation in Kenya
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our platform provides tools and resources to help you participate in building a sustainable blue economy along Kenya's coast.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={feature.name} 
                  className="feature-card w-full animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-deep-sea-500">
                    <span className="text-4xl">{feature.icon}</span>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link 
                        to={feature.href} 
                        className="text-sm font-semibold leading-6 text-ocean-blue-500 hover:text-ocean-blue-600 flex items-center gap-2 transition-all duration-300"
                        aria-label={`Learn more about ${feature.name}`}
                      >
                        Learn more 
                        <span aria-hidden="true" className="text-lg">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}