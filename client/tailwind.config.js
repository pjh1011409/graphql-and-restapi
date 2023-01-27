/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      textShadow: {
        title: "5px 5px 8px #422b52, 5px 5px 8px #0000Fc",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
