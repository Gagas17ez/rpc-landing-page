/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        fontFamily: {
            "theme-heading": ["'Exo 2'", "sans-serif"],
            "theme-content": ["Alegreya Sans", "sans-serif"],
        },
        extend: {
            colors: {
                "theme-primary": "#9937a6",
                "theme-primary-dark":"#C475CE",
                "theme-secondary": "#7A77FF",
                "theme-grayish-blue": "#9194A1",
                "theme-dark-blue": "rgb(37, 43, 70)",
                "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
