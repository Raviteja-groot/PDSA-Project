import React from 'react';

function StrategicStaffing() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Strategic Staffing</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Connect with top-tier talent through our comprehensive staffing solutions and talent acquisition services
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/src/assets/illustrations/STRATAGIC STUFFING.svg" 
                alt="Strategic Staffing" 
                className="w-80 h-80 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Find the Perfect Talent Match
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our strategic staffing solutions connect you with exceptional professionals who drive innovation 
                and growth. From contract positions to permanent placements, we deliver talent that fits your culture and goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-sm opacity-90">Successful Placements</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">48hrs</div>
                  <div className="text-sm opacity-90">Average Response Time</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Staffing Solutions</h3>
              <ul className="space-y-4">
                {[
                  'IT & Technology Staffing',
                  'Contract & Temporary Staffing',
                  'Permanent Placement Services',
                  'Executive Search & Leadership',
                  'Project-Based Teams',
                  'Skill-Based Talent Matching'
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

          {/* Talent Categories */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Talent Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Software Engineers', icon: '💻', count: '2,500+' },
                { title: 'Data Scientists', icon: '📊', count: '800+' },
                { title: 'DevOps Engineers', icon: '⚙️', count: '600+' },
                { title: 'Project Managers', icon: '📋', count: '1,200+' },
                { title: 'UI/UX Designers', icon: '🎨', count: '400+' },
                { title: 'Cloud Architects', icon: '☁️', count: '300+' },
                { title: 'Cybersecurity', icon: '🔒', count: '250+' },
                { title: 'Business Analysts', icon: '📈', count: '900+' }
              ].map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">{category.title}</h4>
                  <p className="text-blue-600 font-semibold">{category.count} Available</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Requirements Analysis', desc: 'Understanding your specific talent needs and culture fit' },
              { step: '2', title: 'Talent Sourcing', desc: 'Leveraging our extensive network to find qualified candidates' },
              { step: '3', title: 'Screening & Vetting', desc: 'Comprehensive evaluation including technical and cultural assessment' },
              { step: '4', title: 'Placement & Support', desc: 'Seamless onboarding and ongoing support for success' }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Build Your Dream Team?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let us help you find the perfect talent to drive your business forward
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Find Talent Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default StrategicStaffing;