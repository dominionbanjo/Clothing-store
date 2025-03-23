/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark-color)",
        dark_bg: "var(--dark-theme-background)",
        light_bg: "var(--light-theme-background)",
        light: "var(--light-color)",
        gold: "var(--gold)",
      },
    },
  },
  plugins: [],
};
