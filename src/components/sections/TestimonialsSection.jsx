import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'James Smith',
    position: 'Creative Director',
    text: '"In my history of working with PDSA Technologies, I can honestly say that there is not one company that I\'ve ever worked with that has better service."',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    position: 'Sales Manager',
    text: '"I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with PDSA Technologies because I just do not want to be sold. I want to trust that what I am getting is going to be good."',
  },
  {
    id: 3,
    name: 'Tim Bogemans',
    position: 'Managing Partner',
    text: '"We worked with PDSA Technologies in developing our SharePoint Intranet. The development & implementation process was very smooth & delivered the exact results we were expecting. We\'ll surely work with them in the future."',
  },
  {
    id: 4,
    name: 'Ross Shamelashvili',
    position: 'Manager, Development Operations',
    text: '"PDSA Technologies offers a high caliber of resources skilled in Microsoft Azure .NET, mobile & Quality Assurance. Over the past three years, We was very pleased with the service provided by PDSA Technologies development teams & executive management. For accelerated project timelines which require skilled resources, PDSA Technologies is a company that your team should consider."',
  },
];

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="text-6xl text-blue-500 opacity-20 mb-2">"</div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic text-sm md:text-base">
                {testimonial.text}
              </p>
              
              <div className="text-center pt-4 border-t border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;