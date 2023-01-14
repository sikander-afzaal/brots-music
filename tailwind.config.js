const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        btnHover: "linear-gradient(to right, #a9e1fc, #e400ed)",
        heroMob: "url('/hero-mobile.jpg')",
        heroMid: "url('/hero-1920.jpg')",
        heroBig: "url('/hero-2560.jpg')",
      },
      colors: {
        pink: "#E400ED",
        lightBlue: "#A9E1FC",
        green: "#CEFF44",
        purple: "#850CEE",
        darkBlue: "#142FEC",
      },
      screens: {
        mid: "834px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
