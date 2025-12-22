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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
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
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden p-8"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{industry.name}</h2>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{industry.description}</p>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Key Services:</h3>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                         <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                           <span className="text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300">✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss how we can help your organization achieve its digital transformation goals
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industry;

