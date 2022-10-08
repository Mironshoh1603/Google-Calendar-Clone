/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: "Open Sans",
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
