/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // small screens
        'md': '768px', // medium screens
        'lg': '1024px', // large screens
        'xl': '1280px', // extra large screens
        '2xl': '1536px', // 2x large screens
      },
    },
  },
  plugins: [],
};
