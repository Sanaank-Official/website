import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const comments = [
	{
		title: "A Game-Changer for Quiz Lovers!",
		content:
			"I've always loved trivia games, but Sanaank takes it to the next level! The app is super easy to use, and the variety of quizzes keeps things exciting. I started with a ₹50 quiz just to test the waters, and guess what? I won ₹50,000 on my first try! It's fun, rewarding, and a great way to challenge yourself. Highly recommend!",
		name: "- Rohan Sharma, Mumbai",
	},
	{
		title: "Learn, Play, and Earn – All in One App!",
		content:
			"Sanaank is hands down the best quiz gaming app I've ever used. The quizzes are well-designed and cover so many topics. I've learned a lot while playing, and the cash prizes are the cherry on top. With just ₹50, I entered a science quiz and won ₹100,000 last week! This app is perfect for anyone who loves knowledge and rewards.",
		name: "- Priya Verma, Bangalore",
	},
	{
		title: "Simple, Fun, and Rewarding!",
		content:
			"I downloaded Sanaank out of curiosity, but now I'm hooked! The app is intuitive, and I love how affordable it is to participate in quizzes. It's a great way to test your knowledge and earn extra cash. I never thought I'd win ₹75,000 for answering questions on my favorite topic - sports! Thanks, Sanaank, for this amazing platform.",
		name: "- Arjun Mehta, Delhi",
	},
];

