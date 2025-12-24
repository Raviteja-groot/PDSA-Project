import React, { useState, useEffect } from 'react';

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

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-8">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-4">
              <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow-md">
                ←
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow-md">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;