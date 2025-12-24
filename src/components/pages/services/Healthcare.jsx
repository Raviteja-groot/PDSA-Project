import React from 'react';

function Healthcare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Healthcare Solutions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Advanced healthcare IT solutions that improve patient care and streamline operations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Revolutionize Healthcare Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our healthcare solutions enhance patient outcomes, improve operational efficiency, 
                and ensure compliance with healthcare regulations while maintaining the highest security standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-sm opacity-90">Healthcare Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">HIPAA Compliant</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Healthcare Solutions</h3>
              <ul className="space-y-4">
                {[
                  'Electronic Health Records (EHR)',
                  'Telemedicine Platforms',
                  'Healthcare Analytics',
                  'Patient Management Systems',
                  'Medical Imaging Solutions',
                  'Healthcare Mobile Apps'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PDSA Technology Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, #8b5cf6 2px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Why Choose PDSA Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We deliver exceptional healthcare solutions with unmatched expertise and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Industry Expertise",
                description: "15+ years of healthcare technology experience with deep domain knowledge"
              },
              {
                icon: "🔒",
                title: "Security First",
                description: "HIPAA compliant solutions with enterprise-grade security and data protection"
              },
              {
                icon: "⚡",
                title: "Rapid Deployment",
                description: "Fast implementation with minimal disruption to your existing operations"
              },
              {
                icon: "🎯",
                title: "Custom Solutions",
                description: "Tailored healthcare solutions designed specifically for your unique needs"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "300+ successful healthcare projects with measurable ROI improvements"
              },
              {
                icon: "🤝",
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance for peace of mind"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Transform Healthcare with Technology</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let us help you implement cutting-edge healthcare solutions
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Healthcare;