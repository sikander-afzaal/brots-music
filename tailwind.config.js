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
        druk: ["Druk", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        btnGr: "linear-gradient(to bottom,#F600AC,#6CB1DE)",
        btnHover: "linear-gradient(to right, #a9e1fc, #e400ed)",
        heroMob: "url('/hero-mobile.jpg')",
        heroMid: "url('/hero-1920.jpg')",
        heroBig: "url('/hero-2560.jpg')",
        floorMob: "url('/floor-mobile.png')",
        floorMid: "url('/floor-1920.png')",
        floorBig: "url('/floor-2560.png')",
        wall: "url('/wall-bg.png')",
        card: "url('/bg-card.png')",
        mob: "url('/screen mobile.png')",
      },
      colors: {
        pink: "#E400ED",
        lightBlue: "#A9E1FC",
        green: "#CEFF44",
        purple: "#850CEE",
        darkBlue: "#142FEC",
        cream: "#EEEDE4",
      },
      screens: {
        mid: "834px",
        "1xl": "1366px",
        "3xl": "2000px",
      },
      animation: {
        colorChange: "colorChange 25s ease-in-out infinite alternate",
      },
      keyframes: {
        colorChange: {
          "0%": { color: "#E400ED" },
          "25%": { color: "#A9E1FC" },
          "50%": { color: "#CEFF44" },
          "75%": { color: "#850CEE" },
          "100%": { color: "#142FEC" },
        },
      },
    },
  },
  plugins: [],
};
