"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaLayerGroup,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaStar,
  FaChevronDown,
  FaQuestionCircle
} from 'react-icons/fa';

const About = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
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

  const features = [
    { icon: FaLayerGroup, text: "Clean & Modern Designs" },
    { icon: FaShieldAlt, text: "Fast & Secure Development" },
    { icon: FaUsers, text: "100% Client Satisfaction" },
    { icon: FaHeart, text: "Ongoing Support" },
  ];

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of web development services including website design, e-commerce solutions, SEO optimization, web applications, maintenance & support, and brand UI/UX design."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of the project. A typical website takes 2-6 weeks from start to launch. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes! We offer 24/7 maintenance and support packages to keep your website secure, updated, and running smoothly. Our support includes regular backups, security updates, and technical assistance."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All websites we build are fully responsive and optimized for all devices including desktops, tablets, and mobile phones. Mobile-first design is our standard approach."
    },
    {
      question: "Do you offer SEO services?",
      answer: "Yes, we provide comprehensive SEO services including on-page optimization, keyword research, content strategy, and performance tracking to help improve your search engine rankings."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed project pricing and hourly rates. Each project is quoted based on specific requirements. Contact us for a free consultation and quote."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative min-h-screen py-20 md:py-28 overflow-hidden bg-[#071026]" ref={sectionRef}>
      

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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 ${isInView ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1328] border border-[#67D2FF]/20 mb-6 backdrop-blur-sm">
            <FaStar className="w-4 h-4 text-[#67D2FF]" />
            <span className="text-sm text-[#67D2FF] font-medium">✦ ABOUT US</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
            <span className="text-white">About</span>
            <br />
            <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
              Us
            </span>
          </h1>

          <p className="text-[#B6BCC8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            We're a full-stack development agency persistent about building modern, fast, 
            and user-friendly websites that help businesses grow online.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Features List */}
          <div className={`space-y-6 stagger-features ${isInView ? '' : 'opacity-0'}`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-linear-to-br from-[#0D1328]/50 to-[#071026]/50 border border-[#67D2FF]/10 feature-card group"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#67D2FF]/20 to-[#A7D85E]/20 flex items-center justify-center feature-icon">
                    <Icon className="w-6 h-6 text-[#67D2FF]" />
                  </div>
                  <span className="text-white text-lg font-medium group-hover:text-[#67D2FF] transition-colors">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column - Stats Grid */}
          <div className={`grid grid-cols-2 gap-5 stagger-stats ${isInView ? '' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-linear-to-br from-[#0D1328] to-[#071026] border border-[#67D2FF]/20 stat-card group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#67D2FF] to-[#A7D85E] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#B6BCC8] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`my-12 h-px bg-linear-to-r from-transparent via-[#67D2FF]/30 to-transparent ${isInView ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }} />

        {/* Mission Statement */}
        <div className={`text-center mb-16 ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.45s' }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Our Mission
          </h3>
          <p className="text-[#B6BCC8] max-w-2xl mx-auto px-4">
            To deliver exceptional digital solutions that empower businesses to thrive in the modern online landscape.
          </p>
        </div>

        {/* FAQ Section */}
        <div className={`mb-16 ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1328] border border-[#67D2FF]/20 mb-4 backdrop-blur-sm">
              <FaQuestionCircle className="w-4 h-4 text-[#67D2FF]" />
              <span className="text-sm text-[#67D2FF] font-medium">✦ FAQ</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Frequently Asked <span className="text-[#67D2FF]">Questions</span>
            </h2>
            <p className="text-[#B6BCC8] mt-2">
              Everything you need to know about our services
            </p>
          </div>

          <div className={`space-y-4 max-w-3xl mx-auto stagger-faq ${isInView ? '' : 'opacity-0'}`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-linear-to-br from-[#0D1328] to-[#071026] border border-[#67D2FF]/10 overflow-hidden faq-item"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-all duration-300"
                >
                  <span className="text-white font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown className={`w-5 h-5 text-[#67D2FF] shrink-0 faq-chevron ${openFaq === index ? 'open' : ''}`} />
                </button>
                
                <div className={`faq-content ${openFaq === index ? 'open' : ''}`}>
                  <div className="p-5 pt-0 border-t border-[#67D2FF]/10">
                    <p className="text-[#B6BCC8] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0D1328] to-[#071026] border border-[#67D2FF]/20 p-8 md:p-10 cta-card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#67D2FF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D85E]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-[#B6BCC8] mb-6 max-w-md mx-auto px-4">
                Can't find the answer you're looking for? Please contact our team.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => router.push("/contact")}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] rounded-full text-[#071026] font-semibold shadow-lg shadow-[#67D2FF]/20 hover:shadow-[#67D2FF]/40 btn-hover-scale transition-all duration-300"
                >
                  Contact Us
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => router.push("/ourwork")}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0D1328] border border-[#67D2FF]/30 rounded-full text-white font-semibold hover:border-[#67D2FF] hover:shadow-lg hover:shadow-[#67D2FF]/10 btn-hover-scale transition-all duration-300"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;