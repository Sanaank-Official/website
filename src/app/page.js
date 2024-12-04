"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Home = () => {
	const [textIndex, setTextIndex] = useState(0);
	const focusText = "Help to improve focus for more productive";
  const [selected, setSelected] = useState('Sleep');


	useEffect(() => {
		const textInterval = setInterval(() => {
			setTextIndex((prevIndex) => (prevIndex + 1) % focusText.length);
		}, 100);

		return () => clearInterval(textInterval);
	}, [focusText]);

	return (
		<div>
			{/* Home Section */}
			<div className="relative h-screen z-0">
				<Image
					src="/images/background/3.jpg"
					alt="Background Image"
					fill
					className="absolute inset-0 object-cover"
				/>
				<div className="relative z-10 flex items-center justify-center h-full px-8 md:px-16 lg:px-24">
					<div className="max-w-xl text-left">
						<h1 className="text-3xl font-bold text-black mb-4 md:text-4xl lg:text-5xl animate-type">
							{focusText.slice(0, textIndex)}
							<span className="text-white">
								{focusText[textIndex]}
							</span>
							{focusText.slice(textIndex + 1)}
						</h1>
						<p className="text-base text-black mb-8 md:text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt.
						</p>
						<div className="flex space-x-4 justify-start">
							<a
								href="#"
								className="px-6 py-3 text-white font-bold rounded-full bg-[rgb(129,103,230)] hover:scale-105 transform transition duration-300 ease-in-out">
								LEARN MORE
							</a>
							<a
								href="#"
								className="px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform transition duration-300 ease-in-out">
								DOWNLOAD
							</a>
						</div>
					</div>
					<Image
						src="/images/misc/1.png"
						alt="Side Image"
						width={528}
						height={658}
						className="hidden md:block animate-fade-in"
					/>
				</div>
			</div>

			<div className="bg-[rgb(240,244,253)] py-20">
				{" "}
				{/* Increased section height */}
				<div className="container mx-auto px-8 md:px-16 lg:px-24">
					{/* Discover Section */}
					<div className="text-center mb-6">
						<span className="text-sm font-bold text-yellow-500	 bg-yellow-100 py-1 px-3 rounded-md inline-block">
							Discover
						</span>
					</div>
					{/* Top Features Heading */}
					<h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
						Top Features
					</h2>
					{/* Underline */}
					<div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
					{/* Features Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
						{" "}
						{/* Increased gap between rows */}
						{/* Feature 1 */}
						<div className="flex items-center gap-6">
							{" "}
							{/* Closer spacing */}
							<div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
								<i className="fas fa-music"></i> {/* Icon */}
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-800 text-left">
									HD Sounds
								</h3>
								<p className="text-base text-gray-600 text-left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						{/* Feature 2 */}
						<div className="flex items-center gap-6">
							<div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
								<i className="fas fa-list-alt"></i> {/* Icon */}
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-800 text-left">
									Playlist
								</h3>
								<p className="text-base text-gray-600 text-left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						{/* Feature 3 */}
						<div className="flex items-center gap-6">
							<div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
								<i className="fas fa-star"></i> {/* Icon */}
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-800 text-left">
									Favorites
								</h3>
								<p className="text-base text-gray-600 text-left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						{/* Feature 4 */}
						<div className="flex items-center gap-6">
							<div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
								<i className="fas fa-heartbeat"></i>{" "}
								{/* Icon */}
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-800 text-left">
									Mood Detector
								</h3>
								<p className="text-base text-gray-600 text-left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						{/* Feature 5 */}
						<div className="flex items-center gap-6">
							<div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
								<i className="fas fa-random"></i> {/* Icon */}
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-800 text-left">
									Shuffle
								</h3>
								<p className="text-base text-gray-600 text-left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						{/* Feature 6 */}
						<div className="flex items-center gap-6">
							<div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
								<i className="fas fa-clock"></i> {/* Icon */}
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-800 text-left">
									Timer
								</h3>
								<p className="text-base text-gray-600 text-left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
<div className="bg-white py-16 flex justify-center items-center">
  <div className="container mx-auto px-8 md:px-16 lg:px-24">
    <div className="flex flex-col flex justify-center items-center md:flex-row md:items-center">
      <Image
        src="/images/misc/5.png"
        alt="Feature Image"
        width={400}
        height={400}
        className="md:mr-8 mb-8 md:mb-0"
      />
      <div className="max-w-xl text-left">
        {/* Discover Section */}
        <div className="mb-6">
          <span className="text-sm font-bold text-yellow-500 bg-yellow-100 py-1 px-3 rounded-md">
            Discover
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Enhance Your Productivity
        </h2>
        {/* Buttons and Dynamic Text */}
        <div>
        <div className="space-x-4 mb-4">
    {['Sleep', 'Focus', 'Relax'].map((item) => (
      <button
        key={item}
        className={`px-4 py-2 rounded-md font-semibold ${
          selected === item
            ? 'bg-yellow-400 text-white'
            : 'bg-white text-yellow-300'
        } border border-yellow-300`}
        onClick={() => setSelected(item)}
      >
        {item}
      </button>
    ))}
  </div>
          <div className="text-gray-700">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


			{/* FAQ Section */}
			<div className="bg-white py-16">
				<div className="container mx-auto px-8 md:px-16 lg:px-24">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
						Frequently Asked Questions
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="bg-gray-100 rounded-lg p-6 animate-fade-in">
							<h3 className="text-xl font-medium mb-2 text-gray-800">
								What is Elaxo?
							</h3>
							<p className="text-gray-600">
								Elaxo is a productivity app designed to help you
								focus and improve your overall productivity.
							</p>
						</div>
						{/* Add more FAQ items here */}
					</div>
				</div>
			</div>

			{/* Customer Reviews Section */}
			<div className="bg-gray-100 py-16">
				<div className="container mx-auto px-8 md:px-16 lg:px-24">
					{/* Discover and Latest Buttons */}
					<div className="text-center mb-4">
						<span className="text-sm font-bold text-yellow-500 bg-yellow-100 py-1 px-3 rounded-md inline-block">
							Latest
						</span>
					</div>

					{/* Heading with underline */}
					<h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
						Customer Reviews
					</h2>
					<div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>

					{/* Customer Reviews Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Review Box 1 */}
						<div className="bg-[#f0f4fd] rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-300">
							{/* yellow stars */}
							<div className="flex mb-2">
								{[...Array(5)].map((_, index) => (
									<svg
										key={index}
										className="w-5 h-5 text-yellow-500"
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
										className="w-5 h-5 text-yellow-500"
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
										className="w-5 h-5 text-yellow-500"
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
						<button className="bg-yellow-500 text-white py-2 px-4 rounded-full">
							See More Reviews
						</button>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className="bg-yellow-500 py-16 text-white">
				<div className="container mx-auto px-8 md:px-16 lg:px-24">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
						<div>
							<h3 className="text-4xl font-bold mb-2">2010</h3>
							<p>Year we've founded</p>
						</div>
						<div>
							<h3 className="text-4xl font-bold mb-2">3M</h3>
							<p>Monthly active users</p>
						</div>
						<div>
							<h3 className="text-4xl font-bold mb-2">100+</h3>
							<p>Team members</p>
						</div>
						<div>
							<h3 className="text-4xl font-bold mb-2">75</h3>
							<p>Countries using our product</p>
						</div>
					</div>
				</div>
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
						<span className="text-sm font-bold text-yellow-500 bg-yellow-100 py-1 px-3 rounded-md mb-2">
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
