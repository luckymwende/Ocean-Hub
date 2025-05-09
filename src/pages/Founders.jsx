import React from 'react';
import founderImage from '../assets/profile_edited.jpg';
import emmanuelImage from '../assets/images/emmanuel.jpg';


const founders = [
  {
    id: 1,
    name: 'Lucky Mwende Mutua',
    role: 'Founder & CEO',
    bio: 'A passionate full stack developer with a background in sociology and a deep interest in NGOs and marine conservation. Founded Ocean Hub to bridge technology with marine conservation efforts and empower coastal communities.',
    image: founderImage,
    location: 'Kenya',
    expertise: ['Full Stack Development', 'Sociology', 'Marine Conservation', 'NGO Management'],
  },
  {
    id: 2,
    name: 'Emmanuel ATUA',
    role: 'Co-Founder & Marine Scientist',
    bio: 'A dedicated marine biologist with years of experience researching coral reef ecosystems and advocating for sustainable ocean practices.',
    image: emmanuelImage,
    location: 'Kenya',
    expertise: ['Marine Biology', 'Research', 'Community Engagement', 'Conservation Strategy'],
  }
];



function Founders() {
  console.log('Founders component rendered'); // Debug log

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Section with Background */}
      <div className="relative ocean-gradient py-24 sm:py-32 marine-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="container mx-auto px-4 py-8" role="region" aria-labelledby="founders-heading">
            <h1 id="founders-heading" className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
              Our Founder
            </h1>
            <p className="text-sand-200 mb-8 text-center max-w-3xl mx-auto">
              Learn about the visionary behind Ocean Hub who combines technology expertise with marine conservation to create positive change in Kenya's coastal communities.
            </p>

            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                {founders.length > 0 ? (
                  founders.map(founder => (
                    <div
                      key={founder.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <div className="relative pt-[125%] md:pt-[140%]">
                            <img
                              src={founder.image}
                              alt={founder.name}
                              className="absolute inset-0 w-full h-full object-cover object-center"
                              onError={(e) => (e.target.src = '/fallback.jpg')}
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                          <h3 className="text-2xl font-bold text-ocean-blue-600 mb-2">{founder.name}</h3>
                          <p className="text-ocean-blue-500 font-medium mb-3">{founder.role}</p>
                          <p className="text-sm text-gray-500 mb-4">{founder.location}</p>
                          <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {founder.expertise.map((skill, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-ocean-blue-50 text-ocean-blue-600 text-sm rounded-full font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sand-200 text-center">No founders to display.</p>
                )}
              </div>
            </div>

            <div className="mt-12 bg-white/90 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-ocean-blue-600 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ocean Hub was founded with a vision to leverage technology for marine conservation while empowering coastal communities. By combining full-stack development expertise with sociological insights, we create innovative solutions that address both environmental and social challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform serves as a bridge between technology, marine conservation, and community development, fostering collaboration between NGOs, local communities, and marine conservation experts to create sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;