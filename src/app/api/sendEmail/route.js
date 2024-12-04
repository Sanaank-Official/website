// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;

		// Configure Nodemailer transporter
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		try {
			await transporter.sendMail({
				from: email,
				to: process.env.EMAIL_USER,
				subject: `New message from sanaak.com contact form`,
				text: message,
				html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
			});

			res.status(200).json({ message: "Email sent successfully" });
		} catch (error) {
			console.error("Error sending email:", error);
			res.status(500).json({ message: "Error sending email" });
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
