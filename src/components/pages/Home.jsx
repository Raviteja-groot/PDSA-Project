import React, { useState, useEffect, useRef } from 'react';
import { AIIcon, CloudIcon, DevOpsIcon, BigDataIcon, WebDevIcon, IoTIcon } from '../icons/ServiceIcons';
import Snowfall from "react-snowfall";

const colors = ["#8AA7C4", "#2E98DA", "#C2CFDE", "#FEFEFE", "#0E6AB6"];

function Home() {
  const [showSnow, setShowSnow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnow(false);
    }, 10000); // ⏱ CHANGE TIME HERE

    return () => clearTimeout(timer);
  }, []);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const clientsRef = useRef(null);

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Tech Corp',
                  text: 'PDSA Technologies transformed our IT infrastructure. Exceptional service!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO, Innovate Ltd',
      text: 'Their expertise in cloud computing helped us scale rapidly.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Director, Global Solutions',
      text: 'Professional team with deep technical knowledge. Highly recommended!',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'VP Engineering, Digital First',
      text: 'Excellent DevOps implementation that streamlined our operations.',
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Founder, StartupHub',
                  text: 'PDSA Technologies delivered exactly what we needed, on time and on budget.',
    },
  ];

  // Client logos
  const clients = [
    'Infosys',
    'Walmart',
    'Bank of America',
    'Meta',
    'ATOS',
    'Humana',
    'Capital One',
    'Apple',
  ];

  // Services with icons
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes and gain insights.',
      icon: <AIIcon />,
    },
    {
      title: 'Cloud Computing',
      description: 'Migrate to the cloud and scale your infrastructure with confidence.',
      icon: <CloudIcon />,
    },
    {
      title: 'DevOps',
      description: 'Streamline development and deployment with modern DevOps practices.',
      icon: <DevOpsIcon />,
    },
    {
      title: 'Big Data Technologies',
      description: 'Transform your data into actionable business intelligence.',
      icon: <BigDataIcon />,
    },
    {
      title: 'Web Development',
      description: 'Build modern, scalable web applications that engage users.',
      icon: <WebDevIcon />,
    },
    {
      title: 'IoT Solutions',
      description: 'Connect your devices and create smart, interconnected systems.',
      icon: <IoTIcon />,
    },
  ];

  // Why Choose Us features
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-scroll clients carousel
  useEffect(() => {
    if (clientsRef.current) {
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        if (clientsRef.current) {
          scrollPosition += 1;
          clientsRef.current.scrollLeft = scrollPosition;
          
          // Reset when we reach the end (we duplicate clients array, so reset at half width)
          const maxScroll = clientsRef.current.scrollWidth / 2;
          if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            clientsRef.current.scrollLeft = 0;
          }
        }
      }, 30);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Design */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        {/* Animated Background Pattern */}
        {/* Snow Effect */}
        <div className="fixed inset-0 pointer-events-none z-0">
        {showSnow && (
  <Snowfall
    color={colors[Math.floor(Math.random() * colors.length)]}
    snowflakeCount={200}
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      zIndex: 40, // Tailwind-friendly layering
    }}
  />
)}

      </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/15 via-transparent to-cyan-400/10"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 text-white">
          <div className="max-w-5xl mx-auto text-center">
            {/* New Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 flex items-center space-x-3 border border-white/20 shadow-xl">
                <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sky-300 text-sm font-semibold tracking-wide">New</span>
                <span className="text-white/90 text-sm font-medium">Introducing PDSA Technologies</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-[Poppins] text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Transform your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                business with expert
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                IT consulting solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We provide comprehensive IT consulting services to help businesses optimize their
              technology infrastructure,
              <span className="text-sky-300 font-semibold"> streamline operations</span>, and achieve digital
              transformation goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-5 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-center font-semibold text-lg shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                Get Started
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/service"
                className="bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all duration-300 text-center font-semibold text-lg border-2 border-white/30 hover:border-white/50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* About Company Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              About PDSA Technologies
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              PDSA Technologies is a leading IT consulting firm dedicated to transforming businesses through innovative 
              technology solutions. With a team of experienced professionals and a proven track record of success, 
              we help organizations across various industries achieve their digital transformation goals.
            </p>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              From cloud migration to AI implementation, we provide end-to-end consulting services that drive 
              growth, efficiency, and competitive advantage. Our client-centric approach ensures that every 
              solution is tailored to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Icons */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
              <div className="flex justify-center mb-8">
                <div className="text-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company & Services Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Company Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                With offices in the United States and India, PDSA Technologies serves clients globally. 
                Our diverse team brings together expertise from various domains to deliver 
                comprehensive IT consulting solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We specialize in AI, cloud computing, DevOps, big data, web development, and IoT solutions, 
                helping businesses navigate the complexities of digital transformation.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm font-medium opacity-90">Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 py-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-sm font-medium opacity-90">Clients</div>
                </div>
                <div className="bg-gradient-to-br from-sky-500 to-cyan-600 text-white px-6 py-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm font-medium opacity-90">Experts</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Services Overview</h3>
              <ul className="space-y-6">
                {[
                  'AI & Machine Learning Solutions',
                  'Cloud Migration & Infrastructure',
                  'DevOps & CI/CD Implementation',
                  'Big Data Analytics & Processing',
                  'Web & Mobile Application Development',
                  'IoT & Smart Device Integration',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 text-center border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Sliding Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading organizations trust us to deliver exceptional results
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              ref={clientsRef}
              className="flex gap-8 overflow-x-hidden scroll-smooth hide-scrollbar"
              style={{ width: '100%' }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-72 h-40 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200"
                >
                  <span className="text-gray-800 font-bold text-xl">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 border border-gray-100">
              <div className="text-center">
                <div className="mb-8">
                  <svg className="w-16 h-16 text-blue-500 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-12 italic leading-relaxed font-light">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 text-lg">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex items-center justify-center mt-12 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border border-gray-200"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-3' 
                        : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border border-gray-200"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build Something Amazing Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Ready to Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's work together to transform your business with cutting-edge technology solutions. 
              Get in touch with our team today and take the first step towards digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-12 py-6 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                Get Started Today
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/service"
                className="bg-white/10 backdrop-blur-xl text-white px-12 py-6 rounded-full hover:bg-white/20 transition-all duration-300 inline-block font-semibold text-lg border-2 border-white/30 hover:border-white/50"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
