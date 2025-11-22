/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'golden': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        'maroon': {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fad1d9',
          300: '#f7a8b8',
          400: '#f27491',
          500: '#e8446b',
          600: '#d32f55',
          700: '#b01e43',
          800: '#93193d',
          900: '#7f1838',
        },
        'burgundy': {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c9c9',
          300: '#f4a3a3',
          400: '#ec6d6d',
          500: '#e03e3e',
          600: '#c92a2a',
          700: '#a61e1e',
          800: '#7d1a1a',
          900: '#5c1a1a',
        },
      },
    },
  },
  plugins: [],
}
