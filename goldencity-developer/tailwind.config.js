/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Maroon (Primary Brand Color)
        'maroon': {
          50: '#ffe5e5',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#B22222', // Firebrick Maroon (Elegant)
          600: '#A30000', // Premium Bright Maroon
          700: '#8B0000', // Dark Maroon
          800: '#800000', // Deep Maroon
          900: '#660000',
        },
        // Gray (Neutral UI Color)
        'gray': {
          50: '#FAFAFA', // Off White
          100: '#F5F5F5', // Light Gray
          200: '#E0E0E0', // Soft Gray
          300: '#BDBDBD', // Medium Gray
          400: '#9E9E9E',
          500: '#757575', // Dark Gray
          600: '#616161',
          700: '#424242', // Deep UI Gray
          800: '#303030',
          900: '#212121',
        },
        // Black
        'black': {
          DEFAULT: '#000000', // Pure Black
          soft: '#121212', // Soft Black (Modern UI Black)
        },
        // White
        'white': {
          DEFAULT: '#FFFFFF', // Pure White
          off: '#FAFAFA', // Off White
        },
      },
    },
  },
  plugins: [],
}
