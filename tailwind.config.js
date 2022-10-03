/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Alkalami: "alkalami",
    },
    extend: {
      colors: {
        "alta-primary": "#19345E",
      },
    },
  },
  plugins: [],
};
