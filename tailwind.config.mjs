/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        lg: "1120px",
      },
      maxWidth: {
        content: "81.5rem",
        // content: "72.125rem",
      },
      fontFamily: {
        sans: ["Raleway"],
      },
      colors: {
        black: "#171719",
        "gray-dark": "#2D2D37",
        "gray-light": "#A4A4A4",
        "mid-gray": "#828282",
        gray: "#B1B1B1",
        blue: "#1E9DD7",
        "blue-light": "#DCF0F9",
        red: "#FF5E5E",
        pink: "#E42F80",
      },
    },
  },
  safelist: ["!fill-gray", "!hover:fill-gray", "!bg-blue"],
  plugins: [],
}
