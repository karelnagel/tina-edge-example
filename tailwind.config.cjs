/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				fraunces: ['Fraunces Variable', 'sans-serif'],
			},
			colors: {
				background: "rgb(var(--color-background) / <alpha-value>)",
				foreground: "rgb(var(--color-foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
					foreground: "rgb(var(--color-primary_foreground) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
					foreground: "rgb(var(--color-secondary_foreground) / <alpha-value>)",
				},
				destructive: {
					DEFAULT: "rgb(var(--color-destructive) / <alpha-value>)",
					foreground: "rgb(var(--color-destructive_foreground) / <alpha-value>)",
				},
			},
			spacing: {
				header: "100px",
				"mobile-header": "60px"
			}
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
