"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const menuRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMobileMenu();
			}
		};

		// Add event listener for clicks
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			// Cleanup event listener on component unmount
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
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
			document.documentElement.style.setProperty(
				"--mobile-menu-offset",
				"0px"
			);
		}

		// Run handleScroll on mount to set initial state correctly
		handleScroll();
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.body.classList.remove("overflow-hidden");
			document.documentElement.style.setProperty(
				"--mobile-menu-offset",
				"0px"
			);
		};
	}, [isMobileMenuOpen]);

	const closeMobileMenu = () => setIsMobileMenuOpen(false);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);

		// Allow or disable scrolling based on the menu state
		if (!isMobileMenuOpen) {
			document.body.style.overflow = "auto";
		} else {
			document.body.style.overflow = "auto";
		}
	};
	return (
		<>
			<div className="w-full bg-customYellow text-black py-2 z-50">
				<div className="container mx-auto flex justify-around items-center px-4">
					{/* Left Section (Hidden on Small Screens) */}
					<div className="hidden sm:flex space-x-4">
						<Link
							href="https://www.facebook.com/SanaankGaming"
							className="hover:text-gray-200">
							<i className="fa fa-facebook"></i>
						</Link>
						<Link
							href="https://www.x.com/Sanaank"
							className="hover:text-gray-200">
							<i className="fa fa-twitter"></i>
						</Link>
						<Link
							href="https://www.instagram.com/SanaankOfficial"
							className="hover:text-gray-200">
							<i className="fa fa-instagram"></i>
						</Link>
					</div>

					{/* Right Section */}
					<div className="text-sm">
						<span className="hidden sm:inline">
							<Link
								href="/#download"
								className="hover:text-gray-200">
								Latest Version Available!
							</Link>
							&nbsp;|&nbsp;
						</span>
						<Link href="/" className="hover:text-gray-200">
							Today&apos;s Deal: 100% Login Bonus!
						</Link>
					</div>
				</div>
			</div>

			{/* Desktop Header */}
			<nav
				className={`
                    ${
						isScrolled
							? "fixed top-0 left-0 bg-white shadow-md"
							: "fixed top-10 left-0 bg-transparent"
					}
                w-full flex items-center justify-around 
                text-lg p-8 transition-all duration-300 z-50 
                max-md:hidden
            `}>
				<Image
					src="/images/logot.png"
					alt="Sanaank Logo"
					width={120}
					height={52}
				/>
				<ul className="flex space-x-8 text-header text-base tracking-wide font-bold font-inter">
					<li className="relative group">
						<Link href="/" className="inline-block">
							HOME
							<span
								className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
					<li className="relative group">
						<Link href="/quiz" className="inline-block">
							QUIZZES
							<span
								className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
					<li className="relative group">
						<Link href="/about-us" className="inline-block">
							ABOUT US
							<span
								className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
					<li className="relative group">
						<Link href="/contact-us" className="inline-block">
							CONTACT US
							<span
								className="absolute bottom-0 left-0 w-0 h-0.5 bg-black 
                                transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
				</ul>
				<Link
					href="/#download"
					className={`
        flex items-center justify-center space-x-2 px-7 py-1 text-white font-bold rounded-full 
        transition duration-100 
        ${isScrolled ? "bg-customYellow" : "bg-black"}
    `}>
					<i
						className="fa fa-arrow-down text-white text-sm"
						style={{ marginTop: "3px" }} // Space between icon and text
						aria-hidden="true"></i>
					<span className="text-sm tracking-wider">DOWNLOAD</span>
				</Link>
			</nav>

			{/* Mobile Header */}
			<nav
				className={`relative z-50 w-full bg-white shadow-md transition-all duration-1000 md:hidden ${
					isMobileMenuOpen ? "h-[320px]" : "h-[80px]"
				}`}
				ref={menuRef}>
				<div className="header-container">
					<Image
						src="/images/logot.png"
						alt="Sanaank Logo"
						width={100}
						height={44}
					/>

					<Link href="/#download" className="download-button">
						<i
							className="fa fa-arrow-down text-white text-xs"
							style={{ marginTop: "3px" }} // Space between icon and text
							aria-hidden="true"></i>
						<span className="download-text">DOWNLOAD</span>
					</Link>

					<button onClick={toggleMobileMenu} className="menu-toggle">
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* Text Content Below Header */}
				<div
					className={`absolute top-[90px] w-full px-5 transition-opacity duration-300 ${
						isMobileMenuOpen ? "opacity-100" : "opacity-0"
					}`}>
					<ul className="flex flex-col items-end space-y-4 mt-4 text-customGray text-left font-inter">
						{["HOME", "QUIZZES", "ABOUT US", "CONTACT US"].map(
							(item) => (
								<li
									key={item}
									onClick={toggleMobileMenu}
									className="relative w-full pb-2 pl-2 border-b-2">
									<Link
										href={
											item === "HOME"
												? "/"
												: item === "QUIZZES"
												? "quiz"
												: item
														.replace(" ", "-")
														.toLowerCase()
										}
										className="text-sm">
										{item}
									</Link>
								</li>
							)
						)}
					</ul>
				</div>
			</nav>
		</>
	);
}
