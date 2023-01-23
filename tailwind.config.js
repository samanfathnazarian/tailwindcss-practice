/** @type {import('tailwindcss').Config} */
module.exports = {
  // "**" specifies that the search should include all subdirectories
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
    },
  },
  plugins: [],
};