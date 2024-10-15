/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-green": "#4caf4f",
                "custom-silver": "#F5F7FA",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                "hero-pattern": "url('../src/assets/heroimages.png')",
                "asida-pattern": "url('../src/assets/asidaimages10.png')",
                "main-pattern": "url('../src/assets/mainimages.png')",
                "wrapper-pattern": "url('../src/assets/wrapperimages.png')",
                "wrapper1-pattern": "url('../src/assets/wrapperimages1.png')",
                "wrapper2-pattern": "url('../src/assets/wrapperimages2.png')",
            },
            lineHeight: {
                "custom-76": "76px",
            },
        },
    },
    plugins: [],
};
