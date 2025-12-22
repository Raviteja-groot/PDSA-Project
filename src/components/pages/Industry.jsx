import React from 'react';

function Industry() {
  const industries = [
    {
      name: 'Financial Services',
      description: 'Secure, compliant, and scalable solutions for banks, insurance companies, and financial institutions.',
      services: ['Regulatory Compliance', 'Risk Management', 'Digital Banking', 'Fraud Detection'],
    },
    {
      name: 'Healthcare',
      description: 'Improve patient care with innovative healthcare IT solutions and data analytics.',
      services: ['Electronic Health Records', 'Telemedicine', 'Healthcare Analytics', 'HIPAA Compliance'],
    },
    {
      name: 'Media, Entertainment & Gaming',
      description: 'Engage audiences with immersive experiences and scalable content delivery platforms.',
      services: ['Streaming Platforms', 'Game Development', 'Content Management', 'Analytics'],
    },
    {
      name: 'Technology Enablement',
      description: 'Empower tech companies with cutting-edge infrastructure and development tools.',
      services: ['Cloud Infrastructure', 'DevOps', 'API Development', 'Microservices'],
    },
    {
      name: 'Telecommunications',
      description: 'Connect the world with robust telecom solutions and network optimization.',
      services: ['Network Management', '5G Solutions', 'IoT Integration', 'Customer Experience'],
    },
    {
      name: 'Energy',
      description: 'Drive efficiency and sustainability with smart energy management solutions.',
      services: ['Smart Grid', 'Energy Analytics', 'IoT Sensors', 'Predictive Maintenance'],
    },
    {
      name: 'Consumer and Industrial Products',
      description: 'Optimize manufacturing and supply chain with data-driven insights.',
      services: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Digital Twin'],
    },
    {
      name: 'Transportation and Travel',
      description: 'Enhance mobility and travel experiences with innovative technology solutions.',
      services: ['Fleet Management', 'Route Optimization', 'Travel Booking Platforms', 'Customer Experience'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-200">
              Tailored IT solutions for diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h2>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Services:</h3>
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                       <li key={idx} className="flex items-center text-gray-700">
                         <span className="text-blue-500 mr-2">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your organization achieve its digital transformation goals
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block font-semibold text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Industry;

