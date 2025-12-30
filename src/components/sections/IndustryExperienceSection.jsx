import React, { useState, useEffect, useRef } from 'react';

// Custom hook for typing animation
const useTypingAnimation = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isVisible, text, speed]);

  return [displayText, elementRef];
};

const industries = [
  { name: 'Banking & Financial', icon: '🏛️', color: 'from-purple-400 to-purple-600' },
  { name: 'Education', icon: '🎓', color: 'from-blue-400 to-blue-600' },
  { name: 'Energy & Utility', icon: '⚡', color: 'from-orange-400 to-orange-600' },
  { name: 'Government', icon: '🏛️', color: 'from-gray-400 to-gray-600' },
  { name: 'Healthcare & Life Science', icon: '🏥', color: 'from-pink-400 to-pink-600' },
  { name: 'Insurance', icon: '🛡️', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Logistics & Warehousing', icon: '📦', color: 'from-amber-400 to-amber-600' },
  { name: 'Retail & Consumer Goods', icon: '🛒', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Telecom & Media', icon: '📱', color: 'from-violet-400 to-violet-600' },
  { name: 'Oil & Gas', icon: '⛽', color: 'from-red-400 to-red-600' },
  { name: 'Travel & Hospitality', icon: '✈️', color: 'from-sky-400 to-sky-600' },
  { name: 'E-Commerce', icon: '🛍️', color: 'from-blue-400 to-blue-600' },
];

function IndustryExperienceSection() {
  const industryText = "You want a strategic partner to understand your market, but you also need them to understand your industry — Since your company is special, we start with a discovery phase to define your distinct brand attributes and benefits. We assist you in recognising business dynamics, identifying shortages, predicting opportunities, and connecting with customers by providing deep industry insights.";
  
  const [typedIndustry, industryRef] = useTypingAnimation(industryText, 12);
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Industry Experience
          </h2>
          <div ref={industryRef} className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {typedIndustry}<span className="animate-pulse">|</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <div className="text-6xl mb-4 flex items-center justify-center transform group-hover:scale-125 transition-all duration-300">
                {industry.icon}
              </div>
              <h3 className="text-center text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryExperienceSection;
