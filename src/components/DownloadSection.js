import Image from "next/image";
import Link from "next/link";

const DownloadSection = () => {
	return (
		<div className="bg-[#f7f8fc] pt-16 flex items-center justify-center">
			{/* Center-align the entire section */}
			<div className="container mx-auto flex flex-col lg:flex-row justify-around items-center px-4">
				{/* Left Side: Text Content */}
				<div className="flex flex-col items-start text-left pl-2 pr-4 w-full lg:w-auto">
					{/* Download Heading */}
					<span className="text-sm font-bold text-customYellow bg-yellow-100 py-1 px-3 rounded-md mb-4 tracking-widest">
						DOWNLOAD
					</span>
					<h2 className="text-[35px] font-bold mb-5 text-gray-800 font-inter">
						Available on iOS and Android
					</h2>

					<p className="text-customGray leading-loose mb-8 text-sm lg:text-base">
						Transform your spare time into exciting moments of
						learning, fun, and rewards.
						<br />
						Sanaank is more than just a gaming app—it&apos;s a
						platform where knowledge pays off.
						<br />
						<strong>
							Join thousands of winners now! Download the Sanaank
							app and start winning.
						</strong>
					</p>
					<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
						<Link href="/download">
							<Image
								src="/images/misc/download-appstore.png"
								alt="App Store"
								width={180}
								height={59}
							/>
						</Link>
						<Link href="/download">
							<Image
								src="/images/misc/download-playstore.png"
								alt="Play Store"
								width={180}
								height={59}
							/>
						</Link>
					</div>
				</div>
				{/* Right Side: Phone Image */}
				<div className="flex-shrink-0">
					<Image
						src="/images/ui/5.png"
						alt="User Phone"
						width={450}
						height={800}
						className="animate-fade-in"
					/>
				</div>
			</div>
		</div>
	);
};

export default DownloadSection;
