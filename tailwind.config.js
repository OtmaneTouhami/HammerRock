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
            backgroundImage: {
                slash: "url('/src/assets/slash.png')",
                trains: "url('/src/assets/images/trains.webp')",
                construction: "url('/src/assets/images/CONSTRUCTION.webp')",
                miniere: "url('/src/assets/images/INDUSTRIE-MINIÈRE_1.webp')",
                public: "url('/src/assets/images/public.webp')",
                petrole: "url('/src/assets/images/petrole.webp')",
                agre: "url('/src/assets/images/AGRICULTURE.webp')",
                foret: "url('/src/assets/images/foret.webp')",
                "train-sm": "url('/src/assets/images/train-sm.webp')",
                "construction-sm":
                    "url('/src/assets/images/CONSTRUCTION-sm.webp')",
                "miniere-sm":
                    "url('/src/assets/images/INDUSTRIE MINIÈRE-sm.webp')",
                "public-sm": "url('/src/assets/images/public-sm.webp')",
                "petrole-sm": "url('/src/assets/images/petrole-sm.webp')",
                "agre-sm": "url('/src/assets/images/AGRICULTURE-sm.webp')",
                "foret-sm": "url('/src/assets/images/foret-sm.webp')",
            },
        },
    },
    plugins: [],
};

//e7b625
