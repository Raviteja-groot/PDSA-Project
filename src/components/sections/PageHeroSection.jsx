import React from 'react';

function PageHeroSection({ title, subtitle, backgroundImage }) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {backgroundImage && (
        <>
          <div className="absolute inset-0 opacity-50">
            <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/85 to-indigo-900/80"></div>
        </>
      )}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-100 leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHeroSection;