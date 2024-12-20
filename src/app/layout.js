import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
	title: "Sanaank - Quiz App",
	description: "An informational website for Sanaank quiz app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
