import React from 'react';

function Client() {
  const clients = [
    {
      name: 'Infosys',
      description: 'Leading global technology services and consulting company.',
    },
    {
      name: 'Walmart',
      description: 'World\'s largest retailer transforming with technology.',
    },
    {
      name: 'Bank of America',
      description: 'One of the world\'s largest financial institutions.',
    },
    {
      name: 'Meta',
      description: 'Technology company connecting people worldwide.',
    },
    {
      name: 'ATOS',
      description: 'Global leader in digital transformation.',
    },
    {
      name: 'Humana',
      description: 'Leading health insurance company.',
    },
    {
      name: 'Capital One',
      description: 'Financial services company focused on digital banking.',
    },
    {
      name: 'Apple',
      description: 'Technology company known for innovation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-200">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center justify-center text-center"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600 font-bold text-lg">{client.name}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 italic text-center">
                "PDSA Technologies has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched."
              </p>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">Industry Leader</p>
                <p className="text-gray-600">Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and transform your business with our solutions
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block font-semibold text-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Client;

