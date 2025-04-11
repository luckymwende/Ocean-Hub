import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-ocean-blue-50">
          <div className="absolute inset-0 bg-wave-pattern opacity-5" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-ocean-blue-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-ocean-blue-600">
              Get in touch with our team for any questions, suggestions, or support
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-ocean-blue-900 mb-6">
                  Get in Touch
                </h2>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-semibold text-ocean-blue-900">Office Address</dt>
                    <dd className="mt-2 text-base text-ocean-blue-600">
                      Mombasa Road<br />
                      Mombasa, Kenya
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-ocean-blue-900">Email</dt>
                    <dd className="mt-2 text-base text-ocean-blue-600">
                      info@oceanhub.co.ke
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-ocean-blue-900">Phone</dt>
                    <dd className="mt-2 text-base text-ocean-blue-600">
                      +254 792635025
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-ocean-blue-900">Hours</dt>
                    <dd className="mt-2 text-base text-ocean-blue-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ocean-blue-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-ocean-blue-900 shadow-sm ring-1 ring-inset ring-ocean-blue-300 placeholder:text-ocean-blue-400 focus:ring-2 focus:ring-inset focus:ring-ocean-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ocean-blue-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-ocean-blue-900 shadow-sm ring-1 ring-inset ring-ocean-blue-300 placeholder:text-ocean-blue-400 focus:ring-2 focus:ring-inset focus:ring-ocean-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-ocean-blue-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-ocean-blue-900 shadow-sm ring-1 ring-inset ring-ocean-blue-300 placeholder:text-ocean-blue-400 focus:ring-2 focus:ring-inset focus:ring-ocean-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ocean-blue-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-ocean-blue-900 shadow-sm ring-1 ring-inset ring-ocean-blue-300 placeholder:text-ocean-blue-400 focus:ring-2 focus:ring-inset focus:ring-ocean-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-ocean-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ocean-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 