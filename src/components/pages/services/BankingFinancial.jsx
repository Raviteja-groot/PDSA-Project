import React from 'react';
import { Link } from 'react-router-dom';
import financialIllustration from '../../../assets/illustrations/financial.svg';

function BankingFinancial() {
  const solutions = [
    {
      title: 'Digital Banking Solutions',
      description: 'Modern digital banking platforms with mobile-first design and seamless user experience.',
      features: ['Mobile Banking Apps', 'Online Banking Portals', 'Digital Wallet Integration', 'Real-time Transactions']
    },
    {
      title: 'Risk Management Systems',
      description: 'Advanced risk assessment and management tools to protect your financial institution.',
      features: ['Credit Risk Analysis', 'Fraud Detection', 'Compliance Monitoring', 'Risk Reporting']
    },
    {
      title: 'Compliance & Regulatory',
      description: 'Ensure regulatory compliance with automated reporting and monitoring systems.',
      features: ['AML Compliance', 'KYC Verification', 'Regulatory Reporting', 'Audit Trail Management']
    },
    {
      title: 'Payment Processing',
      description: 'Secure and efficient payment processing solutions for all transaction types.',
      features: ['Multi-currency Support', 'Real-time Processing', 'API Integration', 'Security Protocols']
    }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Banking & Financial Services</h1>
              <p className="text-xl text-gray-200 mb-8">
                Comprehensive financial technology solutions to modernize banking operations and enhance customer experience
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={financialIllustration} 
                alt="Financial Services Illustration" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge financial technology solutions designed to meet the evolving needs of modern banking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Why Choose Our Banking Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="text-gray-600">Bank-grade security with advanced encryption and fraud protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
                <p className="text-gray-600">Lightning-fast transaction processing and instant notifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Comprehensive reporting and business intelligence tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Banking Operations?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today to learn how our solutions can modernize your financial services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BankingFinancial;