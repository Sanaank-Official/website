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
      <footer className="bg-yellow-100 text-black py-8">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center md:items-start md:flex-row justify-between">
          {/* Logo and Nav */}
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Sanaank Logo"
                width={70}
                height={21}
              />
            </Link>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Elements
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

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
    </div>
  );
}
