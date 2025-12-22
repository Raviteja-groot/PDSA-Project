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
      <section className="bg-gradient-to-b from-blue-900 to-green-900 text-white py-20">
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
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{tech.name}</h2>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Technologies & Tools:</h3>
                  <ul className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <span className="text-blue-500 mr-2">•</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expertise in These Technologies?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts can help you leverage these technologies for your business
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block font-semibold text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Technology;

