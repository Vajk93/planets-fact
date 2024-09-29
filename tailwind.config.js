/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
		fontFamily: {
			'app-spartan': ['"Spartan"', 'sans-serif'],
			'app-antonio': ['"Antonio"', 'sans-serif'],
		},
		},
	},
	plugins: [],
}

