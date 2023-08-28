/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Cairo: ["Cairo", "sans"],
            },
            colors: {
                blacky: "#262626",
                bluey: "#324C8D",
                darkGray: "#CBCBCB",
                mediumGray: "#DFE0E1",
                lightGray: "#EFEFEF",
            },
        },
    },
    plugins: [],
};
