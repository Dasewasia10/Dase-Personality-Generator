/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				courgette: ["Courgette", "sans-serif"],
				indieFlower: ["IndieFlower", "handwriting"]
			},
			colors: {
				"nearblue": "#033653",
				"temp1": "#0A2647",
				"temp2": "#144272",
				"temp3": "#205295",
				"temp4": "#2C74B3",
				"darkone": "#010440",
				"lightone": "#D9D9D9"
			},
		},
	},
	plugins: [],
};
