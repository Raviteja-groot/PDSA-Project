import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  const services = [
    {
      title: 'Banking and Financial Service',
      description: 'Comprehensive financial technology solutions to help banks and financial institutions modernize their operations and enhance customer experience.',
      features: ['Digital Banking Solutions', 'Risk Management Systems', 'Compliance & Regulatory', 'Payment Processing'],
      link: '/services/banking-financial'
    },
    {
      title: 'Education',
      description: 'Innovative educational solutions that enhance learning experiences and institutional efficiency.',
      features: ['Learning Management Systems', 'Student Information Systems', 'Virtual Classroom Platforms', 'Educational Mobile Apps'],
      link: '/services/education'
    },
    {
      title: 'Government',
      description: 'Secure, scalable technology solutions that modernize government operations and citizen services.',
      features: ['Citizen Service Portals', 'Digital Identity Management', 'Government Analytics', 'Public Safety Systems'],
      link: '/services/government'
    },
    {
      title: 'Healthcare',
      description: 'Advanced healthcare IT solutions that improve patient care, streamline operations, and ensure regulatory compliance.',
      features: ['Electronic Health Records', 'Telemedicine Platforms', 'Healthcare Analytics', 'HIPAA Compliance'],
      link: '/services/healthcare'
    },
    {
      title: 'Media, Entertainment & Gaming',
      description: 'Cutting-edge solutions for media companies, entertainment platforms, and gaming studios to deliver exceptional user experiences.',
      features: ['Content Management Systems', 'Streaming Platforms', 'Game Development', 'Digital Asset Management'],
      link: '/services/media-entertainment'
    },
    {
      title: 'Technology Enablement',
      description: 'Empower your organization with the latest technology infrastructure and digital transformation strategies.',
      features: ['Digital Transformation', 'Cloud Migration', 'System Integration', 'Technology Consulting'],
      link: '/services/technology-enablement'
    },
    {
      title: 'Strategic Staffing',
      description: 'Find the right talent for your organization with our comprehensive staffing solutions and talent acquisition services.',
      features: ['IT Staffing', 'Contract Staffing', 'Permanent Placement', 'Talent Acquisition'],
      link: '/services/strategic-staffing'
    },
    {
      title: 'Business Process Outsourcing',
      description: 'Optimize your business operations by outsourcing non-core processes to our experienced team of professionals.',
      features: ['Process Optimization', 'Cost Reduction', 'Quality Assurance', 'Scalable Solutions'],
      link: '/services/business-process-outsourcing'
    },
    {
      title: 'Recruitment Process Outsourcing',
      description: 'Streamline your hiring process with our end-to-end recruitment solutions and talent management services.',
      features: ['End-to-End Recruitment', 'Candidate Screening', 'Interview Management', 'Onboarding Support'],
      link: '/services/recruitment-process-outsourcing'
    },
    {
      title: 'PDSA Solutions Training Hub',
      description: 'Comprehensive training programs and skill development courses to enhance your team\'s technical capabilities.',
      features: ['Technical Training', 'Certification Programs', 'Skill Development', 'Corporate Training'],
      link: '/services/training-hub'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Services Overview</h1>
            <p className="text-xl text-gray-200 animate-fade-in-up-delay">
              Comprehensive IT consulting services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden p-8 block"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h2>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                       <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                         <span className="text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Contact us today to discuss how we can help transform your business
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

export default Service;

