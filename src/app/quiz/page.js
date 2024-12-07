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

  const features = [
    {
      icon: faGamepad,
      title: "Diverse Quiz Universes",
      description:
        "Explore endless knowledge realms across multiple categories",
      additionalInfo:
        "From science to pop culture, challenge yourself in unique quiz dimensions",
    },
    {
      icon: faCoins,
      title: "Reward Ecosystem",
      description: "Transform knowledge into tangible rewards",
      additionalInfo:
        "Competitive entry fees with massive prize pools up to ₹1,00,000",
    },
    {
      icon: faLightbulb,
      title: "Intelligent Matchmaking",
      description: "Compete with players of similar skill levels",
      additionalInfo: "Smart algorithm ensures fair and exciting competitions",
    },
    {
      icon: faGraduationCap,
      title: "Learning Pathways",
      description: "Continuous growth through adaptive quizzes",
      additionalInfo:
        "Personalized quiz recommendations based on your performance",
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
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white overflow-hidden">
        {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}

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
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl ">
            Sanaank: Quiz Revolution
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-xl">
            Where Knowledge Meets Excitement and Rewards
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-yellow-600 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:bg-yellow-100 transition-all"
          >
            Start Your Quiz Journey
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section with Interactive Hover */}
      <section className="py-16 px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Innovative Quiz Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a revolutionary platform that transforms learning into an
            exciting adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className={`
                                relative overflow-hidden rounded-2xl p-6 text-center 
                                transition-all duration-300 shadow-lg
                                ${
                                  activeFeature === index
                                    ? "bg-yellow-500 text-white scale-105"
                                    : "bg-white text-gray-800"
                                }
                            `}
            >
              <div
                className={`
                                mb-4 w-20 h-20 mx-auto rounded-full flex items-center justify-center
                                ${
                                  activeFeature === index
                                    ? "bg-white text-yellow-500"
                                    : "bg-yellow-50 text-yellow-500"
                                }
                            `}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
              <AnimatePresence>
                {activeFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 text-sm"
                  >
                    {feature.additionalInfo}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quiz Steps Section */}
      <section className="py-16 px-6 md:px-16 bg-yellow-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Quiz Expedition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five dynamic steps to transform your knowledge into an exciting
            journey
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
                className="bg-white rounded-2xl p-6 text-center shadow-lg relative z-20"
              >
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
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Knowledge, Your Reward
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of quiz enthusiasts and turn your knowledge into
            exciting rewards
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-yellow-600 px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:bg-yellow-100 transition-all"
          >
            Download Sanaank Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
