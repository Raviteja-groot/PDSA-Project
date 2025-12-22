import React from 'react';

function Service() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions that drive business value.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      title: 'Cloud Computing',
      description: 'Migrate to the cloud and scale your infrastructure with confidence. We provide end-to-end cloud solutions.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cloud Security', 'Cost Optimization'],
    },
    {
      title: 'DevOps',
      description: 'Streamline development and deployment with modern DevOps practices. Automate your workflows and increase efficiency.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    },
    {
      title: 'Big Data Technologies',
      description: 'Transform your data into actionable business intelligence. We help you process, analyze, and visualize large datasets.',
      features: ['Data Warehousing', 'Real-time Analytics', 'Data Pipeline Design', 'Business Intelligence'],
    },
    {
      title: 'Web Development',
      description: 'Build modern, scalable web applications that engage users and drive business growth.',
      features: ['Full-Stack Development', 'Progressive Web Apps', 'API Development', 'Performance Optimization'],
    },
    {
      title: 'IoT Solutions',
      description: 'Connect your devices and create smart, interconnected systems that improve efficiency and user experience.',
      features: ['IoT Architecture', 'Device Management', 'Data Integration', 'Security Implementation'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT consulting services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                     <li key={idx} className="flex items-center text-gray-700">
                       <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help transform your business
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

export default Service;

