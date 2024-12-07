"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Target, Trophy } from "lucide-react";

const About = () => {
	return (
		<div className="max-w-full bg-gray-50">
			{/* 1. Hero Section */}
			<section
				className="relative bg-cover bg-center flex items-center justify-center md:p-40"
				style={{
					backgroundImage: `url('/images/background/3.jpg')`,
					height: "40vh",
				}}>
				<div className="container mx-auto text-center">
					<motion.h1
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 10 }}
						transition={{ duration: 1 }}
						className="text-5xl text-white font-bold drop-shadow-md mb-4">
						About Us
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
						className="text-xl text-black mt-4">
						Get to know us better
					</motion.p>
				</div>
			</section>

			{/* 2. Welcome Section */}
			<section className="py-16 px-8 bg-white">
				<div className="container mx-auto flex flex-col md:flex-row items-center">
					<motion.div
						className="md:w-1/2 mb-8 md:mb-0 md:mr-12"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}>
						<Image
							src="/images/misc/5.png"
							alt="Sanaank Welcome"
							width={500}
							height={500}
							priority
						/>
					</motion.div>
					<motion.div
						className="md:w-1/2"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<h2 className="text-4xl font-bold pb-3 text-gray-800 text-left">
							Welcome to{" "}
							<span className="text-yellow-500">Sanaank</span>
						</h2>
						<h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">
							Where Knowledge Meets Rewards!
						</h2>

						<p className="text-lg text-gray-600 leading-relaxed text-left">
							At Sanaank, we believe that knowledge is more than
							power—it's a gateway to endless possibilities. We
							are a mobile gaming platform dedicated to turning
							your love for learning and trivia into real-world
							rewards.
						</p>
					</motion.div>
				</div>
			</section>

			{/* 3. Key Features */}
			<section className="py-16 px-8 bg-[rgb(253,253,240)]">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
						Why Choose Sanaank?
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: (
									<Target className="w-12 h-12 text-blue-600 mb-4" />
								),
								title: "Our Mission",
								description:
									"Create a dynamic platform where learning is not just fun but also rewarding. Empowering individuals by combining curiosity and competitive spirit with the thrill of gaming.",
							},
							{
								icon: (
									<CheckCircle className="w-12 h-12 text-green-600 mb-4" />
								),
								title: "What We Do",
								description:
									"Interactive Quizzes, Affordable Participation, and Seamless Experience. Join quizzes with a nominal entry fee of just ₹50 and unlock opportunities to win up to ₹1,00,000.",
							},
							{
								icon: (
									<Trophy className="w-12 h-12 text-yellow-600 mb-4" />
								),
								title: "Why Sanaank",
								description:
									"More than just a quiz app. A community of learners, thinkers, and achievers. Test your knowledge and join a vibrant network of competitors and enthusiasts.",
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								className="relative bg-white p-8 rounded-lg shadow-md text-center overflow-hidden group"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.2,
								}}>
								{feature.icon}
								<h3 className="text-xl font-semibold mb-4 text-gray-800">
									{feature.title}
								</h3>
								<p className="text-gray-600">
									{feature.description}
								</p>

								{/* Hover effect borders */}
								<div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-transparent group-hover:border-yellow-500 transition-all duration-300">
									{/* Top line */}
									<div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
									{/* Bottom line */}
									<div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-all duration-300"></div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 4. Our Vision Section */}
			<motion.section
				className="py-16 px-6 bg-white"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}>
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold mb-8 text-gray-800">
						Our Vision
						<div className="w-20 h-[0.15rem] bg-customYellow mx-auto mt-2"></div>
					</h2>
					<p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
						To redefine entertainment by creating a platform where
						every participant feels valued, inspired, and rewarded
						for their unique knowledge and skills.
					</p>
				</div>
			</motion.section>

			{/* 5. Call to Action */}
			<section
				className="bg-cover bg-center py-16 px-6"
				style={{
					backgroundImage: `url('/images/background/3.jpg')`,
				}}>
				<div className="container mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-bold text-black mb-6">
						Ready to Test Your Knowledge?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-xl text-black mb-8 max-w-2xl mx-auto">
						Join Sanaank today and turn your curiosity into an
						exciting opportunity to learn, compete, and win!
					</motion.p>
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-white text-gray-800 hover:bg-yellow-100 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
						Get Started
					</motion.button>
				</div>
			</section>
		</div>
	);
};

export default About;
