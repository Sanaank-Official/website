import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Footer */}
      <footer className="bg-white text-black py-12 border-t border-gray-300">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-left">
            {/* Logo */}
            <div className="mb-10">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Sanaank Logo"
                  width={140}
                  height={38}
                />
              </Link>
            </div>
            {/* Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      About Us
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Jobs
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Contact
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Features
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Pricing
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Reviews
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Download
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Blog
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-600 relative group"
                    >
                      Video Tutorial
                      <span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-white text-black py-0 border-t border-gray-300">
      {/* Footer Bottom */}
      <div className="bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm md:ml-96 text-center md:text-left text-gray-500 mb-4 md:mb-0">
          © Copyright 2023 - Sanaank by Designesia
        </p>
        {/* Social Media */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="p-2 rounded-full bg-gray-800 text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="p-2 rounded-full bg-gray-800 text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="p-2 rounded-full bg-gray-800 text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="p-2 rounded-full bg-gray-800 text-white">
            <FaInstagram size={20} />
          </a>
        </div>
        {/* Scroll to Top */}
        <div className="flex items-center space-x-6">
          <a
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-800 text-white cursor-pointer"
          >
            <FaArrowUp size={20} />
          </a>
        </div>
      </div>
      </footer>
    </div>
  );
}
