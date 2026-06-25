'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaRocket, 
  FaRobot, 
  FaBolt, 
  FaPalette, 
  FaMobileAlt,
  FaStar,
  FaArrowRight 
} from 'react-icons/fa';
import { MdOutlineEmojiEvents } from 'react-icons/md';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#071026]">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-20%] w-125 h-125 rounded-full bg-[#67D2FF]/10 blur-3xl animate-pulse-ring" />
        <div className="absolute bottom-0 right-[-20%] w-150 h-150 rounded-full bg-[#A7D85E]/10 blur-3xl animate-pulse-ring-delay" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content - Fixed className to avoid newlines */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center w-full">

          {/* Left Column */}
          <div className="text-center lg:text-left stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1328]/80 border border-[#67D2FF]/30 mb-5 backdrop-blur-sm shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#67D2FF] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#67D2FF]" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#67D2FF] tracking-wide">
                ✦ PREMIUM DIGITAL AGENCY
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bold leading-[1.1] tracking-tight mb-4 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              <span className="text-white">We Build</span>
              <br />
              <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient glow-text">
                Websites That
              </span>
              <br />
              <span className="text-white">Dominate Markets</span>
            </h1>

            {/* Description */}
            <p className="text-[#B6BCC8] text-sm sm:text-base lg:text-base xl:text-lg mb-7 max-w-lg lg:mx-0 mx-auto leading-relaxed">
              Transform your digital presence with cutting-edge web solutions.
              We create immersive experiences that drive growth, engage users,
              and deliver measurable results for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => router.push("/contact")}
                className="group relative px-7 py-3.5 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] rounded-full overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(103,210,255,0.4)] active:scale-95 text-center"
              >
                <span className="relative z-10 text-[#071026] font-bold text-sm sm:text-base flex items-center gap-2 text-center">
                  Start Your Project <FaRocket className="inline" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#A7D85E] to-[#67D2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => router.push("/ourwork")}
                className="px-7 py-3.5 bg-[#0D1328]/80 border-2 border-[#67D2FF]/40 rounded-full text-white font-bold text-sm sm:text-base hover:border-[#67D2FF] hover:shadow-xl hover:shadow-[#67D2FF]/10 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-center"
              >
                View Our Work <FaArrowRight />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start pb-14 sm:pb-0">
              {[
                { value: '20+', label: 'Projects Completed', icon: <MdOutlineEmojiEvents className="text-[#67D2FF]" /> },
                { value: '98%', label: 'Client Satisfaction', icon: <FaStar className="text-[#A7D85E]" /> },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left group cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white to-[#67D2FF] bg-clip-text text-transparent mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#B6BCC8] group-hover:text-[#67D2FF] transition-colors duration-300 flex items-center gap-1 justify-center lg:justify-start">
                    {stat.icon} {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hidden on mobile/tablet */}
          <div className="relative hidden lg:flex items-center justify-center stagger-children">
            <div className="relative w-full h-120 xl:h-130 flex items-center justify-center">

              {/* Orbiting Rings */}
              <div className="absolute inset-0 flex items-center justify-center animate-rotate">
                <div className="w-95 h-95 xl:w-105 xl:h-105 border border-[#67D2FF]/15 rounded-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-rotate-slow">
                <div className="w-72.5 h-72.5 xl:w-[320px] xl:h-80 border border-[#A7D85E]/15 rounded-full" />
              </div>

              {/* Main Card */}
              <div className="relative z-20 animate-card-float">
                <div className="w-64 xl:w-72 rounded-2xl border border-[#67D2FF]/30 shadow-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(103,210,255,0.18)] transition-all duration-500 group" style={{ background: 'linear-gradient(160deg, #0D1328 0%, #071026 100%)' }}>
                  {/* Card Header */}
                  <div className="px-4 py-3 border-b border-[#67D2FF]/20 flex items-center gap-1.5" style={{ background: 'linear-gradient(90deg, rgba(103,210,255,0.08), rgba(167,216,94,0.08))' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <div className="flex-1" />
                    <span className="text-xs text-[#67D2FF] flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#67D2FF] opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#67D2FF]" />
                      </span>
                      active now
                    </span>
                  </div>
                  {/* Card Body */}
                  <div className="p-5">
                    <div className="w-12 h-12 bg-linear-to-br from-[#67D2FF] to-[#A7D85E] rounded-xl mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-xl">✨</span>
                    </div>
                    <div className="space-y-2 mb-5">
                      <div className="h-2.5 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] rounded-full w-3/4" />
                      <div className="h-2 bg-[#67D2FF]/20 rounded-full w-1/2" />
                      <div className="h-2 bg-[#67D2FF]/20 rounded-full w-5/6" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { color: '#67D2FF', label: 'AI', icon: <FaRobot /> },
                        { color: '#A7D85E', label: '⚡', icon: <FaBolt /> },
                      ].map((item, i) => (
                        <div key={i}
                          className="flex items-center gap-3 p-2.5 rounded-xl border transition-colors duration-300"
                          style={{ background: `${item.color}08`, borderColor: `${item.color}18` }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold bg-linear-to-br"
                            style={{ background: `linear-gradient(135deg, ${item.color}, ${i === 0 ? '#A7D85E' : '#67D2FF'})` }}>
                            {item.icon || item.label}
                          </div>
                          <div className="flex-1 space-y-1.5">
                            <div className="h-1.5 rounded-full w-3/4" style={{ background: `${item.color}40` }} />
                            <div className="h-1 rounded-full w-1/2" style={{ background: `${item.color}20` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(103,210,255,0.06) 0%, transparent 60%)' }} />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-4 -left-4 z-30 animate-float-slow">
                <div className="px-3 py-2 bg-[#0D1328]/90 backdrop-blur-md rounded-2xl border shadow-xl flex items-center gap-1.5" style={{ borderColor: `#67D2FF40` }}>
                  <FaRobot className="text-[#67D2FF]" size={12} />
                  <span className="text-xs font-semibold text-[#67D2FF]">AI-Powered</span>
                </div>
              </div>

              <div className="absolute bottom-4 -right-4 z-30 animate-float-slow2">
                <div className="px-3 py-2 bg-[#0D1328]/90 backdrop-blur-md rounded-2xl border shadow-xl flex items-center gap-1.5" style={{ borderColor: `#A7D85E40` }}>
                  <FaBolt className="text-[#A7D85E]" size={12} />
                  <span className="text-xs font-semibold text-[#A7D85E]">Lightning Fast</span>
                </div>
              </div>

              <div className="absolute top-1/3 -left-6 z-30" style={{ animation: 'floatSlow 6s ease-in-out infinite 0.3s' }}>
                <div className="px-3 py-2 bg-[#0D1328]/90 backdrop-blur-md rounded-2xl border shadow-xl flex items-center gap-1.5" style={{ borderColor: `#67D2FF40` }}>
                  <FaPalette className="text-[#67D2FF]" size={12} />
                  <span className="text-xs font-semibold text-[#67D2FF]">Modern UI/UX</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-5 z-30" style={{ animation: 'floatSlow2 6.5s ease-in-out infinite 0.6s' }}>
                <div className="px-3 py-2 bg-[#0D1328]/90 backdrop-blur-md rounded-2xl border shadow-xl flex items-center gap-1.5" style={{ borderColor: `#A7D85E40` }}>
                  <FaMobileAlt className="text-[#A7D85E]" size={12} />
                  <span className="text-xs font-semibold text-[#A7D85E]">Fully Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer fade-in-delayed">
        <span className="text-[10px] uppercase tracking-widest text-[#67D2FF]/70 font-medium">Scroll</span>
        <div className="w-5 h-8 border border-[#67D2FF]/40 rounded-full flex justify-center hover:border-[#67D2FF] transition-colors duration-300 animate-scroll-bounce">
          <div className="w-1 h-2 bg-[#67D2FF] rounded-full mt-1.5 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;