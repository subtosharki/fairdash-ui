module.exports = {
	content: ['./src/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#d1424c',
					secondary: '#b1b7ed',
					accent: '#64e5ab',
					neutral: '#201c27',
					'base-100': '#3f454b',
					info: '#89b9dc',
					success: '#78ddc2',
					warning: '#a0790d',
					error: '#e67082'
				}
			}
		]
	}
};
