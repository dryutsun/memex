const defaultTheme = require("tailwindcss/defaultTheme");
const config = require("./tailwind.theme.config.cjs");
const themeConfiguration = process.env.THEME_KEY && config[process.env.THEME_KEY] ? config[process.env.THEME_KEY] : config.default;
const { colors } = themeConfiguration;


const screens = {
	'phone': '480px',
	'tablet': '640px',
	'laptop': '1024px',
	'desktop': '1280px',
}

const spacing = {
	'1': '0.25rem',
	'2': '0.5rem',
	'3': '0.75rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'7': '1.75rem',
	'8': '2rem',
};

const fontFamily = {
	sans: ['Poppins', 'Inter', ...defaultTheme.fontFamily.sans],
	sansbody: ['Source Sans Pro', 'Arial', ...defaultTheme.fontFamily.sans],
	serif: ['Roboto Serif', 'Georgia', ...defaultTheme.fontFamily.serif],
	icon: ['Kosugi Maru',  'Potta One', ...defaultTheme.fontFamily.sans],
	code: ['Roboto Mono', 'Inconsolata']
};

const borderRadius = {
	none: '0',
	sm: '0.125rem',
	default: '0.25rem',
	md: '0.375rem',
	lg: '0.5rem',
	full: '9999px',
};

const borderWidth = {
	'0': '0',
	'2': '2px',
	'4': '4px',
	'8': '8px',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	future: {
		hoverOnlyWhenSupported: true,
	},
	purge: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
		'./public/**/*.html',
	],
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
		'./public/**/*.html',
	],
	safelist: [''],
	theme: {
		extend: {
			borderRadius,
			borderWidth,
			fontFamily,
			screens,
			spacing,
			colors: {
				theme: {
					...colors,
				}
			},
			typography: (theme) => ({
				default: {
					css: {

					}
				}
			})
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
}

