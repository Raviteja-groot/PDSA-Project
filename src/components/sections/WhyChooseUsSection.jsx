import React from 'react';

const whyChooseUs = [
  {
    title: 'Expert Team',
    description: 'Our team consists of highly skilled professionals with years of experience in IT consulting.',
    icon: '👥',
  },
  {
    title: 'Innovation Focus',
    description: 'We stay at the forefront of technology trends and implement cutting-edge solutions.',
    icon: '💡',
  },
  {
    title: 'Proven Track Record',
    description: 'Successfully delivered projects for Fortune 500 companies across various industries.',
    icon: '🏆',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to ensure your systems run smoothly and efficiently.',
    icon: '🔄',
  },
];

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PDSA Technologies?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;