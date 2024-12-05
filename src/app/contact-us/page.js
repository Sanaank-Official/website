"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaGlobe,
} from "react-icons/fa";
import Image from "next/image";
import "../../styles/Contact.css";
import Footer from "../../components/Footer";
export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setSending(true);

		try {
			const response = await fetch("/api/sendEmail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast.success("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				toast.error(
					"Failed to send message. Please try again after 10mins"
				);
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("Error sending message");
		} finally {
			setSending(false);
		}
	};

	return (
		<div className="contact-us">
			{/* Toast Container for displaying notifications */}
			<ToastContainer position="top-right" className="mt-24" />
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
					<p className="hero-subtitle">
						We&apos;d Love to Hear from You!
					</p>
				</div>
			</div>
			<p className="para1">
				<strong>Have questions, feedback, or need assistance?</strong>
				<br /> The Sanaank team is here to help. <br /> Whether
				you&apos;re a quiz enthusiast or new to our platform, we&apos;re
				just a message away.
			</p>
			<div className="custom-divider"></div>
			{/* Contact Form and Info Section */}
			<div className="contact-section">
				{/* Contact Form */}
				<div className="form-container">
					<h2 className="form-title">
						Alternatively, fill out the form below, and we&apos;ll
						get back to you as soon as possible:
					</h2>
					<form onSubmit={handleSubmit}>
						<label>Name</label>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
						/>

						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Your Email Address"
							value={formData.email}
							onChange={handleChange}
							required
						/>

						<label>Message</label>
						<textarea
							name="message"
							rows="5"
							placeholder="Your Query/Feedback"
							value={formData.message}
							onChange={handleChange}
							required></textarea>

						<button type="submit">
							{sending ? "Sending..." : "Submit Form"}
						</button>
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
							<strong>Monday to Saturday:</strong> 10:00 AM - 6:00
							PM
							<br />
							<strong>Sunday:</strong> Closed
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
