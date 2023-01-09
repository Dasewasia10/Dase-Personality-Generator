/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				courgette: ["Courgette", "sans-serif"],
			},
			colors: {
				"nearblue": "#033653",
			},
		},
	},
	plugins: [],
};
