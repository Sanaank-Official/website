import { useState } from "react";

const FAQSection = () => {
	const [expandedIndex, setExpandedIndex] = useState(null);

	const handleToggle = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className="bg-[rgb(253,253,240)] py-16">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-5 text-gray-800">
					FAQ
				</h2>
				<div className="w-32 mx-auto h-[0.1rem] bg-yellow-400 mb-12"></div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
					{/* Card 1 */}
					<div
						className="bg-white rounded-lg border border-gray-300 shadow-lg px-5"
						style={{ alignSelf: "start" }} // Ensure independent alignment
					>
						<div className="flex flex-col">
							{/* Question 1 */}
							<div
								className="flex justify-between items-start p-4 border-b cursor-pointer"
								onClick={() => handleToggle(0)}>
								<h3 className="text-lg font-bold text-gray-800 flex-1">
									What is Elaxo?
								</h3>
								<button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300">
									<span
										className={`faq-icon ${
											expandedIndex === 0
												? "rotate-45"
												: ""
										}`}>
										{expandedIndex === 0 ? "−" : "+"}
									</span>
								</button>
							</div>
							<div
								className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
									expandedIndex === 0
										? "max-h-40 p-4"
										: "max-h-0"
								}`}>
								<p className="text-sm text-gray-600">
									Elaxo is a productivity app designed to help
									you focus and improve your overall
									productivity.
								</p>
							</div>

							{/* Question 2 */}
							<div
								className="flex justify-between items-start p-4 border-b cursor-pointer"
								onClick={() => handleToggle(1)}>
								<h3 className="text-lg font-bold text-gray-800 flex-1">
									How does it work?
								</h3>
								<button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300">
									<span
										className={`faq-icon ${
											expandedIndex === 1
												? "rotate-45"
												: ""
										}`}>
										{expandedIndex === 1 ? "−" : "+"}
									</span>
								</button>
							</div>
							<div
								className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
									expandedIndex === 1
										? "max-h-40 p-4"
										: "max-h-0"
								}`}>
								<p className="text-sm text-gray-600">
									Elaxo helps you organize your tasks and
									maintain focus by minimizing distractions.
								</p>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div
						className="bg-white rounded-lg border border-gray-300 shadow-lg px-5"
						style={{ alignSelf: "start" }} // Ensure independent alignment
					>
						<div className="flex flex-col">
							{/* Question 3 */}
							<div
								className="flex justify-between items-start p-4 border-b cursor-pointer"
								onClick={() => handleToggle(2)}>
								<h3 className="text-lg font-bold text-gray-800 flex-1">
									Is it free to use?
								</h3>
								<button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300">
									<span
										className={`faq-icon ${
											expandedIndex === 2
												? "rotate-45"
												: ""
										}`}>
										{expandedIndex === 2 ? "−" : "+"}
									</span>
								</button>
							</div>
							<div
								className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
									expandedIndex === 2
										? "max-h-40 p-4"
										: "max-h-0"
								}`}>
								<p className="text-sm text-gray-600">
									Yes, Elaxo offers a free version with basic
									functionality. Premium features are
									available through a subscription.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
