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

    return (
        <div className="relative">
            <header className="max-w-7xl mx-auto px-4 py-2">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border">
                        {/* Logo */}
                            <Link href="/" className="hidden sm:block">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/logo-navbar.svg"
                                alt="Logo"
                                width={40}
                                height={40}
                                priority
                            />
                              <h3 className='text-lg font-semibold text-neutral-900'> VAT: Dual Pricing PRO</h3> 
                        </div>
                            </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/products" className="text-neutral-700 font-medium hover:text-orange-500">
                                Features
                            </Link>
                            <Link href="/developers" className="text-neutral-700 font-medium hover:text-orange-500">
                                Pricing
                            </Link>
                            <Link href="/pricing" className="text-neutral-700  font-medium hover:text-orange-500">
                                Blogs
                            </Link>
                            <Link
                                href="/contact"
                                className="px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-600 transition"
                            >
                                Contact us
                            </Link>
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
                                <Link
                                    href="/products"
                                    className="text-gray-700 hover:text-gray-900 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/use-cases"
                                    className="text-gray-700 hover:text-gray-900 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Use cases
                                </Link>
                                <Link
                                    href="/developers"
                                    className="text-gray-700 hover:text-gray-900 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Developers
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="text-gray-700 hover:text-gray-900 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/company"
                                    className="text-gray-700 hover:text-gray-900 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Company
                                </Link>
                            </div>
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                <Link
                                    href="/contact"
                                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact sales
                                </Link>
                                <Link
                                    href="/signin"
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;