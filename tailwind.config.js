/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			textShadow: {
				yellow: "0px 0px 1px #FFD700",
			},
			animation: {
				"fade-in-down": "fade-in-down 1s ease-out",
				"fade-in-up": "fade-in-up 1s ease-out",
				"slide-in-left": "slide-in-left 1s ease-out",
				"slide-in-right": "slide-in-right 1s ease-out",
			},
			keyframes: {
				"fade-in-down": {
					"0%": { opacity: "0", transform: "translateY(-20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"slide-in-left": {
					"0%": { opacity: "0", transform: "translateX(-50px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"slide-in-right": {
					"0%": { opacity: "0", transform: "translateX(50px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				customYellow: "#f6b23c",
				customGray: "#595d69",
				header: "#071c39",
			},
		},
	},
	plugins: [
		require("tailwindcss-textshadow"), // Requires a plugin for text shadows
	],
};
