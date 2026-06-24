"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  FaGlobe,
  FaShoppingCart,
  FaChartLine,
  FaCode,
  FaCogs,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaBolt,
  FaUsers,
  FaClock,
  FaRocket
} from 'react-icons/fa';
import image1 from '@/public/webdesign.webp';
import image2 from '@/public/ecomsolution.webp';
import image3 from '@/public/seo.webp';
import image4 from '@/public/webapp.webp';
import image5 from '@/public/support.webp';
import image6 from '@/public/uiux.webp';
const Services = () => {
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

  const services = [
    {
      id: 1,
      title: "Website Design",
      icon: FaGlobe,
      color: "#67D2FF",
      bgColor: "from-[#67D2FF]/20 to-[#67D2FF]/5",
      image: image1,
      description: "Modern, conversion-focused designs that captivate visitors and drive results.",
      solutions: [
        "Conversion-focused UI/UX design",
        "90+ PageSpeed performance score",
        "Fully responsive across all devices",
        "SEO-optimized structure"
      ],
      benefits: ["98% Satisfaction", "2x Faster", "Mobile-First"]
    },
    {
      id: 2,
      title: "Ecommerce Solutions",
      icon: FaShoppingCart,
      color: "#A7D85E",
      bgColor: "from-[#A7D85E]/20 to-[#A7D85E]/5",
      image: image2,
      description: "Powerful online stores with seamless checkout and intelligent inventory management.",
      solutions: [
        "Seamless multi-payment checkout",
        "Automated inventory management",
        "PCI compliant & SSL secured",
        "User-friendly admin dashboard"
      ],
      benefits: ["30% Conversion", "Secure", "Easy Management"]
    },
    {
      id: 3,
      title: "SEO Performance",
      icon: FaChartLine,
      color: "#67D2FF",
      bgColor: "from-[#67D2FF]/20 to-[#67D2FF]/5",
      image: image3,
      description: "Data-driven SEO strategies that boost rankings and drive organic traffic growth.",
      solutions: [
        "Keyword research & optimization",
        "On-page & off-page SEO",
        "Competitor analysis",
        "Monthly performance reporting"
      ],
      benefits: ["Top Rankings", "200% Traffic", "Monthly Reports"]
    },
    {
      id: 4,
      title: "Web Applications",
      icon: FaCode,
      color: "#A7D85E",
      bgColor: "from-[#A7D85E]/20 to-[#A7D85E]/5",
      image: image4,
      description: "Scalable web applications built with modern tech stacks for your business needs.",
      solutions: [
        "React, Node.js, Next.js stack",
        "Cloud-based scalable architecture",
        "Enterprise-grade security",
        "Easy maintenance & updates"
      ],
      benefits: ["Scalable", "Secure", "Modern Tech"]
    },
    {
      id: 5,
      title: "Maintenance & Support",
      icon: FaCogs,
      color: "#67D2FF",
      bgColor: "from-[#67D2FF]/20 to-[#67D2FF]/5",
      image: image5,
      description: "24/7 monitoring and support to keep your website secure and running smoothly.",
      solutions: [
        "99.9% uptime guarantee",
        "Regular security audits",
        "Automatic software updates",
        "2-hour response time"
      ],
      benefits: ["99.9% Uptime", "24/7 Support", "Security First"]
    },
    {
      id: 6,
      title: "Brand UI/UX Design",
      icon: FaPalette,
      color: "#A7D85E",
      bgColor: "from-[#A7D85E]/20 to-[#A7D85E]/5",
      image: image6,
      description: "Cohesive brand identities and intuitive interfaces that delight users.",
      solutions: [
        "Complete brand identity design",
        "User-centered interface design",
        "Interactive prototypes",
        "Brand story & guidelines"
      ],
      benefits: ["Brand Consistency", "Better UX", "Higher Engagement"]
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: FaRocket },
    { number: "98%", label: "Client Satisfaction", icon: FaUsers },
    { number: "50+", label: "Expert Team", icon: FaStar },
    { number: "24/7", label: "Support Available", icon: FaClock },
  ];

  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-28 overflow-hidden bg-[#071026]" ref={sectionRef}>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.5' stroke-opacity='0.06'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute top-20 left-[-10%] w-125 h-125 rounded-full bg-[#67D2FF]/5 blur-3xl" />
        <div className="absolute bottom-20 right-[-10%] w-150 h-150 rounded-full bg-[#A7D85E]/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Hero Section */}
        <div className={`text-center mb-12 md:mb-16 ${isInView ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1328] border border-[#67D2FF]/20 mb-6 backdrop-blur-sm">
            <FaStar className="w-4 h-4 text-[#67D2FF]" />
            <span className="text-sm text-[#67D2FF] font-medium">✦ OUR SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
            <span className="text-white">What We</span>
            <br />
            <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
              Deliver
            </span>
          </h1>

          <p className="text-[#B6BCC8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            From strategy to execution, we provide end-to-end digital solutions 
            that help businesses thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid - Clean Card Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-services ${isInView ? '' : 'opacity-0'}`}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card group relative bg-linear-to-br from-[#0D1328] to-[#071026] rounded-2xl border border-[#67D2FF]/15 overflow-hidden cursor-pointer"
              >
                {/* Image Section */}
                <div className="service-image-wrapper relative h-48 sm:h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="service-image object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#071026] via-[#071026]/60 to-transparent" />
                  
                  {/* Icon on image */}
                  <div className="absolute bottom-4 left-4 service-icon-wrapper">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.bgColor} flex items-center justify-center backdrop-blur-sm border border-[${service.color}]/30`}>
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#67D2FF] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#8A92A6] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Solutions List */}
                  <ul className="space-y-2 mb-4">
                    {service.solutions.slice(0, 3).map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#B6BCC8]">
                        <FaCheckCircle className="w-3 h-3 text-[#A7D85E] mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#67D2FF]/10">
                    {service.benefits.map((benefit, idx) => (
                      <span 
                        key={idx} 
                        className="benefit-tag text-xs px-2.5 py-1 rounded-full bg-[#67D2FF]/10 text-[#67D2FF] font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-12 md:mt-16 text-center ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0D1328] to-[#071026] border border-[#67D2FF]/20 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#67D2FF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D85E]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <FaBolt className="w-10 h-10 md:w-12 md:h-12 text-[#67D2FF] mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-[#B6BCC8] mb-6 max-w-md mx-auto px-4">
                Let's create a digital solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <button 
                  onClick={() => router.push("/contact")} 
                  className="group px-6 sm:px-8 py-3 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] rounded-full text-[#071026] font-semibold shadow-lg shadow-[#67D2FF]/20 hover:shadow-[#67D2FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => router.push("/about")} 
                  className="px-6 sm:px-8 py-3 bg-[#0D1328] border border-[#67D2FF]/30 rounded-full text-white font-semibold hover:border-[#67D2FF] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Learn About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;