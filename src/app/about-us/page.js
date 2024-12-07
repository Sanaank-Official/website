"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="max-w-full bg-gray-50">
			{/* 1. Heading Section */}
			<section
				className="relative bg-cover bg-center flex items-center justify-center p-40"
				style={{
					backgroundImage: `url('/images/background/3.jpg')`,
					height: "40vh",
				}}>
				<div className="flex flex-col items-center justify-center text-center">
					<h1 className="text-5xl text-white font-bold drop-shadow-md">
						About Us
					</h1>
					<p className="text-xl text-black mt-2">
						Get to know us better
					</p>
				</div>
			</section>

			{/* 2. Welcome Section */}
			<motion.section
				className="py-16 px-8 bg-white text-center"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-4">
					Welcome to Sanaank – Where Knowledge Meets Rewards!
				</h2>
				<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
					At Sanaank, we believe that knowledge is more than
					power—it’s a gateway to endless possibilities. We are a
					mobile gaming platform dedicated to turning your love for
					learning and trivia into real-world rewards.
				</p>
			</motion.section>

			{/* 3. Our Mission Section */}
			<motion.section
				className="py-16 px-8 bg-gray-100 text-center"
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-4">Our Mission</h2>
				<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
					To create a dynamic platform where learning is not just fun
					but also rewarding. Sanaank empowers individuals by
					combining their curiosity and competitive spirit with the
					thrill of gaming.
				</p>
			</motion.section>

			{/* 4. What We Do Section */}
			<div className="bg-white py-12 flex justify-center items-center min-h-full">
				<motion.div
					className="container mx-auto px-8 md:px-16 lg:px-24"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{
						duration: 0.8,
						type: "spring",
						stiffness: 100,
					}}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}>
					<div className="flex flex-col justify-center items-center md:flex-row md:items-center">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.8,
								type: "spring",
								stiffness: 120,
							}}>
							<Image
								src="/images/misc/5.png"
								alt="Feature Image"
								width={540}
								height={591}
								className="md:mr-12 mb-8 md:mb-0 max-w-full h-auto"
							/>
						</motion.div>

						<motion.div
							className="max-w-xl text-left"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
							transition={{
								duration: 0.8,
								type: "spring",
								stiffness: 100,
							}}>
							<h2 className="text-3xl font-bold mb-6 text-gray-800">
								What We Do
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								Interactive Quizzes, Affordable Participation,
								and Seamless Experience. Join quizzes with a
								nominal entry fee of just ₹50 and unlock
								opportunities to win up to ₹1,00,000.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>

			{/* 5. Why Sanaank Section */}
			<motion.section
				className="py-16 px-8 bg-gray-100 text-center"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-4">Why Sanaank?</h2>
				<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
					Sanaank is more than just a quiz app. It’s a community of
					learners, thinkers, and achievers. With each quiz, you not
					only test your knowledge but also join a vibrant network of
					competitors and enthusiasts.
				</p>
			</motion.section>

			{/* 6. Our Vision Section */}
			<motion.section
				className="py-16 px-8 bg-white text-center"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-4">Our Vision</h2>
				<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
					To redefine entertainment by creating a platform where every
					participant feels valued, inspired, and rewarded for their
					unique knowledge and skills.
				</p>
			</motion.section>
		</div>
	);
};

export default About;
