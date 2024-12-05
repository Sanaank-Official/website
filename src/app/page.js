"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
	motion,
	useInView,
	useAnimation,
	AnimatePresence,
} from "framer-motion";
import FAQSection from "../components/FAQ";
import TypingEffect from "../components/TypingEffect";
import StateSection from "../components/Statesections";
import Footer from "../components/Footer";
import {
	MdAccessAlarm, MdCategory, MdMonetizationOn
} from "react-icons/md";
import Link from "next/link";

// Animation Variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.6,
		},
	},
};

const itemVariants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: "easeOut",
		},
	},
};

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const fadeOutVariants = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },  // Text moves left
  };
  
  const fadeOutImageVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },  // Image moves right
  };
const Home = () => {
	const words = ["Productive", "Creative", "Relax", "Confidence"];
	const [setCurrentWordIndex] = useState(0);
	const [setShowCursor] = useState(true);
	const [selected, setSelected] = useState("Download & Register");

	// Refs for scroll animations
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);

	// Intersection observers for animations
	const inView1 = useInView(ref1, { once: true, amount: 0.2 });
	const inView2 = useInView(ref2, { once: true, amount: 0.2 });
	const inView3 = useInView(ref3, { once: true, amount: 0.2 });
	const inView4 = useInView(ref4, { once: true, amount: 0.2 });

	return (
		<div className="overflow-x-hidden bg-white">
			{/* Hero Section with Enhanced Responsiveness */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative min-h-screen flex items-center justify-center"
>
  <div className="absolute inset-0">
    <Image
      src="/images/background/3.jpg"
      alt="Background Image"
      fill
      className="object-cover"
      priority
      quality={90}
    />
  </div>
  <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeOutVariants}
    transition={{ duration: 1 }}
    className="text-center md:text-left space-y-6 mt-36 md:mt-0" // Added margin-top for mobile view
  >
    {/* Typing Effect Heading */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
      <TypingEffect />
    </h1>
    <p className="text-base md:text-lg text-black mb-8">
      Enhance your productivity with our innovative focus app
    </p>
    <div className="flex justify-center md:justify-start space-x-4">
      <motion.a
        href="#features"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-7 py-1 text-white font-bold rounded-full bg-black transition duration-100 h-8"
      >
        LEARN MORE
      </motion.a>
      <motion.a
        href="#download"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-7 py-1 text-black font-bold rounded-full bg-transparent hover:bg-black hover:text-white transition duration-100 h-8 border"
      >
        DOWNLOAD
      </motion.a>
    </div>
  </motion.div>

  {/* Image section */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeOutImageVariants}
    transition={{ duration: 1 }}
    className="flex justify-center items-center mt-8 md:mt-0"
  >
    <Image
      src="/images/misc/1.png"
      alt="Side Image"
      width={528}
      height={658}
      className="animate-fade-in max-w-full h-auto"
    />
  </motion.div>
</div>


</motion.div>

{/* Features Section with Improved Responsiveness */}
<motion.div
  id="features"
  ref={ref1}
  initial="hidden"
  animate={inView1 ? "visible" : "hidden"}
  variants={containerVariants}
  className="bg-[rgb(253,253,240)] py-16 px-4"
>
  <div className="container mx-auto">
    <motion.div
      variants={itemVariants}
      className="text-center mb-12"
    >
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block tracking-widest"
      >
        DISCOVER
      </motion.span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
        Top Features
      </h2>
      <div className="w-20 h-[0.1rem] bg-customYellow mx-auto mt-4"></div>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView1 ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
    >
      {[
        {
          icon: <MdAccessAlarm />,
          title: "Participate Anytime",
          desc: "Anywhere: Download our mobile app and dive into an extensive range of quizzes right from your smartphone.",
        },
        {
          icon: <MdCategory />,
          title: "Diverse Quiz Categories",
          desc: "From general knowledge to niche fields, we offer quizzes across a variety of topics tailored to your interests and expertise.",
        },
        {
          icon: <MdMonetizationOn />,
          title: "Exciting Cash Prizes",
          desc: "Enroll in quizzes for as low as ₹50 and stand a chance to win cash prizes up to ₹10,00,000!",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white p-10 rounded-lg shadow-md relative flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Icon */}
          <div className="bg-customYellow text-white rounded-full w-24 h-24 absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-3xl">
            {feature.icon}
          </div>

          {/* Content Section */}
          <div className="pl-32">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>

				

			{/* Features Section */}
<div className="bg-white py-12 flex justify-center items-center min-h-full">
	<motion.div
		className="container mx-auto px-8 md:px-16 lg:px-24"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.5 }} // Animation triggers once when 50% of the section is in view
		transition={{
			duration: 0.8,
			type: "spring",
			stiffness: 100,
		}}
		variants={{
			hidden: { opacity: 0, y: 50 },
			visible: { opacity: 1, y: 0 },
		}}
	>
		<div className="flex flex-col justify-center items-center md:flex-row md:items-center">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.8,
					type: "spring",
					stiffness: 120,
				}}
			>
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
				}}
			>
				{/* Discover Section */}
				<div className="mb-8">
					<motion.span
						whileHover={{
							scale: 1.2,
							rotate: [0, 360],
							transition: {
								duration: 0.8,
								type: "spring",
								stiffness: 150,
							},
						}}
						className="text-sm font-bold text-customYellow bg-yellow-100 py-2 px-4 rounded-md tracking-widest"
					>
						PROFILE
					</motion.span>
				</div>

				<h2 className="text-4xl font-bold mb-6 text-gray-800">
					Enhance Your Productivity
				</h2>

				{/* Buttons and Dynamic Text */}
				<div>
					{/* Buttons (as list in mobile view) */}
					<div className="space-y-4 mb-6 md:space-x-4 md:space-y-0 md:flex md:flex-row">
						{["Download & Register", "Choose Your Quiz", "Win"].map((item) => (
							<motion.button
								key={item}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className={`px-5 py-3 rounded-md font-semibold w-full ${
									selected === item
										? "bg-yellow-400 text-white"
										: "bg-white text-yellow-300"
								} border border-yellow-300 shadow-md md:w-auto`}
								onClick={() => setSelected(item)}
							>
								{item}
							</motion.button>
						))}
					</div>

					{/* Paragraph based on selected button */}
					<motion.div
						key={selected}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						className="text-gray-700 text-lg"
					>
						{selected === "Download & Register" && (
							<p>
								Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad.
							</p>
						)}
						{selected === "Choose Your Quiz" && (
							<p>
								Ad pariatur nostrud pariatur exercitation ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt.
							</p>
						)}
						{selected === "Win" && (
							<p>
								Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam.
							</p>
						)}
					</motion.div>

					{/* Add "LEARN MORE" and "DOWNLOAD" buttons */}
					<div className="flex space-x-4 mt-8">
						<motion.a
							href="#features"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="px-7 py-1 text-white font-bold rounded-full bg-black transition duration-100 h-8"
						>
							LEARN MORE
						</motion.a>
						<motion.a
							href="#download"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="px-7 py-1 text-black font-bold rounded-full bg-transparent hover:bg-black hover:text-white transition duration-100 h-8 border"
						>
							DOWNLOAD
						</motion.a>
					</div>
				</div>
			</motion.div>
		</div>
	</motion.div>
