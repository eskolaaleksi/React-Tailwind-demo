const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#d2f6f9",
          DEFAULT: "#1dd1e1",
          shock: "#0000ff",
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [],
};
