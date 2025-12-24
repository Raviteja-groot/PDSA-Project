import React from 'react';

function IoT() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ec4899 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IoT Solutions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Connect, monitor, and control devices with intelligent IoT platforms and edge computing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-pink-700 bg-clip-text text-transparent">
                Smart Connected Ecosystems
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our IoT solutions enable seamless device connectivity, real-time monitoring, and intelligent automation 
                across industrial, healthcare, and smart city applications with enterprise-grade security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-sm opacity-90">Connected Devices</div>
                </div>
                <div className="bg-gradient-to-br from-rose-600 to-pink-700 text-white px-6 py-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">99.5%</div>
                  <div className="text-sm opacity-90">Network Reliability</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">IoT Services</h3>
              <ul className="space-y-4">
                {[
                  'Device Connectivity',
                  'Edge Computing',
                  'Real-time Analytics',
                  'Sensor Networks',
                  'Remote Monitoring',
                  'Predictive Maintenance'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full flex items-center justify-center mr-4">
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
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Connect Your World</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Build intelligent IoT ecosystems that transform how you monitor and control your operations
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-pink-600 to-rose-700 text-white px-10 py-4 rounded-full hover:from-pink-700 hover:to-rose-800 transition-all duration-300 inline-block font-semibold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default IoT;