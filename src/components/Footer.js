import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa"; // Install react-icons

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Footer */}
      <footer className="bg-yellow-100 text-black py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center justify-between">
          <div className="flex justify-between w-full mb-8">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Sanaank Logo"
                width={70}
                height={21}
              />
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#">Home</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Elements</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      {/* Footer Bottom with Social Media & Arrow Button */}
      <div className="bg-white py-4 flex justify-between items-center px-8">
        {/* Copyright */}
        <p className="text-center ml-96 md:text-left text-gray-500">© Copyright 2023 - Sanaank by Designesia</p>
        <div className="flex items-center space-x-6">
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
        {/* Social Media & Arrow */}
        <div className="flex items-center space-x-6">
          
          <a onClick={scrollToTop} className="p-2 rounded-full bg-gray-800 text-white cursor-pointer ">
            <FaArrowUp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
