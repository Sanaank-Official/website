"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation , AnimatePresence } from "framer-motion";
import FAQSection from '../components/FAQ';
import TypingEffect from "../components/TypingEffect";
import StateSection from '../components/Statesections';
import {
  FaMusic,
  FaListAlt,
  FaStar,
  FaHeartbeat,
  FaRandom,
  FaClock,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.90,
      ease: "easeOut"
    }
  }
};


const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  const words = ["Productive", "Creative", "Relax", "Confidence"];
  const [setCurrentWordIndex] = useState(0);
  const [setShowCursor] = useState(true);
  const [selected, setSelected] = useState("Sleep");

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

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-center md:text-left space-y-6"
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
                className="px-7 py-1 text-white font-bold rounded-full bg-black  transition duration-100 h-8"
              >
                LEARN MORE
              </motion.a>
              <motion.a
                href="#download"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-7 py-1 text-black font-bold rounded-full bg-transparent hover:bg-black hover:text-white transition duration-100 h-8 border	"
              >
                DOWNLOAD
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="hidden md:flex justify-center items-center"
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
        className="bg-[rgb(240,244,253)] py-16 px-4"
      >
        <div className="container mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block"
            >
              Discover
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
              Top Features
            </h2>
            <div className="w-20 h-1 bg-customYellow mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <FaMusic />, title: "HD Sounds", desc: "Immersive high-quality audio experiences" },
              { icon: <FaListAlt />, title: "Playlist", desc: "Create and manage your custom soundscapes" },
              { icon: <FaStar />, title: "Favorites", desc: "Save and quickly access your preferred sounds" },
              { icon: <FaHeartbeat />, title: "Mood Detector", desc: "Intelligent mood-based sound recommendations" },
              { icon: <FaRandom />, title: "Shuffle", desc: "Randomize your audio experience" },
              { icon: <FaClock />, title: "Timer", desc: "Integrated productivity timer" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-customYellow text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <div>
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
<div className="bg-white py-16 flex justify-center items-center">
  <motion.div
    className="container mx-auto px-8 md:px-16 lg:px-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }} // Animation triggers once when 50% of the section is in view
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
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
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <Image
          src="/images/misc/5.png"
          alt="Feature Image"
          width={400}
          height={400}
          className="md:mr-8 mb-8 md:mb-0"
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
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Discover Section */}
        <div className="mb-6">
          <motion.span
            whileHover={{
              scale: 1.2,
              rotate: [0, 360],
              transition: { duration: 0.8, type: "spring", stiffness: 150 },
            }}
            className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md"
          >
            Discover
          </motion.span>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Enhance Your Productivity
        </h2>
        {/* Buttons and Dynamic Text */}
        <div>
          <div className="space-x-4 mb-4">
            {['Sleep', 'Focus', 'Relax'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-md font-semibold ${
                  selected === item
                    ? 'bg-yellow-400 text-white'
                    : 'bg-white text-yellow-300'
                } border border-yellow-300`}
                onClick={() => setSelected(item)}
              >
                {item}
              </motion.button>
            ))}
          </div>
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-700"
          >
            {selected === 'Sleep' && (
              <p>
                Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad.
              </p>
            )}
            {selected === 'Focus' && (
              <p>
                Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt.
              </p>
            )}
            {selected === 'Relax' && (
              <p>
                Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam.
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</div>

<div>
      <FAQSection />
    </div>

			{/* Customer Reviews Section */}
			<div className="bg-gray-100 py-16">
				<div className="container mx-auto px-8 md:px-16 lg:px-24">
					{/* Discover and Latest Buttons */}
					<div className="text-center mb-4">
						<span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block">
							Latest
						</span>
					</div>

					{/* Heading with underline */}
					<h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
						Customer Reviews
					</h2>
					<div className="w-16 h-1 bg-customYellow mx-auto mb-12"></div>

					{/* Customer Reviews Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Review Box 1 */}
						<div className="bg-[#f0f4fd] rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-300">
							{/* yellow stars */}
							<div className="flex mb-2">
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
							<p className="font-bold text-lg text-gray-800 mb-4">
								Excellent
							</p>
							{/* Review text */}
							<p className="mb-4 text-gray-700">
								"Elaxo has been a game-changer for my
								productivity. I highly recommend it!"
							</p>
						</div>

						{/* Review Box 2 */}
						<div className="bg-[#f0f4fd] rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-300">
							{/* yellow stars */}
							<div className="flex mb-2">
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
							<p className="font-bold text-lg text-gray-800 mb-4">
								Excellent
							</p>
							{/* Review text */}
							<p className="mb-4 text-gray-700">
								"A fantastic tool for streamlining my workflow.
								Highly recommended!"
							</p>
						</div>

						{/* Review Box 3 */}
						<div className="bg-[#f0f4fd] rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-300">
							{/* yellow stars */}
							<div className="flex mb-2">
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
							<p className="font-bold text-lg text-gray-800 mb-4">
								Excellent
							</p>
							{/* Review text */}
							<p className="mb-4 text-gray-700">
								"Using this app has increased my efficiency by
								50%. It's a must-have!"
							</p>
						</div>
					</div>

					{/* Slidable Box Feature */}
					<div className="mt-12">
						<button className="bg-customYellow text-white py-2 px-4 rounded-full">
							See More Reviews
						</button>
					</div>
				</div>
			</div>
      <div>
      <StateSection />
    </div>
			
			{/* Download Section */}
			<div className="bg-[#f7f8fc] py-16 flex items-center justify-center">
				{" "}
				{/* Center-align the entire section */}
				<div className="container mx-auto flex justify-center flex flex-col lg:flex-row items-center gap-8">
					{" "}
					{/* Flexbox for alignment */}
					{/* Left side: Text and Buttons */}
					<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
						{/* Download Heading */}
						<span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md mb-2">
							Download
						</span>
						<h2 className="text-3xl font-bold mb-4 text-gray-800">
							Available on iOS and Android
						</h2>
						<p className="text-gray-600 leading-relaxed mb-8">
							Sed ut perspiciatis unde omnis iste natus <br />
							error sit voluptatem accusantium doloremque <br />
							laudantium, totam rem aperiam, eaque ipsa quae{" "}
							<br />
							ab illo inventore veritatis et quasi architecto.
						</p>
						<div className="flex space-x-4">
							<a href="#">
								<Image
									src="/images/misc/download-appstore.png"
									alt="App Store"
									width={150}
									height={50}
								/>
							</a>
							<a href="#">
								<Image
									src="/images/misc/download-playstore.png"
									alt="Play Store"
									width={150}
									height={50}
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

			{/* Footer */}
			<footer className="bg-yellow-100 text-black py-8">
				<div className="container mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between">
					<a href="/">
						<Image
							src="/images/logo.png"
							alt="Elaxo Logo"
							width={70}
							height={21}
						/>
					</a>
					<nav>
						<ul className="flex space-x-6">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Company</a>
							</li>
							<li>
								<a href="#">Products</a>
							</li>
							<li>
								<a href="#">Pages</a>
							</li>
							<li>
								<a href="#">Elements</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</div>
	);
};

export default Home;
