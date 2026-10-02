/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        // Palette taken from the original style.css
        navy: { DEFAULT: "#002342", deep: "#001a33" },
        teal: {
          DEFAULT: "#0B6684", // buttons
          hero: "#0C7390", // footer / CTA button
          dark: "#054563", // dark teal text + buttons
          bright: "#2c8eb5", // video panel + inactive tab
        },
        sky: "#1fa2ff",
        ink: "#212529",
        mist: "#f4f6f8",
        go: { DEFAULT: "#449d44", dark: "#3a8a3a" },
        link: "#0b66c3",
      },
      backgroundImage: {
        "header-grad": "linear-gradient(115deg,#0D7491,#033958)",
        "footer-grad": "linear-gradient(105deg,#0C7390,#043C5A)",
        "ready-grad": "linear-gradient(to bottom,#001a33 0%,#002342 50%,#054563 100%)",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.35)",
        soft: "0 4px 14px rgba(0,35,66,0.12)",
      },
    },
  },
  plugins: [],
};
