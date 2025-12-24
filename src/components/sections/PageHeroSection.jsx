import React from 'react';

function PageHeroSection({ title, subtitle }) {
  return (
    <section className="relative py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
          <span className="text-white">
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up-delay">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeroSection;