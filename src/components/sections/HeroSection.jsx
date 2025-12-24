import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import heroAnimation from "../../assets/lottie/hero3d.json";
import Snowfall from "react-snowfall";

const colors = ["#8AA7C4", "#2E98DA", "#C2CFDE", "#FEFEFE", "#0E6AB6"];

function HeroSection() {
  const [showSnow, setShowSnow] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnow(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="absolute left-10 bottom-10 md:left-24 md:bottom-24 w-[260px] md:w-[420px] opacity-60 z-10 pointer-events-none scale-x-[-1]">
        <Lottie animationData={heroAnimation} loop autoplay />
      </div>

      <div className="absolute right-10 bottom-10 md:right-24 md:bottom-24 w-[260px] md:w-[420px] opacity-80 z-10 pointer-events-none">
        <Lottie animationData={heroAnimation} loop autoplay />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        {showSnow && (
          <Snowfall
            color={colors[Math.floor(Math.random() * colors.length)]}
            snowflakeCount={200}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 40,
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
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/15 via-transparent to-cyan-400/10"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 flex items-center space-x-3 border border-white/20 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sky-300 text-sm font-semibold tracking-wide">New</span>
              <span className="text-white/90 text-sm font-medium">Introducing PDSA Technologies</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
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

          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay">
            We provide comprehensive IT consulting services to help businesses optimize their
            technology infrastructure,
            <span className="text-sky-300 font-semibold"> streamline operations</span>, and achieve digital transformation goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform"
            >
              <span className="relative z-10">Get Started</span>
            </a>
            <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;