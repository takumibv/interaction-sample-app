const colors = require("tailwindcss/colors");
const { width } = require("tailwindcss/defaultTheme");

const widthTheme = () => ({
  ...width,
  ...Array(200)
    .fill(0)
    .reduce((payload, _, i) => {
      return { ...payload, [i]: `${i / 4}rem` };
    }, {}),
});

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: widthTheme,
      minWidth: widthTheme,
      maxWidth: widthTheme,
    },
    colors: {
      ...colors,
    },

    screens: {
      sp: "640px",
      tablet: "960px",
      desktop: "1280px",
    },
  },
  plugins: [],
  // important: true,
};