const CustomerReviews = () => {
	// Check if the device is mobile using media query
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const ref5 = useRef(null);
	const inView5 = useInView(ref5, { once: true, amount: 0.2 });
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const handleSwipe = (swipeDirection) => {
		setDirection(swipeDirection === "left" ? 1 : -1);
		if (swipeDirection === "left") {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
		} else if (swipeDirection === "right") {
			setCurrentIndex(
				(prevIndex) =>
					(prevIndex - 1 + comments.length) % comments.length
			);
		}
	};
	const renderStars = () => (
		<div className="flex mb-4">
			{[...Array(5)].map((_, index) => (
				<svg
					key={index}
					className="w-5 h-5 text-customYellow"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					aria-hidden="true">
					<path
						fillRule="evenodd"
						d="M10 15l-5.19 2.73 1.41-5.67-4.61-4.03 5.72-.47L10 0l2.67 7.06 5.72.47-4.61 4.03 1.41 5.67L10 15z"
						clipRule="evenodd"
					/>
				</svg>
			))}
		</div>
	);
	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe("left"),
		onSwipedRight: () => handleSwipe("right"),
	});
	const slideVariants = {
		enter: (direction) => {
			return {
				x: direction > 0 ? "100%" : "-100%",
				opacity: 0,
			};
		},
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction) => {
			return {
				zIndex: 0,
				x: direction < 0 ? "100%" : "-100%",
				opacity: 0,
			};
		},
	};

	const swipeTransition = {
		type: "tween",
		stiffness: 300,
		damping: 30,
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
			y: 50,
			filter: "blur(0px)",
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
				duration: 0.8,
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				type: "spring",
				stiffness: 300,
			},
		},
	};

	return (
		<>
			{/* Conditional Rendering for Web and Mobile Views */}
			{isMobile ? (
				// Mobile view with swipe effect
				<motion.div
					className="bg-gray-50 py-16"
					initial="hidden"
					whileInView={"visible"}>
					<div className="container mx-auto px-4 sm:px-6">
						<motion.div className="text-center mb-4">
							<span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block tracking-widest">
								LATEST
							</span>
						</motion.div>

						<motion.h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
							Customer Reviews
						</motion.h2>

						<motion.div className="w-20 h-[0.1rem] bg-customYellow mx-auto mb-12"></motion.div>

						{/* Customer Review Section */}
						<motion.div
							className="relative w-full overflow-hidden"
							{...swipeHandlers}>
							<div
								className="relative w-full"
								style={{ height: "480px" }}>
								{/* Review Box */}
								<AnimatePresence
									initial={false}
									custom={direction}>
									<motion.div
										key={currentIndex}
										custom={direction}
										variants={slideVariants}
										initial="enter"
										animate="center"
										exit="exit"
										transition={swipeTransition}
										className="absolute h-full">
										<div
											className="bg-[#f0f4fd] rounded-lg p-6 shadow-md mx-auto
                    w-full"
											style={{
												maxWidth: "95%",
												minHeight: "480px",
											}}>
											{renderStars()}
											<p className="font-bold text-lg text-gray-800 mb-4 text-left">
												{comments[currentIndex].title}
											</p>
											<p className="text-gray-700 text-left leading-relaxed">
												{comments[currentIndex].content}
											</p>
											<p className="mt-6 text-customYellow font-bold text-left">
												{comments[currentIndex].name}
											</p>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>

							{/* Dots Navigation */}
							<div className="flex justify-center mt-4 space-x-2">
								{comments.map((_, index) => (
									<div
										key={index}
										className={`w-3 h-3 rounded-full ${
											currentIndex === index
												? "bg-customYellow"
												: "bg-gray-400"
										}`}
									/>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			) : (
				// Web view with original layout (non-swiping)
				<motion.div
					className="bg-gray-50 py-16"
					initial="hidden"
					animate={inView5 ? "visible" : "hidden"}
					variants={containerVariants}
					ref={ref5}>
					<div className="container mx-auto px-8 md:px-16 lg:px-24">
						{/* Discover and Latest Buttons */}
						<motion.div
							className="text-center mb-4"
							variants={itemVariants}>
							<span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block tracking-widest">
								LATEST
							</span>
						</motion.div>

						{/* Heading with underline */}
						<motion.h2
							className="text-3xl font-bold text-center mb-4 text-gray-800"
							variants={itemVariants}>
							Customer Reviews
						</motion.h2>
						<motion.div
							className="w-20 h-[0.1rem] bg-customYellow mx-auto mb-12"
							variants={itemVariants}></motion.div>

						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							variants={itemVariants}>
							{/* Review Box 1 */}
							<motion.div
								variants={itemVariants}
								whileHover="hover"
								className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform"
								style={{ width: "370px", height: "450px" }}>
								<div className="flex mb-6 mt-4">
									{[...Array(5)].map((_, index) => (
										<svg
											key={index}
											className="w-5 h-5 text-customYellow"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											aria-hidden="true">
											<path
												fillRule="evenodd"
												d="M10 15l-5.19 2.73 1.41-5.67-4.61-4.03 5.72-.47L10 0l2.67 7.06 5.72.47-4.61 4.03 1.41 5.67L10 15z"
												clipRule="evenodd"
											/>
										</svg>
									))}
								</div>
								<p className="font-bold text-lg text-gray-800 mb-4 text-left">
									A Game-Changer for Quiz Lovers!
								</p>
								<p className="text-gray-700 text-left leading-relaxed">
									I've always loved trivia games, but Sanaank
									takes it to the next level! The app is super
									easy to use, and the variety of quizzes
									keeps things exciting. I started with a ₹50
									quiz just to test the waters, and guess
									what? I won ₹50,000 on my first try! It's
									fun, rewarding, and a great way to challenge
									yourself. Highly recommend!
								</p>
								<p className="mt-6 text-customYellow font-bold text-left">
									- Rohan Sharma, Mumbai
								</p>
							</motion.div>

							{/* Review Box 2 */}
							<motion.div
								variants={itemVariants}
								whileHover="hover"
								className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform"
								style={{ width: "370px", height: "450px" }}>
								<div className="flex mb-6 mt-4">
									{[...Array(5)].map((_, index) => (
										<svg
											key={index}
											className="w-5 h-5 text-customYellow"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											aria-hidden="true">
											<path
												fillRule="evenodd"
												d="M10 15l-5.19 2.73 1.41-5.67-4.61-4.03 5.72-.47L10 0l2.67 7.06 5.72.47-4.61 4.03 1.41 5.67L10 15z"
												clipRule="evenodd"
											/>
										</svg>
									))}
								</div>
								<p className="font-bold text-lg text-gray-800 mb-4 text-left">
									Learn, Play, and Earn – All in One App!
								</p>
								<p className="text-gray-700 text-left leading-relaxed">
									Sanaank is hands down the best quiz gaming
									app I've ever used. The quizzes are
									well-designed and cover so many topics. The
									cash prizes are the cherry on top. With just
									₹50, I entered a science quiz and won
									₹100,000 last week! This app is perfect for
									anyone who loves knowledge and rewards.
								</p>
								<p className="mt-6 text-customYellow font-bold text-left">
									- Priya Verma, Bangalore
								</p>
							</motion.div>
							{/* Review Box 3 */}
							<motion.div
								variants={itemVariants}
								whileHover="hover"
								className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform"
								style={{ width: "370px", height: "450px" }}>
								{/* Existing review box content (unchanged) */}
								<div className="flex mb-6 mt-4">
									{[...Array(5)].map((_, index) => (
										<svg
											key={index}
											className="w-5 h-5 text-customYellow"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											aria-hidden="true">
											<path
												fillRule="evenodd"
												d="M10 15l-5.19 2.73 1.41-5.67-4.61-4.03 5.72-.47L10 0l2.67 7.06 5.72.47-4.61 4.03 1.41 5.67L10 15z"
												clipRule="evenodd"
											/>
										</svg>
									))}
								</div>
								<p className="font-bold text-lg text-gray-800 mb-4 text-left">
									Simple, Fun, and Rewarding!
								</p>
								<p className="text-gray-700 text-left leading-relaxed">
									I downloaded Sanaank out of curiosity, but
									now I'm hooked! The app is intuitive, and I
									love how affordable it is to participate in
									quizzes. It's a great way to test your
									knowledge and earn extra cash. I never
									thought I'd win ₹75,000 for answering
									questions on my favorite topic - sports!
									Thanks, Sanaank, for this amazing platform.
								</p>
								<p className="mt-6 text-customYellow font-bold text-left">
									- Arjun Mehta, Delhi
								</p>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default CustomerReviews;
