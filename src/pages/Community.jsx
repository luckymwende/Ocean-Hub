import { useState } from 'react';

const categories = [
  { id: 'general', name: 'General Discussion' },
  { id: 'conservation', name: 'Marine Conservation' },
  { id: 'fishing', name: 'Sustainable Fishing' },
  { id: 'education', name: 'Education & Research' },
  { id: 'events', name: 'Events & Meetups' },
];

const topics = [
  {
    id: 1,
    title: 'How to reduce plastic waste in fishing?',
    category: 'conservation',
    author: 'John Doe',
    replies: 15,
    views: 234,
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    title: 'Best practices for sustainable fishing',
    category: 'fishing',
    author: 'Jane Smith',
    replies: 8,
    views: 156,
    lastActivity: '5 hours ago',
  },
  // Add more topics as needed
];

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter((topic) => {
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Community Forum
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join the conversation about ocean conservation and sustainable practices
          </p>
        </div>

        <div className="mt-8">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* New Topic Button */}
          <div className="flex justify-end mb-6">
            <button className="btn-primary">Create New Topic</button>
          </div>

          {/* Topics List */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {filteredTopics.map((topic) => (
                <li key={topic.id}>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-blue-600 truncate">
                            {topic.title}
                          </p>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="truncate">Posted by {topic.author}</span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex items-center space-x-4">
                          <div className="text-sm text-gray-500">
                            {topic.replies} replies
                          </div>
                          <div className="text-sm text-gray-500">
                            {topic.views} views
                          </div>
                          <div className="text-sm text-gray-500">
                            {topic.lastActivity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 