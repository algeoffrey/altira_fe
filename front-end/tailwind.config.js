/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sauce', 'sans-serif'],
      },
      colors: {
        customBlack: '#363338',
        black: '#363338',
      },
    },
  },
  plugins: [],
}
