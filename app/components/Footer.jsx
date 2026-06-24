"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaMailBulk, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaArrowRight,
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaHeart
} from 'react-icons/fa';
import logo from '@/public/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  const footerLinks = {
    services: [
      { name: 'Website Design', href: '/services' },
      { name: 'Ecommerce Solutions', href: '/services' },
      { name: 'SEO & Performance', href: '/services' },
      { name: 'Web Applications', href: '/services' },
      { name: 'Maintenance & Support', href: '/services' },
      { name: 'Brand & UI/UX Design', href: '/services' },
    ],
    navigate: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Work', href: '/ourwork' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialIcons = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/awais-aslam-developer/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/AwaisAslam-Dev', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://www.instagram.com/wasidevsolutions/', label: 'Instagram' },
  ];

  const contactItems = [
    { icon: FaMailBulk, href: 'mailto:wasidevsolutions@gmail.com', text: 'wasidevsolutions@gmail.com' },
    { icon: FaPhoneAlt, href: 'tel:+923418248652', text: '+92 341 824 8652' },
    { icon: FaMapMarkerAlt, href: null, text: 'Sialkot, Pakistan' },
  ];

  const LinkCol = ({ title, links }) => (
    <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
      <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 relative inline-block">
        {title}
        <div
          className="absolute -bottom-1.5 left-0 w-6 h-0.5 rounded-full"
          style={{ background: 'linear-gradient(90deg, #67D2FF, #A7D85E)' }}
        />
      </h3>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-[#8A92A6] text-sm hover:text-[#67D2FF] transition-all duration-300 flex items-center gap-1.5 group w-fit"
            >
              <FaArrowRight
                className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
              />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative bg-[#071026] overflow-hidden" ref={sectionRef}>
      <style>{`
        
      `}</style>

      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(103,210,255,0.15) 40%, rgba(167,216,94,0.3) 60%, transparent 100%)' }} />
        <div
          className="line-shimmer absolute inset-y-0 w-1/3"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(103,210,255,0.6), transparent)' }}
        />
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2367D2FF' stroke-width='0.4' stroke-opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute bottom-0 left-[-5%] w-80 h-80 rounded-full bg-[#67D2FF]/5 blur-3xl" />
        <div className="absolute top-0 right-[-5%] w-72 h-72 rounded-full bg-[#A7D85E]/5 blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 stagger-footer ${isInView ? '' : 'opacity-0'}`}>
          {/* Brand col — spans 2 cols always */}
          <div className="col-span-2 fade-in-up" style={{ animationDelay: '0.05s' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-4 brand-logo">
              <div className="relative h-10 w-32 shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={logo}
                  alt="awais site logo"
                  width={100}
                  height={100}
                  className="object-cover w-24"
                />
              </div>
              {/* <span className="text-xl font-bold">
                <span className="bg-linear-to-r from-white to-[#67D2FF] bg-clip-text text-transparent">awais</span>
                <span style={{ color: '#A7D85E' }}>site</span>
              </span> */}
            </Link>

            <p className="text-[#8A92A6] text-sm leading-relaxed mb-6 max-w-sm">
              We craft high-performance digital experiences — from pixel-perfect design to scalable web apps — built to grow your business online.
            </p>

            {/* Contact */}
            <ul className="space-y-2.5">
              {contactItems.map((c, i) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-center gap-2.5 text-[#8A92A6] hover:text-[#67D2FF] transition-colors duration-300 group">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-[#67D2FF]/20 group-hover:border-[#67D2FF]/50 transition-colors duration-300"
                      style={{ background: 'rgba(103,210,255,0.06)' }}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#67D2FF]" />
                    </div>
                    <span className="text-sm">{c.text}</span>
                  </div>
                );
                return (
                  <li key={i}>
                    {c.href ? <a href={c.href}>{inner}</a> : inner}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services col */}
          <LinkCol title="Services" links={footerLinks.services} />

          {/* Navigate col */}
          <LinkCol title="Navigate" links={footerLinks.navigate} />
        </div>

        {/* Bottom Bar */}
        <div className={`mt-10 pt-6 border-t border-[#67D2FF]/10 flex flex-col sm:flex-row justify-between items-center gap-5 ${isInView ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-[#8A92A6] text-xs">
              © {currentYear}{' '}
              <span className="text-white font-medium">wasi dev <span style={{ color: '#A7D85E' }}>    solutions</span></span>.
              All rights reserved.
            </p>
            <span className="hidden sm:block w-px h-3 bg-[#67D2FF]/20" />
            <p className="text-[#8A92A6] text-xs flex items-center gap-1">
              Crafted with <FaHeart className="text-red-500 w-3 h-3 animate-pulse" /> in Pakistan
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#8A92A6] hover:text-[#67D2FF] border border-[#67D2FF]/15 hover:border-[#67D2FF]/50 transition-all duration-300 social-icon"
                  style={{ background: 'rgba(13,19,40,0.8)' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;