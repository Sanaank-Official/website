"use client";

import { useState } from "react";
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
	faLightbulb,
	faGraduationCap,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Quizzes() {
	const [activeFeature, setActiveFeature] = useState(null);

	// Sophisticated animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hover: {
			scale: 1.05,
			transition: { duration: 0.3 },
		},
	};
	const staggerContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};
	// Advanced scroll-based animation variants
	const scrollVariants = {
		offscreen: {
			y: 100,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1,
			},
		},
	};
	const staggerItemVariants = {
		hidden: {
			opacity: 0,
			x: -50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};
	const features = [
		{
			icon: faGamepad,
			title: "Diverse Quiz Universes",
			description:
				"Explore endless knowledge realms across multiple categories",
			color: "bg-purple-500",
			textColor: "text-purple-500",
			gradient: "from-purple-500 to-purple-700",
		},
		{
			icon: faCoins,
			title: "Reward Ecosystem",
			description: "Transform knowledge into tangible rewards",
			color: "bg-green-500",
			textColor: "text-green-500",
			gradient: "from-green-500 to-green-700",
		},
		{
			icon: faLightbulb,
			title: "Intelligent Matchmaking",
			description: "Compete with players of similar skill levels",
			color: "bg-blue-500",
			textColor: "text-blue-500",
			gradient: "from-blue-500 to-blue-700",
		},
		{
			icon: faGraduationCap,
			title: "Learning Pathways",
			description: "Continuous growth through adaptive quizzes",
			color: "bg-orange-500",
			textColor: "text-orange-500",
			gradient: "from-orange-500 to-orange-700",
		},
	];

	const quizSteps = [
		{
			icon: faRocket,
			title: "Launch Your Journey",
			description: "Download and set up in minutes",
		},
		{
			icon: faUserPlus,
			title: "Create Your Profile",
			description: "Personalize your quiz adventure",
		},
		{
			icon: faListAlt,
			title: "Discover Challenges",
			description: "Browse curated quiz categories",
		},
		{
			icon: faTrophy,
			title: "Compete & Conquer",
			description: "Showcase your knowledge, win rewards",
		},
		{
			icon: faWallet,
			title: "Instant Rewards",
			description: "Withdraw earnings seamlessly",
		},
	];

	return (
		<div className="w-full bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
			{/* Animated Particle-like Background Hero */}
			<section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white overflow-hidden md:p-40">
				{/* Floating Particles Effect */}
				<div className="absolute inset-0 pointer-events-none">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							initial={{
								x: Math.random() * window.innerWidth,
								y: Math.random() * window.innerHeight,
								opacity: 0,
							}}
							animate={{
								x: [
									Math.random() * window.innerWidth,
									Math.random() * window.innerWidth,
									Math.random() * window.innerWidth,
								],
								y: [
									Math.random() * window.innerHeight,
									Math.random() * window.innerHeight,
									Math.random() * window.innerHeight,
								],
								opacity: [0, 0.5, 0],
							}}
							transition={{
								duration: Math.random() * 10 + 5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="absolute w-2 h-2 bg-white/30 rounded-full"
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					className="relative z-10 text-center max-w-4xl px-4">
					<h1 className="text-5xl font-bold mb-6 drop-shadow-md">
						Sanaank: Quiz Revolution
					</h1>
					<p className="text-xl text-black mb-8 font-medium drop-shadow-xl">
						Where Knowledge Meets Excitement and Rewards
					</p>
					{/* <motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="bg-white text-yellow-600 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:bg-yellow-50 transition-all">
						Start Your Quiz Journey
					</motion.button> */}
				</motion.div>
			</section>

			{/* Features Section with Staggered Scroll Animation */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				variants={staggerContainerVariants}
				className="py-16 px-6 md:px-16 bg-white">
				<motion.div
					variants={scrollVariants}
					className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Innovative Quiz Experiences
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Discover a revolutionary platform that transforms
						learning into an exciting adventure
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={staggerItemVariants}
							className={`relative group overflow-hidden rounded-3xl p-6 text-center 
                transition-all duration-300 shadow-xl hover:shadow-2xl 
                bg-gradient-to-br ${feature.gradient} text-white`}>
							<div
								className={`
                mb-4 w-24 h-24 mx-auto rounded-full flex items-center justify-center 
                bg-white/20 group-hover:bg-white/30 transition-all duration-300
              `}>
								<FontAwesomeIcon
									icon={feature.icon}
									className="text-5xl text-white drop-shadow-md"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-3">
								{feature.title}
							</h3>
							<p className="text-base opacity-80">
								{feature.description}
							</p>
							<div className="absolute inset-x-0 bottom-0 h-1 bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Quiz Steps Section */}
			<section className="py-16 px-6 md:px-16 bg-yellow-50">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
					className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Your Quiz Expedition
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Five dynamic steps to transform your knowledge into an
						exciting journey
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-1 bg-yellow-300 h-full absolute z-0"></div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
						{quizSteps.map((step, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="bg-white rounded-2xl p-6 text-center shadow-lg relative z-20">
								<div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold z-30">
									{index + 1}
								</div>
								<div className="mb-4 w-16 h-16 bg-yellow-50 rounded-full mx-auto flex items-center justify-center">
									<FontAwesomeIcon
										icon={step.icon}
										className="text-2xl text-yellow-500"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2 text-gray-800">
									{step.title}
								</h3>
								<p className="text-gray-600 text-sm">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section
				className="py-16 text-white text-center relative overflow-hidden"
				style={{
					backgroundImage: `url('/images/background/3.jpg')`,
				}}>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="relative z-10 max-w-3xl mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Your Knowledge, Your Reward
					</h2>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						Join thousands of quiz enthusiasts and turn your
						knowledge into exciting rewards
					</p>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="bg-white text-yellow-600 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:bg-yellow-50 transition-all">
						Download Sanaank Now
					</motion.button>
				</motion.div>
			</section>
		</div>
	);
}
