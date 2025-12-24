import React from 'react';
import { Link } from 'react-router-dom';

function Technology() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Technologies</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Cutting-edge technologies and frameworks powering digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              Technology Excellence by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering cutting-edge solutions with proven expertise across multiple technology domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered', icon: '🚀' },
              { number: '50+', label: 'Technologies Mastered', icon: '⚡' },
              { number: '99.9%', label: 'Uptime Guarantee', icon: '🛡️' },
              { number: '24/7', label: 'Support Available', icon: '🔧' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2 text-center">{stat.number}</div>
                <div className="text-gray-600 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              Our Premium Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade technologies powering next-generation digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: 'Frontend Excellence',
                technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js'],
                gradient: 'from-blue-600 to-cyan-500',
                icon: '💎'
              },
              {
                category: 'Backend Mastery',
                technologies: ['Node.js', 'Python', 'Java', '.NET', 'Go'],
                gradient: 'from-purple-600 to-pink-500',
                icon: '⚙️'
              },
              {
                category: 'Cloud & DevOps',
                technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
                gradient: 'from-green-600 to-teal-500',
                icon: '☁️'
              }
            ].map((stack, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{stack.icon}</div>
                <h3 className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${stack.gradient} bg-clip-text text-transparent`}>
                  {stack.category}
                </h3>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIdx) => (
                    <div key={techIdx} className={`bg-gradient-to-r ${stack.gradient} text-white px-4 py-2 rounded-lg text-center font-medium`}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Premium Technology Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Advanced AI solutions with deep learning, neural networks, and predictive analytics',
                features: ['TensorFlow & PyTorch', 'Computer Vision', 'NLP Processing', 'Predictive Models'],
                link: '/technologies/ai-machine-learning',
                gradient: 'from-purple-600 to-blue-600',
                icon: '🤖'
              },
              {
                title: 'Cloud Computing',
                description: 'Scalable cloud infrastructure with multi-cloud deployment strategies',
                features: ['AWS/Azure/GCP', 'Microservices', 'Auto-scaling', 'Load Balancing'],
                link: '/technologies/cloud-computing',
                gradient: 'from-blue-600 to-cyan-600',
                icon: '☁️'
              },
              {
                title: 'DevOps Excellence',
                description: 'Streamlined CI/CD pipelines with automated testing and deployment',
                features: ['Jenkins/GitLab CI', 'Docker/Kubernetes', 'Infrastructure as Code', 'Monitoring'],
                link: '/technologies/devops',
                gradient: 'from-green-600 to-teal-600',
                icon: '🔄'
              },
              {
                title: 'Big Data Analytics',
                description: 'Large-scale data processing with real-time analytics capabilities',
                features: ['Apache Spark', 'Hadoop Ecosystem', 'Data Lakes', 'Stream Processing'],
                link: '/technologies/big-data',
                gradient: 'from-orange-600 to-red-600',
                icon: '📊'
              },
              {
                title: 'Web Development',
                description: 'Modern web applications with responsive design and PWA capabilities',
                features: ['React/Angular/Vue', 'Progressive Web Apps', 'API Development', 'Performance Optimization'],
                link: '/technologies/web-development',
                gradient: 'from-indigo-600 to-purple-600',
                icon: '🌐'
              },
              {
                title: 'IoT Solutions',
                description: 'Internet of Things platforms with edge computing and sensor integration',
                features: ['Edge Computing', 'Sensor Networks', 'Real-time Data', 'Device Management'],
                link: '/technologies/iot',
                gradient: 'from-pink-600 to-rose-600',
                icon: '📡'
              }
            ].map((service, idx) => (
              <Link key={idx} to={service.link} className="group block">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-6 inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform`}>
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Technology Expertise?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just use technology - we master it to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'Always adopting cutting-edge technologies to stay ahead of the curve',
                icon: '💡'
              },
              {
                title: 'Scalable Solutions',
                description: 'Building systems that grow with your business needs seamlessly',
                icon: '📈'
              },
              {
                title: 'Security Focus',
                description: 'Enterprise-grade security built into every layer of our solutions',
                icon: '🔒'
              },
              {
                title: 'Performance Optimized',
                description: 'Lightning-fast applications with optimal resource utilization',
                icon: '⚡'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Need Technology Expertise?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Our team of experts can help you leverage cutting-edge technologies for your business
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

export default Technology;

