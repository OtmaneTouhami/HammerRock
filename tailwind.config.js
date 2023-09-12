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
                goldBrown: "#ccb36b",
                Amber: "#FAC204",
                Black: "#040404",
                Boulder: "#747474",
                DoveGray: "#646464",
                LightBrown: "#8C5C03",
                DarkBrown: "#402A01",
            },
            backgroundImage:{
                slash:"url('/src/assets/slash.png')"
            }
        },
    },
    plugins: [],
};

//e7b625