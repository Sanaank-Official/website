"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMobileAlt,
	faCoins,
	faGamepad,
	faWallet,
	faUsers,
	faUserPlus,
	faListAlt,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Quizzes() {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<section
				className="relative w-full h-[40vh] flex items-center justify-center bg-cover bg-center text-white md:p-40 px-8"
				style={{
					backgroundImage: "url('/images/background/3.jpg')",
				}}>
				<div className="absolute inset-0"></div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="relative text-center">
					<h1 className="text-5xl text-white font-bold drop-shadow-md">
						Quizzes
					</h1>
					<p className="text-xl text-black mt-2">
						Welcome to Sanaank – The Ultimate Mobile Quiz Gaming
						Platform!
					</p>
				</motion.div>
			</section>

			{/* Features Section */}
			<section className="py-16 px-6 md:px-16 bg-yellow-50">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Features That Make Sanaank Unique
					</h2>
					<p className="text-lg text-gray-600">
						Transform your knowledge into rewards with these
						exciting features.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
					{/* Feature Cards */}
					{[
						{
							icon: faGamepad,
							title: "Wide Variety of Quizzes",
							description:
								"Explore quizzes across categories like General Knowledge, Science, Sports, and more.",
						},
						{
							icon: faCoins,
							title: "Affordable Participation",
							description:
								"Join quizzes with entry fees as low as ₹50 and win prizes up to ₹1,00,000!",
						},
						{
							icon: faMobileAlt,
							title: "Easy-to-Use Mobile App",
							description:
								"A hassle-free app for registration, quizzes, and rewards.",
						},
						{
							icon: faWallet,
							title: "Real Cash Prizes",
							description:
								"Compete in your favorite quizzes and enjoy instant cash rewards.",
						},
						{
							icon: faUsers,
							title: "Anytime, Anywhere",
							description:
								"Play from anywhere—home or on the go. The thrill of quizzes is always with you.",
						},
					].map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 3 }}
							className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
							<FontAwesomeIcon
								icon={feature.icon}
								className="text-4xl text-customYellow mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600 text-center">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-16 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
						How It Works
					</h2>
					<p className="text-lg md:text-xl text-gray-600">
						Experience Sanaank in just five simple steps.
					</p>
				</motion.div>

				{/* Steps Container */}
				<div className="mt-16 flex flex-wrap justify-center gap-8">
					{[
						{
							title: "Download the App",
							description:
								"Install Sanaank from the app store and kickstart your journey.",
							icon: faMobileAlt,
						},
						{
							title: "Register",
							description:
								"Create a profile in a few easy steps to get started.",
							icon: faUserPlus,
						},
						{
							title: "Browse Quizzes",
							description:
								"Pick a quiz category that matches your expertise.",
							icon: faListAlt,
						},
						{
							title: "Compete",
							description:
								"Outsmart opponents, answer questions, and win cash rewards!",
							icon: faTrophy,
						},
						{
							title: "Withdraw Winnings",
							description:
								"Easily transfer your prize money to your wallet or bank account.",
							icon: faWallet,
						},
					].map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: index * 0.2,
							}}
							className="p-8 rounded-3xl border-b-4 border-x-2 border-customYellow transition-transform duration-300 transform hover:scale-105 flex flex-col items-center text-center">
							{/* Icon */}
							<div className="w-16 h-16 bg-yellow-50 text-customYellow rounded-full flex items-center justify-center mb-4">
								<FontAwesomeIcon
									icon={step.icon}
									className="text-2xl"
								/>
							</div>

							{/* Title */}
							<h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
								{step.title}
							</h3>

							{/* Description */}
							<p className="text-gray-600 text-sm md:text-base">
								{step.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-customYellow text-white text-center">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}>
					<h2 className="text-3xl md:text-4xl font-bold">
						Start Playing Today!
					</h2>
					<p className="text-lg mt-4">
						Knowledge has never been so rewarding. Download the
						Sanaank app and compete in quizzes to win exciting cash
						prizes.
					</p>
					<motion.a
						href="#download"
						className="mt-8 inline-block px-8 py-3 bg-white text-customYellow font-semibold rounded-full transition duration-200 hover:bg-yellow-500 hover:text-white">
						Download Now
					</motion.a>
				</motion.div>
			</section>
		</div>
	);
}
