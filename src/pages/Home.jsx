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
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue-600 to-deep-sea-900">
          <div className="absolute inset-0 bg-wave-pattern opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
              Protecting Kenya's Oceans Together
            </h1>
            <p className="mt-6 text-xl leading-8 text-ocean-blue-50 max-w-xl drop-shadow">
              Join our community dedicated to sustainable ocean practices along Kenya's coast, marine conservation, and building a blue economy that benefits all Kenyans.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/marketplace"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-ocean-blue-600 shadow-lg hover:bg-ocean-blue-50 transition-colors duration-300"
              >
                Get started
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-semibold leading-6 text-white hover:text-ocean-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                Learn more 
                <span aria-hidden="true" className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="relative bg-gradient-to-b from-ocean-blue-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ocean-blue-900 sm:text-4xl lg:text-5xl">
              Everything you need to support ocean conservation in Kenya
            </h2>
            <p className="mt-6 text-lg leading-8 text-ocean-blue-700">
              Our platform provides tools and resources to help you participate in building a sustainable blue economy along Kenya's coast.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div 
                  key={feature.name} 
                  className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-ocean-blue-900/5 hover:bg-ocean-blue-50 transition-all duration-300 hover:shadow-xl"
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-ocean-blue-900">
                    <span className="text-4xl">{feature.icon}</span>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-ocean-blue-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link 
                        to={feature.href} 
                        className="text-sm font-semibold leading-6 text-ocean-blue-600 hover:text-ocean-blue-500 flex items-center gap-2 group-hover:translate-x-1 transition-all duration-300"
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