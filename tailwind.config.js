/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xll': '2000px',
      },
      backgroundImage: {
        'features-md': "url('/background-features-md.png')",
      },
      fontFamily: {
        'title': ['Jost', 'sans-serif'],
        'body': ['Sweet Sans Pro', 'sans-serif'],
      },
      colors: {
        'blue': '#083A5F',
        'dark-blue': '#021F34',
        'gold': '#E59115',
      },
    },
  },
  plugins: [],
};
