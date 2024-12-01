import Navigation from "../components/Navigation";
import "./globals.css";

const geistSans = {
	src: "/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
};
const geistMono = {
	src: "/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
};

export const metadata = {
	title: "Sanaank - Quiz App",
	description: "An information website for quiz app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
