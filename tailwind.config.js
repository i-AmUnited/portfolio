/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-10px 0px 1px rgb(255, 255, 255)',
      },
      colors:{
        'greenBrand': '#1DE455',
      },
    },
  },
  plugins: [],
}