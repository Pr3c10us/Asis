/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-0": {
      transform: "rotateX(0deg)",
    },
    ".rotate-x-20": {
      transform: "rotateX(20deg)",
    },
    ".rotate-x-40": {
      transform: "rotateX(40deg)",
    },
    ".rotate-x-60": {
      transform: "rotateX(60deg)",
    },
    ".rotate-x-90": {
      transform: "rotateX(90deg)",
    },
    ".-rotate-x-20": {
      transform: "rotateX(-20deg)",
    },
    ".-rotate-x-40": {
      transform: "rotateX(-40deg)",
    },
    ".-rotate-x-60": {
      transform: "rotateX(-60deg)",
    },
    ".-rotate-x-90": {
      transform: "rotateX(-90deg)",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
        asisDark: "#0B0B0B",
        asisGreen: "#003400",
        asisGold: "#4E3600",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        cinzel: ["Cinzel Decorative", "serif"],
        comforter: ["Comforter Brush", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "text-pulse": "text-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "text-pulse": {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [rotateX],
};
