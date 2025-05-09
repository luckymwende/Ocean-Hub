 import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tourism() {
  const destinations = [
    {
      name: 'Mombasa',
      image: '/assets/mombasa.jpg',
      description: 'A vibrant coastal city blending Swahili culture, historic Fort Jesus, and pristine beaches like Nyali.',
      activities: ['Snorkeling', 'City Tours', 'Fort Jesus Visit'],
    },
    {
      name: 'Diani Beach',
      image: '/assets/diani-beach.jpg',
      description: 'Famous for white sands and turquoise waters, perfect for kitesurfing and relaxation.',
      activities: ['Kitesurfing', 'Diving', 'Beach Walks'],
    },
    {
      name: 'Lamu Island',
      image: '/assets/lamu.jpg',
      description: 'A UNESCO World Heritage Site with timeless Swahili architecture and serene beaches.',
      activities: ['Dhow Cruises', 'Cultural Tours', 'Beach Relaxation'],
    },
    {
      name: 'Watamu',
      image: '/assets/watamu.jpg',
      description: 'Home to marine parks and turtle conservation, ideal for snorkeling and eco-tourism.',
      activities: ['Snorkeling', 'Kayaking', 'Turtle Watching'],
    },
    {
      name: 'Malindi',
      image: '/assets/malindi.jpg',
      description: 'A historic town with coral reefs, Gedi Ruins, and a lively Italian-influenced vibe.',
      activities: ['Diving', 'Historical Tours', 'Fishing'],
    },
  ];

  const tourGuides = [
    {
      name: 'Aisha Mwangi',
      expertise: 'Marine Adventures',
      destination: 'Diani Beach',
      contact: 'aisha@oceanhub.co.ke',
    },
    {
      name: 'Juma Omondi',
      expertise: 'Cultural Heritage',
      destination: 'Mombasa',
      contact: 'juma@oceanhub.co.ke',
    },
    {
      name: 'Fatima Said',
      expertise: 'Eco-Tourism',
      destination: 'Watamu',
      contact: 'fatima@oceanhub.co.ke',
    },
    {
      name: 'Hassan Ali',
      expertise: 'Historical Tours',
      destination: 'Lamu Island',
      contact: 'hassan@oceanhub.co.ke',
    },
    {
      name: 'Luca Rossi',
      expertise: 'Diving & Fishing',
      destination: 'Malindi',
      contact: 'luca@oceanhub.co.ke',
    },
  ];

  const hotels = [
    {
      name: 'Serena Beach Resort',
      destination: 'Mombasa',
      image: '/assets/hotel-mombasa.jpg',
      description: 'A luxurious beachfront resort with Swahili-inspired architecture and world-class amenities.',
      priceRange: 'KSH 15,000 - 25,000/night',
      rating: '★★★★★',
    },
    {
      name: 'Diani Reef Beach Resort',
      destination: 'Diani Beach',
      image: '/assets/hotel-diani.jpg',
      description: 'Elegant resort offering stunning ocean views, spa services, and water sports.',
      priceRange: 'KSH 12,000 - 20,000/night',
      rating: '★★★★',
    },
    {
      name: 'Lamu House',
      destination: 'Lamu Island',
      image: '/assets/hotel-lamu.jpg',
      description: 'A boutique hotel blending Swahili charm with modern comfort, perfect for cultural immersion.',
      priceRange: 'KSH 10,000 - 18,000/night',
      rating: '★★★★',
    },
    {
      name: 'Turtle Bay Resort',
      destination: 'Watamu',
      image: '/assets/hotel-watamu.jpg',
      description: 'Eco-friendly resort near marine parks, ideal for divers and nature lovers.',
      priceRange: 'KSH 8,000 - 15,000/night',
      rating: '★★★★',
    },
    {
      name: 'Ocean Sports Resort',
      destination: 'Malindi',
      image: '/assets/hotel-malindi.jpg',
      description: 'A vibrant resort with diving centers and proximity to Gedi Ruins.',
      priceRange: 'KSH 9,000 - 16,000/night',
      rating: '★★★',
    },
  ];

  const bookings = {
    tours: [
      { name: 'Mombasa City Tour', price: 'KSH 5,000', destination: 'Mombasa' },
      { name: 'Dhow Cruise', price: 'KSH 7,000', destination: 'Lamu Island' },
      { name: 'Marine Park Snorkeling', price: 'KSH 4,500', destination: 'Watamu' },
    ],
    transport: [
      { name: 'Mombasa Airport Transfer', price: 'KSH 2,000', destination: 'Mombasa' },
      { name: 'Boat Ride to Diani', price: 'KSH 3,500', destination: 'Diani Beach' },
    ],
    activities: [
      { name: 'Kitesurfing Lesson', price: 'KSH 6,000', destination: 'Diani Beach' },
      { name: 'Turtle Conservation Tour', price: 'KSH 3,000', destination: 'Watamu' },
    ],
  };

  const [activeTab, setActiveTab] = useState('tours');

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
              Explore Kenya’s Coastal Gems
            </h1>
            <p className="mt-6 text-xl leading-8 text-ocean-blue-100 font-medium drop-shadow-lg">
              Discover pristine beaches, vibrant cultures, and sustainable adventures along Kenya’s coast.
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-ocean-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ocean-blue-900 text-center mb-12 animate-fade-in-up">
            Coastal Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={dest.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={dest.image}
                  alt={`${dest.name} coastal destination`}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-ocean-blue-900 mb-3">{dest.name}</h3>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-4">{dest.description}</p>
                <ul className="space-y-2 text-lg text-ocean-blue-600 list-none">
                  {dest.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/list-item">
                      <span className="text-ocean-blue-500 text-xl group-hover/list-item:scale-110 transition-transform duration-300">🌊</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${dest.name.toLowerCase().replace(' ', '-')}`}
                  className="mt-4 inline-block text-ocean-blue-500 font-semibold hover:text-ocean-blue-700 group/link"
                  aria-label={`Learn more about ${dest.name}`}
                >
                  Learn More
                  <span aria-hidden="true" className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="relative py-16 sm:py-24 bg-ocean-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ocean-blue-900 text-center mb-12 animate-fade-in-up">
            Coastal Hotels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={hotel.image}
                  alt={`${hotel.name} hotel`}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-ocean-blue-900 mb-3">{hotel.name}</h3>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-2">
                  <span className="font-medium">Location:</span> {hotel.destination}
                </p>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-2">{hotel.description}</p>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-2">
                  <span className="font-medium">Price:</span> {hotel.priceRange}
                </p>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-4">{hotel.rating}</p>
                <Link
                  to="/contact"
                  className="text-ocean-blue-500 font-semibold hover:text-ocean-blue-700 group/link"
                  aria-label={`Book ${hotel.name} hotel`}
                >
                  Book Now
                  <span aria-hidden="true" className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Guides Section */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-ocean-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ocean-blue-900 text-center mb-12 animate-fade-in-up">
            Meet Our Tour Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourGuides.map((guide, index) => (
              <div
                key={guide.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold text-ocean-blue-900 mb-3">{guide.name}</h3>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-2">
                  <span className="font-medium">Expertise:</span> {guide.expertise}
                </p>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-4">
                  <span className="font-medium">Destination:</span> {guide.destination}
                </p>
                <a
                  href={`mailto:${guide.contact}`}
                  className="text-ocean-blue-500 font-semibold hover:text-ocean-blue-700 group/link"
                  aria-label={`Contact ${guide.name} for tour guidance`}
                >
                  Contact Guide
                  <span aria-hidden="true" className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bookings Section */}
      <div className="relative py-16 sm:py-24 bg-ocean-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ocean-blue-900 text-center mb-12 animate-fade-in-up">
            Book Your Experience
          </h2>
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-ocean-blue-100 p-1">
              <button
                onClick={() => setActiveTab('tours')}
                className={`px-6 py-2 rounded-full text-lg font-semibold ${
                  activeTab === 'tours' ? 'bg-ocean-blue-500 text-white' : 'text-ocean-blue-600'
                } transition-all duration-300`}
                aria-label="View tour bookings"
              >
                Tours
              </button>
              <button
                onClick={() => setActiveTab('transport')}
                className={`px-6 py-2 rounded-full text-lg font-semibold ${
                  activeTab === 'transport' ? 'bg-ocean-blue-500 text-white' : 'text-ocean-blue-600'
                } transition-all duration-300`}
                aria-label="View transport bookings"
              >
                Transport
              </button>
              <button
                onClick={() => setActiveTab('activities')}
                className={`px-6 py-2 rounded-full text-lg font-semibold ${
                  activeTab === 'activities' ? 'bg-ocean-blue-500 text-white' : 'text-ocean-blue-600'
                } transition-all duration-300`}
                aria-label="View activity bookings"
              >
                Activities
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {bookings[activeTab].map((item, index) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-ocean-blue-100/50 hover:border-ocean-blue-300 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold text-ocean-blue-900 mb-3">{item.name}</h3>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-2">
                  <span className="font-medium">Destination:</span> {item.destination}
                </p>
                <p className="text-lg leading-7 text-ocean-blue-600 mb-4">
                  <span className="font-medium">Price:</span> {item.price}
                </p>
                <Link
                  to="/contact"
                  className="text-ocean-blue-500 font-semibold hover:text-ocean-blue-700 group/link"
                  aria-label={`Request booking for ${item.name}`}
                >
                  Request Booking
                  <span aria-hidden="true" className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-t from-ocean-blue-50 to-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-ocean-blue-900 mb-6">Ready to Explore?</h2>
          <p className="text-lg leading-8 text-ocean-blue-600 mb-8 max-w-2xl mx-auto">
            Plan your coastal adventure with Ocean Hub and experience Kenya’s beauty sustainably.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group relative rounded-full bg-ocean-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-ocean-blue-600 hover:scale-105 transition-all duration-300 overflow-hidden"
              aria-label="Contact Ocean Hub to plan your coastal tour"
            >
              <span className="relative z-10">Plan Your Adventure</span>
              <span className="absolute inset-0 bg-ocean-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold text-ocean-blue-600 hover:text-ocean-blue-700 flex items-center gap-2 group/link"
              aria-label="Learn more about Ocean Hub"
            >
              Our Mission
              <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}