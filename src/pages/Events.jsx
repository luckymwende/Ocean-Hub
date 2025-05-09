import React from 'react';

const events = [
  {
    id: 1,
    title: 'Mombasa Beach Cleanup',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Nyali Beach, Mombasa',
    description: 'Join us for a community beach cleanup event at Nyali Beach. All equipment will be provided.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cleanup'
  },
  {
    id: 2,
    title: 'Lamu Marine Life Workshop',
    date: '2024-04-20',
    time: '02:00 PM',
    location: 'Lamu Marine Conservation Center',
    description: 'Learn about Lamu\'s unique marine ecosystem and conservation efforts from local marine biologists.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Education'
  },
  {
    id: 3,
    title: 'Malindi Sustainable Fishing Workshop',
    date: '2024-04-25',
    time: '10:00 AM',
    location: 'Malindi Marine Park Visitor Center',
    description: 'Workshop on traditional and sustainable fishing practices in Malindi\'s coastal waters.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Workshop'
  }
];

function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-ocean-blue-600 mb-6">Kenya Coastal Events</h1>
      <p className="text-gray-600 mb-8">
        Join us in our mission to protect and preserve Kenya\'s coastal ecosystems. Participate in these upcoming events and make a difference in our local marine environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-ocean-blue-500 font-semibold mb-2">{event.category}</div>
              <h3 className="text-xl font-semibold text-ocean-blue-600 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
              <button className="mt-4 w-full bg-ocean-blue-500 text-white px-4 py-2 rounded hover:bg-ocean-blue-600 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events; 