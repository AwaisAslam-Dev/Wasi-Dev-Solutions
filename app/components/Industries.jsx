"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaUtensils, 
  FaShoppingBag, 
  FaHeartbeat, 
  FaTshirt, 
  FaCloud, 
  FaStore,
  FaArrowRight,
  FaCalendarCheck
} from 'react-icons/fa';

const Industries = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      name: "Restaurants",
      icon: FaUtensils,
      color: "#67D2FF",
      gradient: "from-[#67D2FF]/20 to-[#67D2FF]/5",
    },
    {
      name: "E-commerce",
      icon: FaShoppingBag,
      color: "#A7D85E",
      gradient: "from-[#A7D85E]/20 to-[#A7D85E]/5",
    },
    {
      name: "Health Care",
      icon: FaHeartbeat,
      color: "#67D2FF",
      gradient: "from-[#67D2FF]/20 to-[#67D2FF]/5",
    },
    {
      name: "Fashion",
      icon: FaTshirt,
      color: "#A7D85E",
      gradient: "from-[#A7D85E]/20 to-[#A7D85E]/5",
    },
    {
      name: "SaaS Tech",
      icon: FaCloud,
      color: "#67D2FF",
      gradient: "from-[#67D2FF]/20 to-[#67D2FF]/5",
    },
    {
      name: "Local Businesses",
      icon: FaStore,
      color: "#A7D85E",
      gradient: "from-[#A7D85E]/20 to-[#A7D85E]/5",
    },
  ];

  return (
    <section 
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-linear-to-b from-[#071026] to-[#0D1328] font-['Outfit',sans-serif]" 
      ref={sectionRef}
    >
     

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-[#67D2FF]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 ${isInView ? 'fade-in-up' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0D1328] border border-[#67D2FF]/20 mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67D2FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-[#67D2FF]"></span>
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-[#67D2FF] font-medium tracking-wide">✦ INDUSTRIES WE WORK WITH</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">We Build For</span>
            <br className="sm:hidden" />
            <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
              Every Industry
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-[#B6BCC8] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            From startups to enterprises, we deliver tailored digital solutions that drive growth across all sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 stagger-industries ${isInView ? '' : 'opacity-0'}`}>
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="group relative industry-card"
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#67D2FF]/10 to-[#A7D85E]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col items-center p-3 sm:p-4 md:p-5 lg:p-6 bg-linear-to-br from-[#0D1328] to-[#071026] rounded-2xl border border-[#67D2FF]/20 hover:border-[#67D2FF]/40 transition-all duration-500 cursor-pointer h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-linear-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-2 sm:mb-3 md:mb-4">
                    <div className="absolute inset-0 bg-linear-to-r from-[#67D2FF]/20 to-[#A7D85E]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-[#0D1328] to-[#071026] border-2 border-[#67D2FF]/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:border-[#67D2FF]/80">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#67D2FF] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Business Name */}
                  <h3 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-white text-center group-hover:text-[#67D2FF] transition-colors duration-300">
                    {industry.name}
                  </h3>

                  {/* Decorative Line */}
                  <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-10 sm:mt-12 md:mt-16 ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => router.push("/contact")}
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] rounded-full text-[#071026] font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#67D2FF]/30 transition-all duration-300"
          >
            <FaCalendarCheck className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Book a Meeting</span>
            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;