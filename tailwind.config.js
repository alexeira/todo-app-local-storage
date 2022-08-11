/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'serif'],
      }
    },
  },
  plugins: [],
}



