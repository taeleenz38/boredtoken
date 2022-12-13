/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        width: {
          38: "9.8rem",
        },
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#3A677D",
      },
    },
  },
  plugins: [],
};
