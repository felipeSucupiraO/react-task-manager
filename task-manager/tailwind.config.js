/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aqua-green": "#3C6E71",
        "dark-gray": "#353535",
        "white": "#FFFFFF",
        "light-gray": "#D9D9D9",
        "royal-blue": "#284B63"
      },
    },
  },
  plugins: [],
}

