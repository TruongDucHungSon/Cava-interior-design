import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,

				padding: {
					DEFAULT: '16px',
					lg: '60px',
				},
			},
			screens: {
				sm: '599.98px',
				md: '767.98px',
				lg: '1023.98px',
			},
			fontSize: {
				xs: 'clamp(0.75rem, 1.2vw, 0.875rem)', // Small size
				sm: 'clamp(0.875rem, 1.3vw, 1rem)', // Small-Medium size
				base: 'clamp(1rem, 1.5vw, 1.125rem)', // Default size
				lg: 'clamp(1.125rem, 1.7vw, 1.25rem)', // Large size
				xl: 'clamp(1.25rem, 2vw, 1.5rem)', // Extra Large size
				'2xl': 'clamp(1.5rem, 2.5vw, 2rem)', // 2x Large size
				'3xl': 'clamp(1.875rem, 3vw, 2.25rem)', // 3x Large size
			},

			fontFamily: {
				montserrat: ['Montserrat, sans-serif'],
				roboto: ['Roboto, sans-serif'],
			},
			backdropBlur: {
				10: '10px',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					blue: '#39a3b7',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					yellow: '#dac5a4',
					grey: '#58595b',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
