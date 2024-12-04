import Image from "next/image";

export default function ContactUs() {
	return (
		<div className="contact-us">
			{/* Hero Section */}
			<div className="relative h-[40dvh]">
				<Image
					src="/images/background/3.jpg"
					alt="Contact Background"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20">
					<h1 className="text-5xl font-bold text-white">
						Contact Us
					</h1>
					<p className="text-xl text-white mt-2">
						We’d Love to Hear from You!
					</p>
				</div>
			</div>

			{/* Contact Info Section */}
			<div className="bg-white py-12 px-6">
				<div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{/* Address Card */}
					<div className="p-6 shadow-md border rounded-lg">
						<h2 className="text-xl font-bold">📍 Address</h2>
						<p className="mt-2 text-gray-600">
							Sanaank (Meterio Edutech Pvt Ltd)
							<br />
							K110, Crescent, Forest Trails,
							<br />
							Bhugaon, Bavdhan, Pune, 412115
						</p>
					</div>

					{/* Phone Card */}
					<div className="p-6 shadow-md border rounded-lg">
						<h2 className="text-xl font-bold">📞 Phone</h2>
						<p className="mt-2 text-gray-600">+91 9665657759</p>
					</div>

					{/* Email Card */}
					<div className="p-6 shadow-md border rounded-lg">
						<h2 className="text-xl font-bold">✉️ Email</h2>
						<p className="mt-2 text-gray-600">
							support@sanaank.com
						</p>
					</div>

					{/* Website Card */}
					<div className="p-6 shadow-md border rounded-lg">
						<h2 className="text-xl font-bold">🌐 Website</h2>
						<p className="mt-2 text-gray-600">www.sanaank.com</p>
					</div>

					{/* Support Hours */}
					<div className="p-6 shadow-md border rounded-lg">
						<h2 className="text-xl font-bold">⏰ Support Hours</h2>
						<p className="mt-2 text-gray-600">
							Monday to Saturday: 10:00 AM – 6:00 PM
							<br />
							Sunday: Closed
						</p>
					</div>

					{/* Follow Us */}
					<div className="p-6 shadow-md border rounded-lg">
						<h2 className="text-xl font-bold">🔗 Follow Us</h2>
						<p className="mt-2 text-gray-600">
							Facebook: @SanaankGaming
							<br />
							Instagram: @SanaankOfficial
							<br />
							Twitter: @Sanaank
						</p>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="bg-gray-100 py-12 px-6">
				<div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
					<h2 className="text-2xl font-bold mb-6 text-center">
						Contact Form
					</h2>
					<form>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Name
							</label>
							<input
								type="text"
								className="w-full p-3 border rounded-md"
								placeholder="Your Name"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Email
							</label>
							<input
								type="email"
								className="w-full p-3 border rounded-md"
								placeholder="Your Email Address"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Message
							</label>
							<textarea
								rows="5"
								className="w-full p-3 border rounded-md"
								placeholder="Your Query/Feedback"
								required></textarea>
						</div>
						<button
							type="submit"
							className="w-full p-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600">
							Submit Your Query
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
