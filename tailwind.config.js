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
                "translate-x-left": {
                    "0%": {
                        transform: "translateX(0)",
                    },
                    "100%": {
                        transform: "translateX(-6px)",
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
                "translate-x-left-reverse": {
                    "0%": {
                        transform: "translateX(-6px)",
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
                "jello-horizontal": {
                    "0%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                    "30%": {
                        transform: "scale3d(1.25, 0.75, 1)",
                    },
                    "40%": {
                        transform: "scale3d(0.75, 1.25, 1)",
                    },
                    "50%": {
                        transform: "scale3d(1.15, 0.85, 1)",
                    },
                    "65%": {
                        transform: "scale3d(0.95, 1.05, 1)",
                    },
                    "75%": {
                        transform: "scale3d(1.05, 0.95, 1)",
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                },
                "slide-in-blurred-top": {
                    "0%": {
                        "-webkit-transform": "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
                        transform: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
                        "-webkit-transform-origin": "50% 0%",
                        "transform-origin": "50% 0%",
                        "-webkit-filter": "blur(40px)",
                        filter: "blur(40px)",
                        opacity: 0,
                    },
                    "100%": {
                        "-webkit-transform": "translateY(0) scaleY(1) scaleX(1)",
                        transform: "translateY(0) scaleY(1) scaleX(1)",
                        "-webkit-transform-origin": "50% 50%",
                        "transform-origin": "50% 50%",
                        "-webkit-filter": "blur(0)",
                        filter: "blur(0)",
                        opacity: 1,
                    },
                },
            },
            animation: {
                "fill-circle": "modify-stroke-offset-to-0 300ms forwards",
                "empty-circle": "modify-stroke-offset-to-full 300ms",
                "move-right": "translate-x 300ms forwards",
                "move-left": "translate-x-left 300ms forwards",
                "move-right-reverse": "translate-x-reverse 300ms",
                "move-left-reverse": "translate-x-left-reverse 300ms forwards",
                "wave-hand": "wave 2500ms infinite",
                bump: "bump 300ms ease-out forwards",
                "jello-horizontal": "jello-horizontal 0.8s both",
                "slide-in-blurred-top": "slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
