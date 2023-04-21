/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      'dark-cyan': 'hsl(158, 36%, 37%)',
      cream: 'hsl(30, 38%, 92%)',
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      fraunces: ['Fraunces', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

