import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaGlobe,
} from "react-icons/fa";
import Image from "next/image";
import "../../styles/Contact.css";

export default function ContactUs() {
	return (
		<div className="contact-us">
			{/* Hero Section */}
			<div className="hero-section">
				<Image
					src="/images/background/3.jpg"
					alt="Contact Background"
					fill
					className="object-cover"
				/>
				<div className="hero-overlay">
					<h1 className="hero-title">Contact Us</h1>
					<p className="hero-subtitle">We’d Love to Hear from You!</p>
				</div>
			</div>

			<p className="para1">
				<strong>Have questions, feedback, or need assistance?</strong>
				<br /> The Sanaank team is here to help. <br /> Whether you're a
				quiz enthusiast or new to our platform, we’re just a message
				away.
			</p>
			<div className="custom-divider"></div>

			{/* Contact Form and Info Section */}
			<div className="contact-section">
				{/* Contact Form */}
				<div className="form-container">
					<h2 className="form-title">
						Alternatively, fill out the form below, and we’ll get
						back to you as soon as possible:
					</h2>
					<form>
						<label>Name</label>
						<input type="text" placeholder="Your Name" required />

						<label>Email</label>
						<input
							type="email"
							placeholder="Your Email Address"
							required
						/>

						<label>Message</label>
						<textarea
							rows="5"
							placeholder="Your Query/Feedback"
							required></textarea>

						<button type="submit">Submit Form</button>
					</form>
				</div>

				{/* Info Cards */}
				<div className="info-container">
					{/* Get in Touch Card */}
					<div className="card">
						<h2>Get in Touch</h2>
						<div className="flex">
							<FaMapMarkerAlt className="icon" />
							<p>
								Sanaank, K110, Crescent, Forest Trails, Bhugaon,
								Pune, 412115
							</p>
						</div>
						<div className="flex">
							<FaPhoneAlt className="icon" />
							<p>+91 9665657759</p>
						</div>
						<div className="flex">
							<FaEnvelope className="icon" />
							<p>support@sanaank.com</p>
						</div>
						<div className="flex">
							<FaGlobe className="icon" />
							<p>www.sanaank.com</p>
						</div>
					</div>

					{/* Support Hours Card */}
					<div className="card">
						<h2>Support Hours</h2>
						<div>
							<p>Our team is available to assist you:</p>
							<strong>Monday to Saturday:</strong> 10:00 AM – 6:00
							PM
							<br />
							<strong>Sunday:</strong> Closed
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
