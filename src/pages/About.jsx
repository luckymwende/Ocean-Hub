export default function About() {
  return (
    <div className="bg-white">
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-ocean-blue-50">
          <div className="absolute inset-0 bg-wave-pattern opacity-5" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-ocean-blue-900 sm:text-5xl">
              About Ocean Hub
            </h1>
            <p className="mt-6 text-lg leading-8 text-ocean-blue-600">
              Empowering coastal communities and protecting Kenya's marine ecosystems
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl space-y-16">
            <div className="text-ocean-blue-700 space-y-6 text-lg">
              <p>
                Ocean Hub is a pioneering platform dedicated to the preservation and sustainable development of Kenya's coastal regions. Founded in 2024, our mission is to create a collaborative ecosystem where local communities, conservationists, and marine enthusiasts can work together to protect our precious ocean resources.
              </p>
              
              <h2 className="text-2xl font-semibold text-ocean-blue-900 mt-12">Our Mission</h2>
              <p>
                We strive to empower coastal communities through technology and education, promoting sustainable fishing practices, marine conservation, and economic growth through our blue economy initiatives.
              </p>
              
              <h2 className="text-2xl font-semibold text-ocean-blue-900 mt-12">What We Do</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Connect sustainable seafood producers with conscious consumers</li>
                <li>Monitor and report illegal fishing activities</li>
                <li>Provide real-time weather and marine condition updates</li>
                <li>Organize community events and beach cleanup drives</li>
                <li>Facilitate knowledge sharing and best practices</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-ocean-blue-900 mt-12">Our Impact</h2>
              <p>
                Since our inception, we have:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Helped reduce illegal fishing incidents by 30%</li>
                <li>Connected over 100 sustainable seafood vendors with customers</li>
                <li>Organized 50+ community cleanup events</li>
                <li>Created a network of 1000+ ocean conservation enthusiasts</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-ocean-blue-900 mt-12">Join Us</h2>
              <p>
                Whether you're a fisherman, conservationist, or simply someone who cares about our oceans, there's a place for you in our community. Together, we can build a sustainable future for Kenya's marine ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 