"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full flex items-center justify-around text-lg p-8 transition-all duration-300 z-50 ${
				isScrolled ? "bg-yellow-500" : "bg-transparent"
			}`}>
			<Image
				src="/images/logo-light.png"
				alt="Sanaank Logo"
				width={70}
				height={21}
			/>
			<ul className="flex space-x-8 text-white">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/quiz">Quizzes</Link>
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
				</li>
				<li>
					<Link href="/contact-us">Contact Us</Link>
				</li>
			</ul>
			<a
				href="#"
				className="px-5 py-2 text-white font-light rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform transition duration-300 ease-in-out">
				DOWNLOAD
			</a>
		</nav>
	);
}
