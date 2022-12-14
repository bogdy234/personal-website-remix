/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: [],
      keyframes: {
        "modify-stroke-offset-to-0": {
          "0%": {
            "stroke-dashoffset": 175.929,
          },
          "100%": {
            "stroke-dashoffset": 0,
          },
        },
        "modify-stroke-offset-to-full": {
          "0%": {
            "stroke-dashoffset": 0,
          },
          "100%": {
            "stroke-dashoffset": 175.929,
          },
        },
        "translate-x": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(6px)",
          },
        },
        "translate-x-reverse": {
          "0%": {
            transform: "translateX(6px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(14deg)",
          } /* The following five values can be played with to make the waving more or less extreme */,
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          } /* Reset for the last half to pause */,
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fill-circle": "modify-stroke-offset-to-0 300ms forwards",
        "empty-circle": "modify-stroke-offset-to-full 300ms",
        "move-right": "translate-x 300ms forwards",
        "move-right-reverse": "translate-x-reverse 300ms",
        "wave-hand": "wave 2500ms infinite",
        bump: "bump 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
