"use client";

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
			<footer className="bg-white text-black py-12 border-t border-gray-300">
				<div className="container mx-auto px-6 md:px-16 lg:px-24">
					<div className="flex flex-wrap justify-between items-start text-left">
						{/* Logo Section */}
						<div className="w-full lg:w-1/4 mb-8 lg:mb-0">
							<Link href="/">
								<Image
									src="/images/logot.png"
									alt="Sanaank Logo"
									width={200}
									height={200}
								/>
							</Link>
						</div>

						{/* Navigation Sections */}
						<div className="w-full lg:w-1/4 mb-8 lg:mb-0">
							<h3 className="font-bold text-lg mb-4">Company</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/"
										className="text-sm hover:text-gray-600 relative group">
										Home
										<span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
								<li>
									<Link
										href="/about-us"
										className="text-sm hover:text-gray-600 relative group">
										About Us
										<span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
								<li>
									<Link
										href="/contact-us"
										className="text-sm hover:text-gray-600 relative group">
										Contact Us
										<span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
							</ul>
						</div>

						<div className="w-full lg:w-1/4 mb-8 lg:mb-0">
							<h3 className="font-bold text-lg mb-4">Product</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/"
										className="text-sm hover:text-gray-600 relative group">
										Features
										<span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
								<li>
									<Link
										href="/"
										className="text-sm hover:text-gray-600 relative group">
										Reviews
										<span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
								<li>
									<Link
										href="/"
										className="text-sm hover:text-gray-600 relative group">
										Download
										<span className="block absolute w-0 h-[2px] bg-gray-600 left-0 bottom-0 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Us Section */}
						<div className="w-full lg:w-1/4 hidden lg:block">
							<h3 className="font-bold text-lg mb-4">
								Contact Us
							</h3>
							<ul className="space-y-2">
								<li className="text-sm">
									Sanaank (Meterio Edutech Pvt Ltd)
									<br /> K110, Crescent, Forest Trails,
									<br /> Bhugaon, Bavdhan,
									<br /> Pune, 412115
								</li>
								<li className="text-sm">+91 9665657759</li>
								<li className="flex space-x-4">
									<a
										href="#"
										className="p-2 rounded-full bg-customYellow text-white">
										<FaFacebook size={20} />
									</a>
									<a
										href="#"
										className="p-2 rounded-full bg-customYellow text-white">
										<FaTwitter size={20} />
									</a>
									<a
										href="#"
										className="p-2 rounded-full bg-customYellow text-white">
										<FaInstagram size={20} />
									</a>
								</li>
								<li className="text-sm">
									<a
										href="mailto:support@sanaank.com"
										className="hover:text-gray-600">
										support@sanaank.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

			{/* Footer Bottom */}
			<footer className="bg-white text-black py-4 border-t border-gray-300">
				<div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
					{/* Copyright */}
					<p className="text-sm text-gray-500">
						© Copyright 2024 - Sanaank Quiz App
					</p>
					<div className="flex flex-row gap-10">
						{/* Social Media */}
						<div className="flex space-x-4 mb-2 md:flex mt-2 md:hidden">
							<a
								href="#"
								className="p-2 rounded-full bg-customYellow text-white">
								<FaFacebook size={20} />
							</a>
							<a
								href="#"
								className="p-2 rounded-full bg-customYellow text-white">
								<FaTwitter size={20} />
							</a>
							<a
								href="#"
								className="p-2 rounded-full bg-customYellow text-white">
								<FaInstagram size={20} />
							</a>
						</div>
						{/* Scroll to Top */}
						<div className="flex items-center space-x-6">
							<a
								onClick={scrollToTop}
								className="p-2 rounded-full bg-gray-800 text-white cursor-pointer">
								<FaArrowUp size={20} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
