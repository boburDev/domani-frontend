/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        playfair: ["Playfair Display"],
      },
      colors: {
        rangoonGreen: "#1A1A1A",
        black: "#000000",
        textBlack: "#1E1E1E",
        textWhite: "#FFFFFF",
        lightGrey: "#D9D9D9",
        gainsboro: "#DFDFDF",
        iron: "#D8D8D8",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1650px",
        "2xl": "1920px",
      },
      container: {
        center: true,
        padding: "4px",
        screens: {
          sm: "100%",
          md: "730px",
          lg: "960px",
          xl: "1120px",
          xxl: "1300px",
          "2xl": "1650px",
        },
      },
    },
  },
  plugins: [],
};
