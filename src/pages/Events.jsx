import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Beach Cleanup Drive',
    date: '2024-04-15',
    time: '09:00 AM',
    location: 'Miami Beach',
    type: 'cleanup',
    description: 'Join us for a community beach cleanup drive to protect marine life.',
    attendees: 45,
    maxAttendees: 100,
  },
  {
    id: 2,
    title: 'Sustainable Fishing Workshop',
    date: '2024-04-20',
    time: '02:00 PM',
    location: 'Marine Conservation Center',
    type: 'workshop',
    description: 'Learn about sustainable fishing practices and marine conservation.',
    attendees: 30,
    maxAttendees: 50,
  },
  // Add more events as needed
];

const eventTypes = [
  { id: 'all', name: 'All Events' },
  { id: 'cleanup', name: 'Cleanup Drives' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'training', name: 'Training Sessions' },
  { id: 'meetup', name: 'Community Meetups' },
];

export default function Events() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Events Calendar
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join our community events and make a difference in ocean conservation
          </p>
        </div>

        <div className="mt-8">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {event.type}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {event.attendees} / {event.maxAttendees} attendees
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full btn-primary">RSVP Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 