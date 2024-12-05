import nodemailer from "nodemailer";

// Create an in-memory cache using Map for email throttling
const emailCache = new Map();

export async function POST(req) {
	const { name, email, message } = await req.json();

	// Check if the user has sent an email in the last 10 minutes (600 seconds)
	const currentTime = Date.now();
	const lastSentTime = emailCache.get(email);

	if (lastSentTime && currentTime - lastSentTime < 600 * 1000) {
		return new Response(
			JSON.stringify({
				message:
					"You can only send one email every 10 minutes. Please wait and try again.",
			}),
			{ status: 429 }
		);
	}

	// Set up Nodemailer transport
	const transporter = nodemailer.createTransport({
		service: "gmail", // Or your preferred SMTP provider
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	// Compose the email
	const mailOptions = {
		from: email,
		to: process.env.EMAIL_REC, // Your email address
		subject: "New Contact Form Submission - sanaank.com",
		text: message,
		//     `You have a new message from your contact form:

		// Name: ${name}
		// Email: ${email}
		// Message: ${message}`
		html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
	};

	try {
		// Send the email
		await transporter.sendMail(mailOptions);

		// Update the cache with the current time
		emailCache.set(email, currentTime);

		return new Response(
			JSON.stringify({ message: "Email sent successfully" }),
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response(
			JSON.stringify({ message: "Error sending email" }),
			{ status: 500 }
		);
	}
}
