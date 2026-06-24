"use client";

import React from 'react';

const ITEMS = [
  "Web Design", "·", "AI Integration", "·", "Next.js", "·",
  "Motion UI", "·", "SaaS Products", "·", "E-Commerce", "·",
  "Brand Identity", "·", "Mobile First", "·",
];

const MarqueeTicker = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8 border-y border-[#67D2FF]/15 bg-linear-to-r from-[#071026] via-[#0A0A1F] to-[#071026] shadow-[inset_0_0_80px_rgba(103,210,255,0.03)]">
      
      {/* Gradient Fades - Left & Right */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-linear-to-r from-[#071026] via-[#071026]/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-linear-to-l from-[#071026] via-[#071026]/80 to-transparent pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-[#67D2FF]/20 to-transparent blur-sm" />
      </div>

      {/* Animated Track - Using Tailwind animation */}
      <div className="flex w-max gap-8 sm:gap-10 lg:gap-12 animate-marquee">
        {[...ITEMS, ...ITEMS].map((item, index) => {
          const isDot = item === "·";
          return (
            <span
              key={index}
              className={`flex items-center gap-3 whitespace-nowrap ${
                isDot 
                  ? "text-[#B8F23A] text-base sm:text-lg lg:text-xl font-light" 
                  : "text-[#A0A8B8]/70 hover:text-[#67D2FF] text-[11px] sm:text-xs lg:text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105"
              }`}
            >
              {item}
              {!isDot && (
                <span className="w-1 h-1 rounded-full bg-[#67D2FF]/20 ml-3" />
              )}
            </span>
          );
        })}
      </div>

      {/* Subtle Glow Animation - Using Tailwind */}
      <div className="absolute inset-0 pointer-events-none animate-glow-pulse">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-r from-transparent via-[#67D2FF]/5 to-transparent blur-2xl" />
      </div>
    </div>
  );
};

export default MarqueeTicker;