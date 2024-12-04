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
				isScrolled ? "bg-customYellow" : "bg-transparent"
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
				className="px-7 py-1 text-white font-bold rounded-full bg-black  transition duration-100 h-9">
				DOWNLOAD
			</a>
		</nav>
	);
}
