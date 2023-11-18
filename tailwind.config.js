/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkGray: '#151515',
				lightGray: '#272727',
				cream: 'rgba(255, 255, 255, 0.87)',
			},
		},
	},
	plugins: [],
}
