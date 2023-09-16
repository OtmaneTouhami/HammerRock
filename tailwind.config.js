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
                trains: "url('/src/assets/images/trains.jpg')",
                construction: "url('/src/assets/images/CONSTRUCTION.jpg')",
                miniere: "url('/src/assets/images/INDUSTRIE MINIÈRE.png')",
                public: "url('/src/assets/images/public.png')",
                petrole: "url('/src/assets/images/petrole.png')",
                agre: "url('/src/assets/images/AGRICULTURE.jpg')",
                foret: "url('/src/assets/images/foret.jpg')",
                "train-sm": "url('/src/assets/images/train-sm.jpg')",
                "construction-sm":
                    "url('/src/assets/images/CONSTRUCTION-sm.jpg')",
                "miniere-sm":
                    "url('/src/assets/images/INDUSTRIE MINIÈRE-sm.jpg')",
                "public-sm": "url('/src/assets/images/public-sm.jpg')",
                "petrole-sm": "url('/src/assets/images/petrole-sm.jpg')",
                "agre-sm": "url('/src/assets/images/AGRICULTURE-sm.jpg')",
                "foret-sm": "url('/src/assets/images/foret-sm.jpg')",
            },
        },
    },
    plugins: [],
};

//e7b625
