/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'cal': 'Cal Sans, sans-serif',
			},
			aspectRatio: {
				'4/3': '4 / 3',
			},
		},
	},
	plugins: [],
}
