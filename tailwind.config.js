/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      },
      animation: {
        "fill-circle": "modify-stroke-offset-to-0 300ms forwards",
        "empty-circle": "modify-stroke-offset-to-full 300ms",
        "move-right": "translate-x 300ms forwards",
        "move-right-reverse": "translate-x-reverse 300ms",
      },
    },
  },
  plugins: [],
};
