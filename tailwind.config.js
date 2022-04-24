const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
    screens: {
      sp: "320px",
      tablet: "960px",
      desktop: "1280px",
    },
  },
  plugins: [],
  important: true,
};
