import React from 'react';

function Technology() {
  const technologies = [
    {
      name: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence to automate processes and gain actionable insights.',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Natural Language Processing', 'Computer Vision'],
    },
    {
      name: 'Cloud Computing',
      description: 'Scalable cloud infrastructure solutions on leading platforms.',
      tools: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
    },
    {
      name: 'DevOps',
      description: 'Streamline development and deployment with modern DevOps practices.',
      tools: ['Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible', 'Prometheus'],
    },
    {
      name: 'Big Data Technologies',
      description: 'Process and analyze large datasets to extract valuable business insights.',
      tools: ['Hadoop', 'Spark', 'Kafka', 'Elasticsearch', 'Snowflake'],
    },
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge frameworks.',
      tools: ['React', 'Node.js', 'Next.js', 'TypeScript', 'GraphQL'],
    },
    {
      name: 'IoT',
      description: 'Connect and manage devices in smart, interconnected systems.',
      tools: ['MQTT', 'AWS IoT', 'Azure IoT', 'Edge Computing', 'Sensor Integration'],
    },
    {
      name: 'Android Development',
      description: 'Native and cross-platform mobile applications for Android.',
      tools: ['Kotlin', 'Java', 'Flutter', 'React Native', 'Firebase'],
    },
    {
      name: 'Java/Python Full Stack',
      description: 'End-to-end development solutions using Java and Python ecosystems.',
      tools: ['Spring Boot', 'Django', 'Flask', 'FastAPI', 'Microservices'],
    },
    {
      name: 'ServiceNow',
      description: 'Enterprise service management and workflow automation.',
      tools: ['ServiceNow Platform', 'ITSM', 'ITOM', 'Custom Applications'],
    },
    {
      name: 'Business/Data Analyst',
      description: 'Transform data into actionable business intelligence and insights.',
      tools: ['Tableau', 'Power BI', 'SQL', 'Python', 'R'],
    },
    {
      name: 'QA Engineer',
      description: 'Ensure software quality through comprehensive testing strategies.',
      tools: ['Selenium', 'Jest', 'Cypress', 'JIRA', 'Test Automation'],
    },
    {
      name: 'Data Science',
      description: 'Advanced analytics and predictive modeling for data-driven decisions.',
      tools: ['Python', 'R', 'Jupyter', 'Pandas', 'Scikit-learn'],
    },
    {
      name: 'Salesforce',
      description: 'CRM solutions and custom applications on the Salesforce platform.',
      tools: ['Salesforce CRM', 'Apex', 'Lightning', 'Salesforce Integration'],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Technologies</h1>
            <p className="text-xl text-gray-200">
              Cutting-edge technologies we work with
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4 border border-blue-100/50 hover:border-blue-300/70 backdrop-blur-sm overflow-hidden p-8"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{tech.name}</h2>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{tech.description}</p>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Technologies & Tools:</h3>
                    <ul className="space-y-2">
                      {tech.tools.map((tool, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">
                          <span className="text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300">•</span>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Need Expertise in These Technologies?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Our team of experts can help you leverage these technologies for your business
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

export default Technology;

