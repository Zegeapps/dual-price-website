"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/**
 * Custom animation keyframes for the compact navbar glitch effect
 * This creates a digital glitch effect with opacity transitions
 */
const glitchAnimationStyles = `
  @keyframes glitchFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-100%);
      clip-path: inset(0 0 100% 0);
    }
    20% {
      opacity: 0.3;
      transform: translateY(-80%);
      clip-path: inset(15% 0 49% 0);
    }
    25% {
      opacity: 0.5;
      transform: translateY(-60%);
      clip-path: inset(0 0 0 0);
    }
    30% {
      opacity: 0.7;
      transform: translateY(-40%);
      clip-path: inset(10% 0 43% 0);
    }
    35% {
      opacity: 0.8;
      transform: translateY(-20%);
      clip-path: inset(0 0 0 0);
    }
    40% {
      opacity: 0.9;
      transform: translateY(-10%);
      clip-path: inset(5% 0 10% 0);
    }
    45% {
      opacity: 1;
      transform: translateY(-5%);
      clip-path: inset(0 0 0 0);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      clip-path: inset(0 0 0 0);
    }
  }

  .glitch-fade-in {
    animation: glitchFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;

// Constants for better maintainability
const LOGO_IMAGE = {
  src: "https://raw.githubusercontent.com/Zegeapps/zege-assets/c95641e582b0bd0d191b26c543839e20c211b42c/public/logo-navbar.svg",
  alt: "VAT Dual Pricing PRO Logo",
  width: 36,
  height: 36,
};

const SCROLL_THRESHOLD = 50;
const MOBILE_BREAKPOINT = 768;

/**
 * Navbar component with scroll-aware animations
 * Features a main navbar and a compact floating navbar that appears on scroll
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  // Memoized resize handler
  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
    setIsMobile(newIsMobile);
    
    // Auto-close mobile menu when resizing to desktop
    if (!newIsMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Set up event listeners
  useEffect(() => {
    // Initialize states
    handleResize();
    handleScroll();

    // Add event listeners with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, handleScroll]);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  // Smooth scrolling function with memoization
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  }, []);

  // Navigation items to avoid repetition
  const navItems = [
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
  ];

  // If scrolled and not mobile, show the compact navbar
  if (isScrolled && !isMobile) {
    return (
      <>
        {/* Inject the glitch animation styles */}
        <style jsx global>{glitchAnimationStyles}</style>
        
        <div className="h-12" aria-hidden="true" /> {/* Spacer for content */}
        <div className="fixed top-3 left-0 right-0 z-50 flex justify-center">
          <nav className="glitch-fade-in flex items-center bg-white rounded-full shadow-md py-2 pl-4 pr-2 w-auto max-w-fit mx-auto border border-gray-200">
            <span className="text-sm font-semibold whitespace-nowrap">VAT: Dual Pricing PRO</span>
            <div className="flex items-center ml-6">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-neutral-700 hover:text-orange-500 px-4"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection("footer")}
                className="ml-1 px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors m-0.5"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </>
    );
  }

  // Regular navbar
  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <nav className="flex items-center justify-between bg-white rounded-lg shadow-sm px-2 py-2">
          {/* Logo */}
          <Link href="/" className="block">
            <div className="flex items-center space-x-2">
              <Image
                src={LOGO_IMAGE.src}
                alt={LOGO_IMAGE.alt}
                width={LOGO_IMAGE.width}
                height={LOGO_IMAGE.height}
                priority
              />
              <h3 className="text-base font-semibold text-neutral-900 hidden sm:block whitespace-nowrap">
                VAT: Dual Pricing PRO
              </h3>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-700 font-medium hover:text-orange-500 bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("footer")}
              className="px-5 py-1.5 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu with conditional rendering */}
        <div 
          className={`
            md:hidden bg-white mt-2 py-2 px-4 rounded-lg shadow-lg
            transition-all duration-300 ease-in-out origin-top
            ${isMenuOpen 
              ? "opacity-100 max-h-60 visible" 
              : "opacity-0 max-h-0 invisible overflow-hidden"}
          `}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-gray-900 py-2 text-left bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection("footer")}
              className="px-4 py-1.5 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors text-center cursor-pointer"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;