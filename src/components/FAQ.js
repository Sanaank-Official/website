import { useState } from "react";

const FAQSection = () => {
	const [expandedIndex, setExpandedIndex] = useState(null);

	const handleToggle = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	// FAQs divided into two containers
	const faqsContainer1 = [
		{
			question: "How do I get the app for my phone?",
			answer: 'Downloading our quiz gaming app is quick and easy! Visit the Google Play Store or Apple App Store, search for our app name, and tap "Install". Once installed, sign up to start playing exciting quizzes and winning real cash prizes!',
		},
		{
			question: "What plan should I choose?",
			answer: "Our app offers multiple participation plans to suit everyone’s budget. For beginners, we recommend starting with the basic ₹50 entry fee plan, where you can win up to ₹1 lakh. Explore higher plans as you gain confidence to maximize your winnings!",
		},
		{
			question: "What happens to my app if I stop paying?",
			answer: "The app remains on your device, and you can still access free features. However, access to paid quizzes or cash contests will be restricted until you resume payments or recharge your wallet.",
		},
		{
			question: "Does it have in-app purchases?",
			answer: "Yes, the app features secure in-app purchases for adding money to your wallet, unlocking premium quizzes, and purchasing game perks. These options enhance your gaming experience and increase your chances of winning.",
		},
	];

	const faqsContainer2 = [
		{
			question: "Can I use this app on multiple devices?",
			answer: "Absolutely! You can log into your account on multiple devices using the same credentials. However, for security purposes, only one device can actively participate in quizzes at a time.",
		},
		{
			question: "Is my phone supported for this app?",
			answer: "Our app is compatible with most Android and iOS smartphones. Ensure your device has the latest operating system and at least 2GB of RAM for the best gaming experience. Check the app store for specific device requirements.",
		},
		{
			question: "How to deposit money?",
			answer: 'Depositing money is simple and secure. Go to the "Wallet" section of the app, select "Add Money", and choose your preferred payment method—UPI, credit/debit card, or net banking. Follow the prompts to complete your deposit instantly.',
		},
		{
			question: "How to withdraw money?",
			answer: 'Withdrawing your winnings is effortless. Navigate to the "Wallet" section, select "Withdraw", and enter the amount you wish to cash out. Choose your preferred withdrawal method (bank account or UPI) and confirm. Your winnings will be transferred securely within 24-48 hours.',
		},
	];

	return (
		<div className="bg-[rgb(253,253,240)] py-16">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-5 text-gray-800">
					FAQ
				</h2>
				<div className="w-32 mx-auto h-[0.1rem] bg-customYellow mb-12"></div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{/* Container 1 */}
					<div
						className="bg-white rounded-lg border border-gray-300 shadow-lg px-5"
						style={{ alignSelf: "start" }} // Independent alignment
					>
						<div className="flex flex-col">
							{faqsContainer1.map((faq, index) => (
								<div key={index}>
									<div
										className="flex justify-between items-start p-4 border-b cursor-pointer"
										onClick={() => handleToggle(index)}>
										<h3 className="text-lg font-bold text-gray-800 flex-1 text-left">
											{faq.question}
										</h3>
										<button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300">
											<span
												className={`faq-icon ${
													expandedIndex === index
														? "rotate-45"
														: ""
												}`}>
												{expandedIndex === index
													? "−"
													: "+"}
											</span>
										</button>
									</div>
									<div
										className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
											expandedIndex === index
												? "max-h-40 p-4"
												: "max-h-0"
										}`}>
										<p className="text-base text-gray-600 text-left">
											{faq.answer}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Container 2 */}
					<div
						className="bg-white rounded-lg border border-gray-300 shadow-lg px-5"
						style={{ alignSelf: "start" }} // Independent alignment
					>
						<div className="flex flex-col">
							{faqsContainer2.map((faq, index) => (
								<div key={index + faqsContainer1.length}>
									<div
										className="flex justify-between items-start p-4 border-b cursor-pointer"
										onClick={() =>
											handleToggle(
												index + faqsContainer1.length
											)
										}>
										<h3 className="text-lg font-bold text-gray-800 flex-1 text-left">
											{faq.question}
										</h3>
										<button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300 ">
											<span
												className={`faq-icon ${
													expandedIndex ===
													index +
														faqsContainer1.length
														? "rotate-45"
														: ""
												}`}>
												{expandedIndex ===
												index + faqsContainer1.length
													? "−"
													: "+"}
											</span>
										</button>
									</div>
									<div
										className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
											expandedIndex ===
											index + faqsContainer1.length
												? "max-h-40 p-4"
												: "max-h-0"
										}`}>
										<p className="text-base text-gray-600 text-left">
											{faq.answer}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
