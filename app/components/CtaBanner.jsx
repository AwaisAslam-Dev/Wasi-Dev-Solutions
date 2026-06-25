"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaRocket, FaArrowRight, FaStar, FaTrophy, FaHeadset } from 'react-icons/fa';

const CtaBanner = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { val: '20+', label: 'Projects Delivered', icon: FaTrophy },
    { val: '98%', label: 'Client Satisfaction', icon: FaStar },
    { val: '24/7', label: 'Support Available', icon: FaHeadset },
    { val: '5★', label: 'Average Rating', icon: FaStar },
  ];

  return (
    <section className="relative bg-[#071026] overflow-hidden font-['Outfit',sans-serif]" ref={sectionRef}>
      <style>{`
       
      `}</style>

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-30%] left-[-5%] w-72 h-72 rounded-full bg-[#67D2FF]/8 blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-5%] w-72 h-72 rounded-full bg-[#A7D85E]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.4' stroke-opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 sm:py-14 md:py-20">
        {/* Main CTA Card */}
        <div className={`relative rounded-2xl border border-[#67D2FF]/20 overflow-hidden cta-card ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ background: 'linear-gradient(135deg, #0D1328 0%, #071026 100%)' }}>
          {/* Inner glow corners */}
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#67D2FF]/6 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#A7D85E]/6 blur-2xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Top gradient line */}
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(103,210,255,0.5), rgba(167,216,94,0.5), transparent)' }}
          />

          <div className="relative px-5 sm:px-8 md:px-10 py-7 sm:py-9 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-7">
            {/* Left — text */}
            <div className="text-center lg:text-left w-full lg:w-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#67D2FF]/25 bg-[#67D2FF]/8 mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67D2FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#67D2FF]" />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#67D2FF] tracking-widest uppercase">
                  Ready to grow?
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
                Let&apos;s build something{' '}
                <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
                  remarkable together
                </span>
              </h3>

              <p className="text-[#8A92A6] text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                From idea to launch — we handle everything. No fluff, just results.
              </p>
            </div>

            {/* Right — buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => router.push("/contact")}
                className="relative px-6 sm:px-7 py-3 rounded-full font-bold text-sm text-[#071026] text-center transition-all duration-300 shadow-lg w-full sm:w-auto overflow-hidden group hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(103,210,255,0.4)]"
                style={{ background: 'linear-gradient(90deg, #67D2FF, #A7D85E)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start a Project
                  <FaRocket className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-[#A7D85E] to-[#67D2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => router.push("/ourwork")}
                className="px-6 sm:px-7 py-3 rounded-full font-bold text-sm text-white text-center border-2 border-[#67D2FF]/35 hover:border-[#67D2FF] hover:shadow-lg hover:shadow-[#67D2FF]/10 hover:scale-105 active:scale-95 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                style={{ background: 'rgba(13,19,40,0.7)' }}
              >
                View Our Work
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div
            className="absolute bottom-0 left-0 w-full h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(167,216,94,0.3), transparent)' }}
          />
        </div>

        {/* Trust strip */}
        <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-6 sm:mt-7 stagger-stats ${isInView ? '' : 'opacity-0'}`}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#67D2FF]" />
                <span className="text-xs sm:text-sm font-bold text-white">{stat.val}</span>
                <span className="text-[10px] sm:text-xs text-[#8A92A6] hidden xs:inline">{stat.label}</span>
                <span className="text-[10px] sm:text-xs text-[#8A92A6] xs:hidden">
                  {stat.label.split(' ')[0]}
                </span>
                {i < stats.length - 1 && (
                  <span className="hidden sm:block w-px h-3 bg-[#67D2FF]/20 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;