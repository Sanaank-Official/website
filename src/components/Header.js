"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Handle mobile menu open/close effect on body
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.style.setProperty(
        "--mobile-menu-offset",
        "250px"
      );
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.style.setProperty("--mobile-menu-offset", "0px");
    }

    // Run handleScroll on mount to set initial state correctly
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
      document.documentElement.style.setProperty("--mobile-menu-offset", "0px");
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Header */}
      <nav
        className={`
          fixed top-0 left-0 w-full flex items-center justify-between 
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
          py-4 sm:py-5 md:py-6 
          transition-all duration-300 z-50 
          ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        <Image
          src={isScrolled ? "/images/logo.png" : "/images/logo-light.png"}
          alt="Sanaank Logo"
          width={50}
          height={50}
          className="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20"
        />
        <ul
          className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 
          text-xs sm:text-sm md:text-base lg:text-sm 
          font-bold font-inter text-header"
        >
          {[
            { name: "HOME", path: "/" },
            { name: "QUIZZES", path: "/quiz" },
            { name: "ABOUT US", path: "/about-us" },
            { name: "CONTACT US", path: "/contact-us" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.path} className="inline-block">
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                  transition-all duration-300 group-hover:w-full"
                ></span>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className={`
            flex items-center justify-center space-x-1 sm:space-x-2 
            px-3 sm:px-5 md:px-6 lg:px-7 
            py-1 sm:py-2 
            text-white font-bold rounded-full 
            text-xs sm:text-sm md:text-base 
            transition duration-100 
            ${isScrolled ? "bg-customYellow" : "bg-black"}
          `}
        >
          <i
            className="fa fa-arrow-down text-white text-xs sm:text-sm"
            style={{ marginTop: "2px" }}
            aria-hidden="true"
          ></i>
          <span className="tracking-wider">DOWNLOAD</span>
        </a>
      </nav>

      {/* Mobile Header */}
      <nav className="fixed top-0 left-0 w-full z-50 md:hidden bg-white shadow-md transition-all duration-300">
        <div className="flex justify-between items-center p-4">
          <Image
            src="/images/logo.png"
            alt="Sanaank Logo"
            width={50}
            height={15}
            className="w-10 sm:w-12"
          />
          <a
            href="#"
            className="flex items-center justify-center space-x-2 
              bg-customYellow text-white 
              px-3 sm:px-4 
              py-1 sm:py-2 
              rounded-full 
              text-xs sm:text-sm"
          >
            <i
              className="fa fa-arrow-down text-white text-xs sm:text-sm"
              style={{ marginTop: "2px" }}
              aria-hidden="true"
            ></i>
            <span className="tracking-wider">DOWNLOAD</span>
          </a>

          <button
            onClick={toggleMobileMenu}
            className="text-xl sm:text-2xl text-black"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`fixed top-16 left-0 bg-white w-full z-40 h-fit ${
              isMobileMenuOpen ? "menu" : "hiddenMenu"
            }`}
          >
            <ul className="flex flex-col items-center space-y-6 p-6">
              {[
                { name: "Home", path: "/" },
                { name: "Quizzes", path: "/quiz" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={closeMobileMenu}
                    className="text-xl sm:text-2xl text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
