/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        pop: "pop 0.15s linear",
        push: "push 0.15s linear",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        push: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
