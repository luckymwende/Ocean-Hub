import React from 'react';

export default function Community() {
  const discussions = [
    {
      id: 1,
      title: 'Mombasa Beach Cleanup Best Practices',
      author: 'Sarah Kamau',
      date: '2024-03-15',
      replies: 12,
      category: 'Cleanup',
      lastActivity: '2 hours ago',
    },
    {
      id: 2,
      title: 'Lamu Marine Life Photography',
      author: 'Mike Otieno',
      date: '2024-03-14',
      replies: 8,
      category: 'Photography',
      lastActivity: '5 hours ago',
    },
    {
      id: 3,
      title: 'Traditional Fishing Methods in Malindi',
      author: 'Lucy Mwangi',
      date: '2024-03-13',
      replies: 15,
      category: 'Fishing',
      lastActivity: '1 day ago',
    },
  ];

  const members = [
    {
      id: 1,
      name: 'Sarah Kamau',
      role: 'Marine Biologist, Mombasa',
      contributions: 45,
      joinDate: '2023-01-15',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60',
    },
    {
      id: 2,
      name: 'Mike Otieno',
      role: 'Ocean Photographer, Lamu',
      contributions: 32,
      joinDate: '2023-03-20',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60',
    },
    {
      id: 3,
      name: 'David Mwangi',
      role: 'Conservationist, Malindi',
      contributions: 28,
      joinDate: '2023-06-10',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-100 to-teal-200">
      <h1 className="text-4xl font-bold text-ocean-blue-700 mb-6 text-center">Kenya Coastal Community</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Connect with fellow ocean conservationists along Kenya's coast, share experiences, and learn from each other.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Discussions Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-ocean-blue-700 mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-ocean-blue-700">{discussion.title}</h3>
                    <p className="text-sm text-gray-500">Started by {discussion.author}</p>
                  </div>
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-ocean-blue-100 text-ocean-blue-600"
                    aria-label={`Category: ${discussion.category}`}
                  >
                    {discussion.category}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="mr-4">{discussion.replies} replies</span>
                  <span>Last activity: {discussion.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-ocean-blue-600 text-white hover:bg-ocean-blue-700 py-2 px-6 rounded-full font-semibold transition-colors duration-200">
              View All Discussions →</button>
          </div>
        </div>

        {/* Members Section */}
        <div>
          <h2 className="text-2xl font-semibold text-ocean-blue-700 mb-4">Active Members</h2>
          <div className="space-y-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex items-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-ocean-blue-600"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-ocean-blue-700">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>{member.contributions} contributions</span>
                  <span>Joined {member.joinDate}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-ocean-blue-600 text-white hover:bg-ocean-blue-700 py-2 px-6 rounded-full font-semibold transition-colors duration-200">
              View All Members →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
