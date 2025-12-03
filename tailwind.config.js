/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",   // scan Angular templates & TS files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00bcd4", // cyan (Material primary)
          light: "#62efff",
          dark: "#008ba3",
        },
        accent: {
          DEFAULT: "#e91e63", // pink (Material tertiary/accent)
          light: "#ff6090",
          dark: "#b0003a",
        },
        neutral: {
          DEFAULT: "#f5f5f5", // background gray
          dark: "#212121",    // dark mode base
        },
      },
      fontFamily: {
        sans: ["Roboto", "Inter", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
