import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="bg-gray-800 p-4">
			<ul className="flex space-x-8 text-white">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
				</li>
				<li>
					<Link href="/contact-us">Contact Us</Link>
				</li>
				<li>
					<Link href="/quiz">Themed Quiz Description</Link>
				</li>
			</ul>
		</nav>
	);
}
