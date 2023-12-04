/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: "#0D6EFD",
        dark: "#1C1C1C",
        gray: {
          200: "#606060",
          300: "#DEE2E7",
          400: "#BDC4CD",
          500: "#8B96A5",
          600: "#505050",
          background: "#f7fafc",
        },
      },
      maxWidth: {
        img: "185px",
      },
    },
  },
  plugins: [],
};
