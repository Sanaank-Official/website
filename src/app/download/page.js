"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ComingSoon = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-gray-50 text-black min-w-full min-h-screen flex flex-col items-center justify-between">
			{/* Animated Heading */}
			<div
				className="w-full text-center h-[40vh] md:h-[50vh] text-gray-900 px-10 py-28 md:p-40"
				style={{
					backgroundImage:
						"radial-gradient(circle, #dc8d00, #e39616, #e99f24, #f0a931, #f6b23c, #f6b23c, #f6b23c, #f6b23c, #f0a931, #e99f24, #e39616, #dc8d00)",
				}}>
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}>
					<h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-8 hidden md:block">
						Sanaank Quiz Gaming App
					</h1>
					<h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-8 md:hidden">
						Sanaank Quiz
						<br />
						Gaming App
					</h1>
					<h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
						Coming Soon...
					</h3>
				</motion.h1>
			</div>

			<motion.p
				className="w-full bg-yellow-50 text-left flex items-center gap-40 py-20 px-10 md:p-20"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.8 }}>
				<motion.image
					initial={{ opacity: 0, x: -80 }}
					animate={{ opacity: 1, x: 50 }}
					transition={{ delay: 0.8, duration: 2 }}
					className="hidden md:block">
					<Image
						src="/images/misc/arrows.svg"
						width={400}
						height={400}
					/>
				</motion.image>
				<div className="md:pr-40">
					<p className="text-customYellow text-2xl md:text-4xl font-semibold mb-8">
						Get ready to{" "}
						<span className="underline decoration-gray-200">
							turn your knowledge into real cash!
						</span>
					</p>
					<p className=" text-lg md:text-xl">
						The Sanaank Quiz Gaming App is launching soon, where
						answering trivia questions could earn you big rewards.
						<br />
						Test your skills, compete with others, and win real cash
						prizes — all from your phone!
					</p>
				</div>
			</motion.p>

			{/* Features Section */}
			<h2 className="mt-16 text-4xl font-bold text-center text-gray-800 text-shadow-sm">
				What to Expect?
			</h2>
			<motion.div
				className="mt-4 grid gap-10 md:grid-cols-3 w-full max-w-7xl p-10"
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5, duration: 0.8 }}>
				{[
					{
						title: "Cash Prizes",
						desc: "Win real money by answering questions correctly.",
					},
					{
						title: "Fun & Challenging Quizzes",
						desc: "Test your knowledge across a wide range of topics.",
					},
					{
						title: "Multiplayer Competition",
						desc: "Compete with players worldwide and rise to the top!",
					},
				].map((item, index) => (
					<motion.div
						key={index}
						className="bg-customYellow rounded-xl px-10 py-8 flex flex-col items-center justify-center"
						whileHover={{ scale: 1.05 }}>
						<h2 className="text-2xl font-semibold text-white drop-shadow-lg mb-4">
							{item.title}
						</h2>
						<p className="text-center text-gray-800">{item.desc}</p>
					</motion.div>
				))}
			</motion.div>

			{/* Call-to-Action */}
			<motion.div
				className="mt-12 text-center p-10 bg-yellow-50 w-full"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}>
				<h3 className="text-4xl font-semibold text-customYellow">
					Don&apos;t Miss Out!
				</h3>
				<p className="mt-4 text-lg md:text-center text-left text-gray-700">
					Sign up now for exclusive updates and early access. <br />
					Your chance to win is just around the corner!
					<br />
					<span className="font-semibold">
						Ready to play and win?
					</span>{" "}
					The countdown to cash prizes begins now!
				</p>
				<button
					className="mt-8 px-6 py-3 bg-customYellow text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600"
					onClick={() => alert("Sign-up feature coming soon!")}>
					Sign Up for Early Access!
				</button>
			</motion.div>
		</div>
	);
};

export default ComingSoon;
