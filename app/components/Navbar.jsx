"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";
import {
  FaHome,
  FaServicestack,
  FaBriefcase,
  FaInfoCircle,
  FaEnvelope,
  FaTimes,
  FaBars,
  FaRocket,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Services", path: "/services", icon: FaServicestack },
    { name: "Work", path: "/ourwork", icon: FaBriefcase },
    { name: "About", path: "/about", icon: FaInfoCircle },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
  ];

  const isActiveLink = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-[#0D1328]/90 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(103, 210, 255, 0.15)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="shrink-0 group">
              <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-xl w-32 h-10 xs:w-36 xs:h-12 sm:w-44 sm:h-14 md:w-52 md:h-16 lg:w-60 lg:h-18">
                  <Image
                    src={logo}
                    alt="Wasi Dev Solutions"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => {
                const isActive = isActiveLink(link.path);
                const Icon = link.icon;
                return (
                  <div
                    key={link.name}
                    className="animate-fadeInDown"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      href={link.path}
                      className={`px-3 lg:px-4 py-2 font-medium rounded-xl transition-all duration-300 relative group flex items-center gap-1.5 lg:gap-2 text-sm lg:text-[15px] ${
                        isActive
                          ? "text-white"
                          : "text-[#B6BCC8] hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
                      <span>{link.name}</span>
                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 bg-linear-to-r from-[#67D2FF] to-[#A7D85E] transition-all duration-300 -translate-x-1/2 ${
                          isActive ? "w-5/6" : "w-0 group-hover:w-5/6"
                        }`}
                      />
                    </Link>
                  </div>
                );
              })}

              <Link href="/contact">
                <button
                  className="ml-3 lg:ml-5 px-4 lg:px-6 py-2 lg:py-2.5 text-[#071026] font-semibold rounded-full shadow-lg shadow-[#67D2FF]/20 hover:shadow-[#67D2FF]/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 text-sm lg:text-[15px] whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg, #67D2FF, #A7D85E)",
                  }}
                >
                  <FaRocket className="w-3.5 h-3.5 shrink-0" />
                  Let's Talk
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#0D1328]/60 border border-[#67D2FF]/20 rounded-xl backdrop-blur-sm transition-transform duration-200 active:scale-90 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5 text-white" />
              ) : (
                <FaBars className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#071026]/85 backdrop-blur-md z-40 md:hidden animate-fadeIn"
            aria-hidden="true"
          />

          <div
            className="fixed inset-x-0 top-0 z-50 md:hidden"
            style={{ maxHeight: "100dvh", overflowY: "auto" }}
          >
            <div className="m-3 sm:mx-auto sm:max-w-sm bg-[#0D1328] rounded-2xl shadow-2xl border border-[#67D2FF]/20 overflow-hidden">
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg, #67D2FF, #A7D85E)" }}
              />

              <div className="px-5 pt-5 pb-6 space-y-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="relative w-28 h-9 sm:w-36 sm:h-11">
                    <Image
                      src={logo}
                      alt="Wasi Dev Solutions"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors touch-manipulation"
                    aria-label="Close menu"
                  >
                    <FaTimes className="w-4 h-4 text-[#B6BCC8]" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-1.5">
                  {navLinks.map((link, index) => {
                    const isActive = isActiveLink(link.path);
                    const Icon = link.icon;
                    return (
                      <div
                        key={link.name}
                        className="animate-fadeInUp"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Link
                          href={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 text-base sm:text-lg font-medium py-3 px-4 rounded-xl transition-all touch-manipulation ${
                            isActive
                              ? "text-white bg-linear-to-r from-[#67D2FF]/15 to-[#A7D85E]/15"
                              : "text-[#B6BCC8] hover:text-white hover:bg-white/5 active:bg-white/10"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 shrink-0 ${
                              isActive ? "text-[#67D2FF]" : "text-[#8A92A6]"
                            }`}
                          />
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="ml-auto w-2 h-2 rounded-full bg-[#67D2FF]" />
                          )}
                        </Link>
                      </div>
                    );
                  })}
                </nav>

                <div
                  className="h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(103,210,255,0.3), transparent)",
                  }}
                />

                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    className="w-full py-3.5 text-[#071026] font-semibold rounded-full shadow-lg shadow-[#67D2FF]/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base touch-manipulation"
                    style={{
                      background: "linear-gradient(90deg, #67D2FF, #A7D85E)",
                    }}
                  >
                    <FaRocket className="w-4 h-4" />
                    Let's Talk
                  </button>
                </Link>

                <p className="text-center text-[#B6BCC8]/40 text-xs">
                  Tap outside to close
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;