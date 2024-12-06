import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-12 border-t border-gray-300">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="flex flex-col items-start">
              <Link href="/">
                <Image
                  src="/images/logot.png"
                  alt="Sanaank Logo"
                  width={200}
                  height={200}
                />
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Empowering your business with the best tools.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm hover:text-gray-600">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-sm hover:text-gray-600"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-sm hover:text-gray-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm hover:text-gray-600">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm hover:text-gray-600">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm hover:text-gray-600">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-start text-left">
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p className="text-sm mb-2">
                <strong>Address:</strong>
                <br />
                123 Street Name, Business Park, City, State, ZIP
              </p>
              <p className="text-sm mb-4">
                <strong>Phone:</strong> +1 234 567 890
              </p>
              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-customYellow text-white hover:opacity-80"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-customYellow text-white hover:opacity-80"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-customYellow text-white hover:opacity-80"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <footer className="bg-gray-200 text-gray-600 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Sanaank Quiz App. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
