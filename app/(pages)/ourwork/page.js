"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
  FaEye,
  FaHeart,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaChartLine,
  FaMobileAlt,
  FaTrophy,
  FaUsers,
  FaClock,
  FaGithub,
  FaRocket,
  FaFilter
} from 'react-icons/fa';

const WorkShow = () => {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
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

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaRocket },
    { id: 'web', name: 'Web Design', icon: FaGlobe },
    { id: 'ecommerce', name: 'E-commerce', icon: FaShoppingCart },
    { id: 'seo', name: 'SEO', icon: FaChartLine },
    { id: 'app', name: 'Web Apps', icon: FaCode },
    { id: 'brand', name: 'Branding', icon: FaMobileAlt },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Fashion E-commerce",
      category: "ecommerce",
      categoryName: "E-commerce",
      client: "Fashion Elite",
      description: "Premium online store with seamless checkout, AI recommendations, and immersive shopping experience.",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: [
        { label: "Revenue", value: "+156%" },
        { label: "Conversion", value: "+42%" },
        { label: "Speed", value: "92/100" }
      ],
      year: "2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Portal",
      category: "web",
      categoryName: "Web Design",
      client: "MediCare Plus",
      description: "Patient management system with appointment scheduling, telemedicine integration, and secure data handling.",
      image: "/images/project2.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      metrics: [
        { label: "Engagement", value: "+89%" },
        { label: "Appointments", value: "2.5K+" },
        { label: "Rating", value: "4.9/5" }
      ],
      year: "2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      category: "app",
      categoryName: "Web Apps",
      client: "WealthWave",
      description: "Real-time financial dashboard with analytics, portfolio tracking, and AI-powered investment insights.",
      image: "/images/project3.jpg",
      tags: ["Vue.js", "D3.js", "Firebase", "Chart.js"],
      metrics: [
        { label: "Data", value: "10M+" },
        { label: "Response", value: "<200ms" },
        { label: "Users", value: "50K+" }
      ],
      year: "2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant Chain SEO",
      category: "seo",
      categoryName: "SEO",
      client: "TasteBuds Group",
      description: "Comprehensive SEO strategy that boosted organic traffic and local search visibility across 50+ locations.",
      image: "/images/project4.jpg",
      tags: ["SEO", "Analytics", "Content Strategy", "Local SEO"],
      metrics: [
        { label: "Traffic", value: "+234%" },
        { label: "Keywords", value: "1.2K+" },
        { label: "Visibility", value: "Top 3" }
      ],
      year: "2023",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Tech Startup Branding",
      category: "brand",
      categoryName: "Branding",
      client: "NexGen AI",
      description: "Complete brand identity including logo, design system, website, and marketing collateral for AI startup.",
      image: "/images/project5.jpg",
      tags: ["Brand Strategy", "UI/UX", "Design System", "Illustration"],
      metrics: [
        { label: "Recognition", value: "+78%" },
        { label: "Investors", value: "+200%" },
        { label: "Engagement", value: "+156%" }
      ],
      year: "2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "web",
      categoryName: "Web Design",
      client: "PropertyHub",
      description: "Modern real estate platform with property listings, virtual tours, and AI property matching.",
      image: "/images/project6.jpg",
      tags: ["React", "Mapbox", "Socket.io", "Redis"],
      metrics: [
        { label: "Listings", value: "10K+" },
        { label: "Growth", value: "+167%" },
        { label: "Time on Site", value: "+89%" }
      ],
      year: "2024",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { number: "20+", label: "Projects Delivered", icon: FaCode },
    { number: "98%", label: "Client Satisfaction", icon: FaHeart },
    { number: "20+", label: "Happy Clients", icon: FaUsers },
    { number: "24/7", label: "Support", icon: FaClock },
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
            <FaTrophy className="w-4 h-4 text-[#67D2FF]" />
            <span className="text-sm text-[#67D2FF] font-medium">✦ OUR PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
            <span className="text-white">Our Creative</span>
            <br />
            <span className="bg-linear-to-r from-[#67D2FF] via-[#A7D85E] to-[#67D2FF] bg-clip-text text-transparent animate-gradient">
              Latest Projects
            </span>
          </h1>

          <p className="text-[#B6BCC8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Explore our portfolio of successful projects that have helped businesses 
            achieve their digital goals and stand out from the competition.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16 stagger-projects ${isInView ? '' : 'opacity-0'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card text-center p-4 md:p-6 rounded-2xl bg-linear-to-br from-[#0D1328] to-[#071026] border border-[#67D2FF]/15 cursor-pointer">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#67D2FF] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#67D2FF] to-[#A7D85E] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-[#B6BCC8]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12 ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = filter === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`filter-btn inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm ${
                  isActive
                    ? 'bg-linear-to-r from-[#67D2FF] to-[#A7D85E] text-[#071026] font-semibold shadow-lg shadow-[#67D2FF]/30'
                    : 'bg-[#0D1328] text-[#B6BCC8] hover:text-white border border-[#67D2FF]/20 hover:border-[#67D2FF]/50'
                }`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-projects ${isInView ? '' : 'opacity-0'}`}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-linear-to-br from-[#0D1328] to-[#071026] rounded-2xl border border-[#67D2FF]/15 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#071026] via-[#071026]/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-[#67D2FF]/90 text-[#071026]">
                    {project.categoryName}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-[#0D1328]/80 text-white border border-[#67D2FF]/20 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Overlay Links */}
                <div className="project-overlay absolute inset-0 bg-[#071026]/80 flex items-center justify-center gap-3 sm:gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-[#67D2FF] text-[#071026] hover:scale-110 transition-transform"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-[#0D1328] text-white border border-[#67D2FF]/30 hover:scale-110 transition-transform"
                  >
                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                {/* Client & Title */}
                <div className="mb-3">
                  <p className="text-[10px] sm:text-xs text-[#67D2FF] mb-0.5">{project.client}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#67D2FF] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#8A92A6] text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-tag text-center p-1.5 rounded-lg bg-[#67D2FF]/5 border border-[#67D2FF]/10">
                      <div className="text-[10px] sm:text-xs font-bold text-[#67D2FF]">{metric.value}</div>
                      <div className="text-[8px] sm:text-[10px] text-[#8A92A6]">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-[#67D2FF]/10 text-[#67D2FF]">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-[#67D2FF]/10 text-[#8A92A6]">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Border Gradient */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#B6BCC8]">No projects found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className={`mt-12 md:mt-16 text-center ${isInView ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0D1328] to-[#071026] border border-[#67D2FF]/20 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#67D2FF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D85E]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <FaStar className="w-10 h-10 md:w-12 md:h-12 text-[#67D2FF] mx-auto mb-4 float-animation" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-[#B6BCC8] mb-6 max-w-md mx-auto px-4">
                Let's create something amazing together. Get in touch with us today.
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShow;