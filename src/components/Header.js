"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        // Handle mobile menu open/close effect on body
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
            document.documentElement.style.setProperty('--mobile-menu-offset', '250px');
        } else {
            document.body.classList.remove('overflow-hidden');
            document.documentElement.style.setProperty('--mobile-menu-offset', '0px');
        }

        // Run handleScroll on mount to set initial state correctly
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.classList.remove('overflow-hidden');
            document.documentElement.style.setProperty('--mobile-menu-offset', '0px');
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Header */}
            <nav className={`
                fixed top-0 left-0 w-full flex items-center justify-around 
                text-lg p-8 transition-all duration-300 z-50 
                ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
                max-md:hidden
            `}>
                {isScrolled ? (
                    <Image
                        src="/images/logo.png"
                        alt="Sanaank Logo"
                        width={70}
                        height={21}
                    />
                ) : (
                    <Image
                        src="/images/logo-light.png"
                        alt="Sanaank Logo"
                        width={70}
                        height={21}
                    />
                )}
                <ul className="flex space-x-8 text-black">
                    <li className="relative group">
                        <Link href="/" className="inline-block">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/quiz" className="inline-block">
                            Quizzes
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/about-us" className="inline-block">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/contact-us" className="inline-block">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
                <a
                    href="#"
                    className={`
                        px-7 py-1 text-white font-bold rounded-full 
                        transition duration-100 
                        ${isScrolled ? "bg-customYellow" : "bg-black"}
                    `}>
                    DOWNLOAD
                </a>
            </nav>

            {/* Mobile Header */}
            <nav className={`
                fixed top-0 left-0 w-full z-50 
                md:hidden transition-all duration-300
                ${isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}
            `}>
                <div className="flex justify-between items-center p-4">
                    <Image
                        src="/images/logo-small.png"  // Use a smaller logo for mobile view
                        alt="Sanaank Logo"
                        width={50}
                        height={15}
                    />
                    <div className="flex items-center space-x-4">
                        <a
                            href="#"
                            className="bg-customYellow text-white px-4 py-2 rounded-full text-sm"
                        >
                            DOWNLOAD
                        </a>
                        <button 
                            onClick={toggleMobileMenu}
                            className="focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            ) : (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16" 
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Slide Down */}
                <div className={`
                    absolute top-full left-0 w-full bg-white 
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
                    shadow-lg
                `}>
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <Link 
                                href="/" 
                                className="block py-2 border-b"
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/quiz" 
                                className="block py-2 border-b"
                                onClick={toggleMobileMenu}
                            >
                                Quizzes
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about-us" 
                                className="block py-2 border-b"
                                onClick={toggleMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/contact-us" 
                                className="block py-2 border-b"
                                onClick={toggleMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
