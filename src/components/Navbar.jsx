'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle smooth scrolling
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false); // Close mobile menu if open
        }
    };

    return (
        <div className="relative">
            <header className="max-w-7xl mx-auto px-4 py-2">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border">
                        {/* Logo - Visible on all screen sizes */}
                        <Link href="/" className="block">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/logo-navbar.svg"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <h3 className='text-lg font-semibold text-neutral-900 hidden sm:block'> VAT: Dual Pricing PRO</h3> 
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Features link - scroll to features section */}
                            <button 
                                onClick={() => scrollToSection('features')}
                                className="text-neutral-700 font-medium hover:text-orange-500 bg-transparent border-0 cursor-pointer"
                            >
                                Features
                            </button>
                            
                            <button 
                                onClick={() => scrollToSection('pricing')}
                                className="text-neutral-700 font-medium hover:text-orange-500 bg-transparent border-0 cursor-pointer"
                            >
                                Pricing
                            </button>
                            
                            <button
                                onClick={() => scrollToSection('footer')}
                                className="px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-600 transition cursor-pointer"
                            >
                                Contact us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white mt-2 py-2 px-4 rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4 pb-4">
                                <button
                                    onClick={() => scrollToSection('features')}
                                    className="text-gray-700 hover:text-gray-900 py-2 text-left bg-transparent border-0 cursor-pointer"
                                >
                                    Features
                                </button>
                                
                                <button
                                    onClick={() => scrollToSection('pricing')}
                                    className="text-gray-700 hover:text-gray-900 py-2 text-left bg-transparent border-0 cursor-pointer"
                                >
                                    Pricing
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => scrollToSection('footer')}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-center cursor-pointer"
                                >
                                    Contact us
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;