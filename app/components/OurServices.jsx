"use client";

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  FaGlobe, 
  FaShoppingCart, 
  FaChartLine, 
  FaCode, 
  FaCogs, 
  FaPalette,
  FaArrowRight,
  FaSparkles
} from 'react-icons/fa';
import image1 from '@/public/webdesign.webp';
import image2 from '@/public/ecomsolution.webp';
import image3 from '@/public/seo.webp';
import image4 from '@/public/webapp.webp';
import image5 from '@/public/support.webp';
import image6 from '@/public/uiux.webp';

const OurServices = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = React.useState(false);

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

  const services = [
    {
      icon: FaGlobe,
      image: image1,
      title: "Website Design",
      description: "Conversion-focused websites built with modern UI principles — fast, beautiful, and crafted to turn visitors into paying clients.",
      badge: "Most Popular",
      color: "#67D2FF",
      accentColor: "#A7D85E",
    },
    {
      icon: FaShoppingCart,
      image: image2,
      title: "Ecommerce Solutions",
      description: "Full-featured online stores with seamless checkout, inventory management, and real-time analytics built to scale.",
      badge: null,
      color: "#A7D85E",
      accentColor: "#67D2FF",
    },
    {
      icon: FaChartLine,
      image: image3,
      title: "SEO & Performance",
      description: "Data-driven SEO strategies paired with Core Web Vitals optimization to rank higher, load faster, and convert more.",
      badge: "High ROI",
      color: "#67D2FF",
      accentColor: "#A7D85E",
    },
    {
      icon: FaCode,
      image: image4,
      title: "Web Applications",
      description: "Scalable custom web apps engineered with cutting-edge tech stacks to automate workflows and accelerate your operations.",
      badge: null,
      color: "#A7D85E",
      accentColor: "#67D2FF",
    },
    {
      icon: FaCogs,
      image: image5,
      title: "Maintenance & Support",
      description: "Proactive 24/7 monitoring, security patches, and a dedicated support team so your site stays fast and secure — always.",
      badge: "24/7",
      color: "#67D2FF",
      accentColor: "#A7D85E",
    },
    {
      icon: FaPalette,
      image: image6,
      title: "Brand & UI/UX Design",
      description: "Cohesive brand identities and pixel-perfect interfaces designed to build trust, delight users, and grow your presence.",
      badge: null,
      color: "#A7D85E",
      accentColor: "#67D2FF",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-[#071026] font-['Outfit',sans-serif]" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUpService {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: translateX(-150%);
        }
        .btn-shimmer:hover::after {
          animation: shimmer 0.55s ease forwards;
        }
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .fade-in-up-service {
          opacity: 0;
          animation: fadeInUpService 0.55s ease-out forwards;
        }
        .stagger-services > * {
          opacity: 0;
          animation: fadeInUpService 0.55s ease-out forwards;
        }
        .stagger-services > *:nth-child(1) { animation-delay: 0.08s; }
        .stagger-services > *:nth-child(2) { animation-delay: 0.16s; }
        .stagger-services > *:nth-child(3) { animation-delay: 0.24s; }
        .stagger-services > *:nth-child(4) { animation-delay: 0.32s; }
        .stagger-services > *:nth-child(5) { animation-delay: 0.40s; }
        .stagger-services > *:nth-child(6) { animation-delay: 0.48s; }
        .service-card {
          transition: transform 0.25s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.5' stroke-opacity='0.06'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-32 left-[-8%] w-96 h-96 rounded-full bg-[#67D2FF]/6 blur-3xl" />
        <div className="absolute bottom-16 right-[-8%] w-120 h-120 rounded-full bg-[#A7D85E]/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-62.5 rounded-full bg-[#67D2FF]/3 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 ${isInView ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1328] border border-[#67D2FF]/25 mb-5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67D2FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#67D2FF]" />
            </span>
            <span className="text-xs sm:text-sm text-[#67D2FF] font-medium tracking-wide">✦ OUR SERVICES</span>
          </div>

          <h2 className="font-bold leading-[1.1] tracking-tight mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            <span className="text-white">Solutions That Drive</span>
            <br />
            <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
              Your Business Forward
            </span>
          </h2>

          <p className="text-[#B6BCC8] text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            From stunning designs to high-performance apps — we build digital products that grow with your business and outperform the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 stagger-services ${isInView ? '' : 'opacity-0'}`}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative cursor-pointer service-card"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 30% 30%, ${service.color}20, transparent 70%)` }}
                />

                <div
                  className="relative h-full p-5 sm:p-6 rounded-2xl border border-[#1A2440] hover:border-[#67D2FF]/30 transition-all duration-400 overflow-hidden"
                  style={{ background: 'linear-gradient(145deg, #0D1328 0%, #071026 100%)' }}
                >
                  {/* Hover tint */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(145deg, ${service.color}0C 0%, ${service.accentColor}06 100%)` }}
                  />

                  {/* Service Image */}
                  <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#071026] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Title */}
                  <h3 className="relative text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#67D2FF] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-[#8A92A6] text-xs sm:text-sm leading-relaxed mb-4 group-hover:text-[#B6BCC8] transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div
                    onClick={() => router.push("/services")}
                    className="relative flex items-center gap-1.5 text-xs sm:text-sm font-semibold group-hover:gap-2.5 transition-all duration-300 cursor-pointer"
                    style={{ color: service.color }}
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Bottom border slide */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${service.color}, ${service.accentColor})` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 sm:mt-16 md:mt-20 ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.45s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => router.push("/services")}
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-full border-2 border-[#67D2FF]/35 text-white font-bold text-sm sm:text-base backdrop-blur-sm hover:border-[#67D2FF] hover:shadow-lg hover:shadow-[#67D2FF]/10 hover:scale-105 active:scale-95 transition-all duration-300"
              style={{ background: 'rgba(13,19,40,0.8)' }}
            >
              View All Services →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;