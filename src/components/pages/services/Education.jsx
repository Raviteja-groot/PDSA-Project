import React from 'react';

function Education() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #a855f7 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Education Technology</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Innovative educational solutions that enhance learning experiences and institutional efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                Transform Education Through Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our education technology solutions empower institutions to deliver exceptional learning experiences, 
                streamline administrative processes, and prepare students for the digital future.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Educational Institutions</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-sm opacity-90">Students Impacted</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Education Solutions</h3>
              <ul className="space-y-4">
                {[
                  'Learning Management Systems',
                  'Student Information Systems',
                  'Virtual Classroom Platforms',
                  'Educational Mobile Apps',
                  'Assessment & Analytics Tools',
                  'Campus Management Systems'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full flex items-center justify-center mr-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Revolutionize Education Technology</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Partner with us to create innovative educational solutions
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-10 py-4 rounded-full hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Education;