/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'header-light' : "url('../public/header-light.png')",
        'header-dark' : "url('../public/header-dark.png')"
      }
    },
  },
  plugins: [],
}