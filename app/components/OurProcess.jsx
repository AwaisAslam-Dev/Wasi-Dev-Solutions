"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaSearch, 
  FaFileAlt, 
  FaPalette, 
  FaCode, 
  FaRocket,
  FaArrowRight,
  FaClock
} from 'react-icons/fa';

const OurProcess = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: FaSearch,
      description: 'We research your goals, audience, and competitors to build a strategic foundation.',
      color: '#67D2FF',
      accent: '#A7D85E',
      detail: 'Goals · Research · Strategy',
    },
    {
      number: '02',
      title: 'Plan',
      icon: FaFileAlt,
      description: 'A detailed roadmap with sitemaps, wireframes, and tech specs to align everyone.',
      color: '#A7D85E',
      accent: '#67D2FF',
      detail: 'Wireframes · Timeline · Specs',
    },
    {
      number: '03',
      title: 'Design',
      icon: FaPalette,
      description: 'Pixel-perfect, brand-aligned interfaces crafted to delight users and drive action.',
      color: '#67D2FF',
      accent: '#A7D85E',
      detail: 'UI/UX · Branding · Prototypes',
    },
    {
      number: '04',
      title: 'Develop',
      icon: FaCode,
      description: 'Clean, scalable code with modern frameworks — optimised for speed and SEO.',
      color: '#A7D85E',
      accent: '#67D2FF',
      detail: 'Frontend · Backend · QA',
    },
    {
      number: '05',
      title: 'Launch',
      icon: FaRocket,
      description: 'We deploy, test, and fine-tune everything for a flawless go-live experience.',
      color: '#67D2FF',
      accent: '#A7D85E',
      detail: 'Deploy · Test · Support',
    },
  ];

  return (
    <section 
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-[#071026] font-['Outfit',sans-serif]" 
      ref={sectionRef}
    >
    

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.5' stroke-opacity='0.06'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-32 left-[-8%] w-80 h-80 rounded-full bg-[#67D2FF]/6 blur-3xl" />
        <div className="absolute bottom-20 right-[-8%] w-105 h-105 rounded-full bg-[#A7D85E]/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-50 rounded-full bg-[#67D2FF]/3 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 ${isInView ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#0D1328] border border-[#67D2FF]/25 mb-4 sm:mb-5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67D2FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-full w-full bg-[#67D2FF]" />
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-[#67D2FF] font-medium tracking-wide">✦ OUR PROCESS</span>
          </div>

          <h2 className="font-bold leading-[1.1] tracking-tight mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            <span className="text-white">Simple Process,</span>
            <br />
            <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
              Powerful Results
            </span>
          </h2>

          <p className="text-[#B6BCC8] text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
            A proven 5-step workflow that delivers on time, on budget, and consistently beyond expectations.
          </p>
        </div>

        {/* DESKTOP: Horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-13 left-[10%] right-[10%] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(103,210,255,0.15), rgba(167,216,94,0.4), rgba(103,210,255,0.15))' }}
          />

          <div className={`grid grid-cols-5 gap-4 xl:gap-6 stagger-process ${isInView ? '' : 'opacity-0'}`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center process-card"
                >
                  {/* Icon circle */}
                  <div className="relative mb-4 z-10">
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${step.color}40, transparent 70%)` }}
                    />
                    <div
                      className="relative w-20 h-20 md:w-26 md:h-26 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(145deg, #0D1328, #071026)',
                        borderColor: `${step.color}40`,
                        boxShadow: `0 0 24px ${step.color}18`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = step.color;
                        e.currentTarget.style.boxShadow = `0 0 36px ${step.color}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = `${step.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 24px ${step.color}18`;
                      }}
                    >
                      <Icon className="w-8 h-8 md:w-9 md:h-9 transition-colors duration-300 group-hover:scale-110" style={{ color: step.color }} />
                    </div>

                    {/* Step number badge */}
                    <div
                      className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center shadow-lg text-[#071026] text-xs font-bold"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.accent})` }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base xl:text-lg font-bold text-white mb-1.5 transition-colors duration-300 group-hover:text-[#67D2FF]"
                  >
                    {step.title}
                  </h3>

                  {/* Detail tags */}
                  <p className="text-[10px] xl:text-xs font-medium mb-2 tracking-wide" style={{ color: step.color }}>
                    {step.detail}
                  </p>

                  {/* Description */}
                  <p className="text-[#8A92A6] text-xs xl:text-sm leading-relaxed group-hover:text-[#B6BCC8] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TABLET: 2-col + 1 centered */}
        <div className="hidden sm:block lg:hidden">
          <div className={`grid grid-cols-2 gap-4 md:gap-5 stagger-process ${isInView ? '' : 'opacity-0'}`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={index}
                  className={`group relative ${isLast ? 'col-span-2 max-w-sm mx-auto w-full' : ''} process-card`}
                >
                  <div
                    className="h-full p-4 sm:p-5 rounded-2xl border transition-all duration-300 overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, #0D1328, #071026)',
                      borderColor: '#1A2440',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${step.color}50`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A2440'; }}
                  >
                    {/* Hover tint */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: `linear-gradient(145deg, ${step.color}0A, transparent)` }}
                    />

                    <div className="relative flex items-start gap-3 sm:gap-4">
                      {/* Icon */}
                      <div className="relative shrink-0">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.accent}10)`, border: `1.5px solid ${step.color}30` }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: step.color }} />
                        </div>
                        <div
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[#071026] text-[9px] font-bold shadow"
                          style={{ background: `linear-gradient(135deg, ${step.color}, ${step.accent})` }}
                        >
                          {step.number}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#67D2FF] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-[10px] font-semibold mb-1.5 tracking-wide" style={{ color: step.color }}>
                          {step.detail}
                        </p>
                        <p className="text-[#8A92A6] text-[11px] sm:text-xs leading-relaxed group-hover:text-[#B6BCC8] transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom border */}
                    <div
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                      style={{ background: `linear-gradient(90deg, ${step.color}, ${step.accent})` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: Vertical timeline */}
        <div className="sm:hidden">
          <div className={`relative stagger-process ${isInView ? '' : 'opacity-0'}`}>
            {/* Vertical line */}
            <div
              className="absolute left-6.5 top-7 bottom-7 w-px"
              style={{ background: 'linear-gradient(180deg, rgba(103,210,255,0.3), rgba(167,216,94,0.3), rgba(103,210,255,0.3))' }}
            />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="group relative flex items-start gap-3 process-card">
                    {/* Icon node */}
                    <div className="relative shrink-0 z-10">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(145deg, #0D1328, #071026)',
                          borderColor: `${step.color}40`,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = step.color; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = `${step.color}40`; }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[#071026] text-[9px] font-bold shadow"
                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.accent})` }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-4 rounded-xl border transition-all duration-300"
                      style={{
                        background: 'linear-gradient(145deg, #0D1328, #071026)',
                        borderColor: '#1A2440',
                      }}
                    >
                      <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-[#67D2FF] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[10px] font-semibold mb-1.5 tracking-wide" style={{ color: step.color }}>
                        {step.detail}
                      </p>
                      <p className="text-[#8A92A6] text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          {/* Timeline summary pill */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#67D2FF]/20 bg-[#0D1328]/60 backdrop-blur-sm mb-4 sm:mb-6">
            <FaClock className="w-3 h-3 sm:w-4 sm:h-4 text-[#67D2FF]" />
            <span className="text-[10px] sm:text-xs text-[#8A92A6]">Average delivery</span>
            <span className="w-px h-3 bg-[#67D2FF]/30" />
            <span className="text-[10px] sm:text-xs font-bold text-[#67D2FF]">2 – 6 Weeks</span>
            <span className="w-px h-3 bg-[#67D2FF]/30" />
            <span className="text-[10px] sm:text-xs text-[#8A92A6]">Transparent pricing</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => router.push("/contact")}
              className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-[#071026] shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto overflow-hidden group hover:shadow-[0_0_32px_rgba(103,210,255,0.35)]"
              style={{ background: 'linear-gradient(90deg, #67D2FF, #A7D85E)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project Today
                <FaRocket className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-[#A7D85E] to-[#67D2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;