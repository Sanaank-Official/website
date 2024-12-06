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
                fixed top-0 left-0 w-full flex items-center justify-around 
                text-lg p-8 transition-all duration-300 z-50 
                ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
                max-md:hidden
            `}
      >
        <Image
          src={isScrolled ? "/images/logo.png" : "/images/logo-light.png"}
          alt="Sanaank Logo"
          width={70}
          height={21}
        />
        <ul className="flex space-x-8 text-black">
          <li className="relative group">
            <Link href="/" className="inline-block">
              Home
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/quiz" className="inline-block">
              Quizzes
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/about-us" className="inline-block">
              About Us
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/contact-us" className="inline-block">
              Contact Us
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
        </ul>
        <a
          href="#"
          className={`
        flex items-center justify-center space-x-2 px-7 py-1 text-white font-bold rounded-full 
        transition duration-100 
        ${isScrolled ? "bg-customYellow" : "bg-black"}
    `}
        >
          <i
            className="fa fa-arrow-down text-white text-sm"
            style={{ marginTop: "3px" }} // Space between icon and text
            aria-hidden="true"
          ></i>
          <span className="text-sm tracking-wider">DOWNLOAD</span>
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
          />
          <a
            href="#"
            className="flex items-center justify-center space-x-2 bg-customYellow text-white px-4 py-2 rounded-full text-sm"
          >
            <i
              className="fa fa-arrow-down text-white text-xs"
              style={{ marginTop: "3px" }} // Space between icon and text
              aria-hidden="true"
            ></i>
            <span className="text-sm tracking-wider">DOWNLOAD</span>
          </a>

          <button onClick={toggleMobileMenu} className="text-2xl text-black">
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
              {["Home", "Quizzes", "About Us", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item === "Home"
                        ? ""
                        : item === "Quizzes"
                        ? "quiz"
                        : item.replace(" ", "-").toLowerCase()
                    }`}
                    onClick={closeMobileMenu}
                    className="text-2xl text-black"
                  >
                    {item}
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