</div>


			<div>
				<FAQSection />
			</div>

			{/* Customer Reviews Section */}
<div className="bg-gray-50 py-16">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Discover and Latest Buttons */}
        <div className="text-center mb-4">
            <span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block tracking-widest">
                LATEST
            </span>
        </div>

        {/* Heading with underline */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Customer Reviews
        </h2>
        <div className="w-20 h-[0.1rem] bg-customYellow mx-auto mb-12"></div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review Box 1 */}
            <div className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform transition-all duration-300" style={{ width: "370px", height: "360px" }}>
                {/* yellow stars */}
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
                {/* "Excellent" text */}
                <p className="font-bold text-lg text-gray-800 mb-4 text-left">
                    Excellent Experience
                </p>
                {/* Review text */}
                <p className="text-gray-700 text-left leading-relaxed">
                    Elaxo has revolutionized the way I approach my daily tasks. 
                    It’s intuitive, user-friendly, and packed with powerful features. 
                </p>
                {/* Reviewer Name */}
                <p className="mt-6 text-customYellow font-bold text-left">
                    - John Doe
                </p>
            </div>

            {/* Review Box 2 */}
            <div className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform transition-all duration-300" style={{ width: "370px", height: "360px" }}>
                {/* yellow stars */}
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
                {/* "Excellent" text */}
                <p className="font-bold text-lg text-gray-800 mb-4 text-left">
                    A Must-Have Tool
                </p>
                {/* Review text */}
                <p className="text-gray-700 text-left leading-relaxed">
                    This platform has completely streamlined my workflow. 
                    It’s a breeze to manage tasks and collaborate with my team. 
                    I’m amazed by how much time it saves me daily.
                </p>
                {/* Reviewer Name */}
                <p className="mt-6 text-customYellow font-bold text-left">
                    - Jane Smith
                </p>
            </div>

            {/* Review Box 3 */}
            <div className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform transition-all duration-300" style={{ width: "370px", height: "360px" }}>
                {/* yellow stars */}
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
                {/* "Excellent" text */}
                <p className="font-bold text-lg text-gray-800 mb-4 text-left">
                    Unmatched Efficiency
                </p>
                {/* Review text */}
                <p className="text-gray-700 text-left leading-relaxed">
                    Ever since I started using this app, my efficiency has skyrocketed. 
                    I recommend it to everyone looking to improve their productivity and simplify their workflows.
                </p>
                {/* Reviewer Name */}
                <p className="mt-6 text-customYellow font-bold text-left">
                    - Alex Johnson
                </p>
            </div>
        </div>
    </div>
</div>

			<div>
				<StateSection />
			</div>

			{/* Download Section */}
			<div className="bg-[#f7f8fc] pt-16 flex items-center justify-center">
				{" "}
				{/* Center-align the entire section */}
				<div className="container mx-auto flex flex-col lg:flex-row justify-around items-center gap-8">
					<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
						{/* Download Heading */}
						<span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md mb-4 tracking-widest">
							DOWNLOAD
						</span>
						<h2 className="text-3xl font-bold mb-5 text-gray-800">
							Available on iOS and Android
						</h2>
						<p className="text-gray-800 leading-loose mb-8">
							Transform your spare time into exciting moments of
							learning, fun, and rewards. <br />
							Sanaank is more than just a gaming app—it’s a
							platform where knowledge pays off. <br />
							<strong>
								Join thousands of winners now! Download the
								Sanaank app and start winning.
							</strong>
						</p>
						<div className="flex space-x-4">
							<a href="#">
								<Image
									src="/images/misc/download-appstore.png"
									alt="App Store"
									width={180}
									height={59}
								/>
							</a>
							<a href="#">
								<Image
									src="/images/misc/download-playstore.png"
									alt="Play Store"
									width={180}
									height={59}
								/>
							</a>
						</div>
					</div>
					{/* Right side: Phone Image */}
					<div className="flex-shrink-0">
						<Image
							src="/images/misc/2.png"
							alt="User Phone"
							width={300}
							height={600}
							className="animate-fade-in"
						/>
					</div>
				</div>
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
