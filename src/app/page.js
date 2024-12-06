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
import DownloadSection from "../components/DownloadSection";
import { MdAccessAlarm, MdCategory, MdMonetizationOn } from "react-icons/md";
import Link from "next/link";

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
const itemVariants2 = {
  hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and below
  visible: {
    opacity: 1,
    y: -10, // Moves upwards slightly
    transition: { duration: 0.8 }, // Smooth fade-up effect
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const fadeOutVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }, // Text moves left
};

const fadeOutImageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }, // Image moves right
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
  const ref5 = useRef(null);

  // Intersection observers for animations
  const inView1 = useInView(ref1, { once: true, amount: 0.2 });
  const inView2 = useInView(ref2, { once: true, amount: 0.2 });
  const inView3 = useInView(ref3, { once: true, amount: 0.2 });
  const inView5 = useInView(ref5, { once: true, amount: 0.2 });

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
            <p className="text-base md:text-lg text-black text-left mb-8">
              At Sanaank, we bring the thrill of gaming and the power of
              knowledge together! Our mobile gaming platform is designed for
              curious minds and competitive spirits.
            </p>
            <div className="flex md:justify-start md:space-x-4 gap-4">
              <motion.a
                href="#features"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-40 px-4 py-2 text-white font-bold rounded-full bg-black transition duration-100 text-center"
              >
                LEARN MORE
              </motion.a>
              <motion.a
                href="#download"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-40 px-4 py-2 text-black font-bold rounded-full bg-transparent hover:bg-black hover:text-white transition duration-100 border text-center"
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

      {/* Features Section with Enhanced Animation */}
      <motion.div
        id="features"
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-[rgb(253,253,240)] py-16 px-4"
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
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
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
          >
            {[
              {
                icon: <MdAccessAlarm />,
                title: "Participate Anytime, Anywhere",
                desc: "Download our mobile app and dive into an extensive range of quizzes right from your smartphone.",
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
                whileHover="hover"
                className="bg-white p-10 rounded-lg shadow-md relative flex flex-col justify-between overflow-hidden"
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
                  <p className="text-customGray">{feature.desc}</p>
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
                  {[
                    "Download & Register",
                    "Choose Your Quiz",
                    "Compete and Win",
                  ].map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`px-5 py-3 rounded-md font-semibold w-full ${
                        selected === item
                          ? "bg-yellow-400 text-white"
                          : "bg-gray-800 text-yellow-300 text-shadow-yellow"
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
                  className="text-customGray text-lg"
                >
                  {selected === "Download & Register" && (
                    <p>
                      Install the Sanaank app and create your profile in
                      minutes.
                    </p>
                  )}
                  {selected === "Choose Your Quiz" && (
                    <p>
                      Browse from our wide selection of quizzes and pick the one
                      that suits your knowledge.
                    </p>
                  )}
                  {selected === "Compete and Win" && (
                    <p>
                      Test your skills, outshine your competition, and claim
                      exciting cash rewards!
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

      {/* Customer Reviews Section with Animation */}
      <motion.div
        className="bg-gray-50 py-16"
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref5}
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Discover and Latest Buttons */}
          <motion.div className="text-center mb-4" variants={itemVariants}>
            <span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md inline-block tracking-widest">
              LATEST
            </span>
          </motion.div>

          {/* Heading with underline */}
          <motion.h2
            className="text-3xl font-bold text-center mb-4 text-gray-800"
            variants={itemVariants}
          >
            Customer Reviews
          </motion.h2>
          <motion.div
            className="w-20 h-[0.1rem] bg-customYellow mx-auto mb-12"
            variants={itemVariants}
          ></motion.div>

          {/* Customer Reviews Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            {/* Review Box 1 */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-[#f0f4fd] rounded-lg p-8 shadow-md transform"
              style={{ width: "370px", height: "450px" }}
            >
              {/* Existing review box content (unchanged) */}
              <div className="flex mb-6 mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-customYellow"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
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
                I've always loved trivia games, but Sanaank takes it to the next
                level! The app is super easy to use, and the variety of quizzes
                keeps things exciting. I started with a ₹50 quiz just to test
                the waters, and guess what? I won ₹50,000 on my first try! It's
                fun, rewarding, and a great way to challenge yourself. Highly
                recommend!
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
              style={{ width: "370px", height: "450px" }}
            >
              {/* Existing review box content (unchanged) */}
              <div className="flex mb-6 mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-customYellow"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
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
                Sanaank is hands down the best quiz gaming app I've ever used.
                The quizzes are well-designed and cover so many topics. I've
                learned a lot while playing, and the cash prizes are the cherry
                on top. With just ₹50, I entered a science quiz and won ₹100,000
                last week! This app is perfect for anyone who loves knowledge
                and rewards.
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
              style={{ width: "370px", height: "450px" }}
            >
              {/* Existing review box content (unchanged) */}
              <div className="flex mb-6 mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-customYellow"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
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
                I downloaded Sanaank out of curiosity, but now I'm hooked! The
                app is intuitive, and I love how affordable it is to participate
                in quizzes. It's a great way to test your knowledge and earn
                extra cash. I never thought I'd win ₹75,000 for answering
                questions on my favorite topic - sports! Thanks, Sanaank, for
                this amazing platform.
              </p>
              <p className="mt-6 text-customYellow font-bold text-left">
                - Arjun Mehta, Delhi
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div>
        <StateSection />
      </div>
      <div>
        <DownloadSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
