/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "375px" },
    },
    colors: {
      "moderate-cyan": "hsl(176, 50%, 47%)",
      "dark-cyan": "hsl(176, 72%, 28%)",
      "neutral-black": "hsl(0, 0%, 0%)",
      "dark-gray": "hsl(0, 0%, 48%)",
      "background-gray": "rgb(240, 240, 240)",
      white: "rgb(255,255,255)",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": 'url("/src/assets/images/image-hero-desktop.jpg")',
      },
      fontFamily: {
        comissioner: ["Commissioner", "sans-serif"],
      },
    },
  },
  plugins: [],
};
