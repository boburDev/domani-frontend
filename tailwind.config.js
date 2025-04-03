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
        playfair: ["playfairDisplay"],
      },
    },
    screens: {
      sm: "480px", // Small screens (phones in portrait mode)
      md: "768px", // Tablets in portrait mode
      lg: "1024px", // Tablets in landscape mode
      xl: "1440px", // Large screens (laptops, desktops)
      xxl: "1650px", // Extra large screens
      "2xl": "1920px", // Full HD (base size)
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
    colors: {
      rangoonGreen: "#1A1A1A",
      black: "#000000",
      textBlack: "#1E1E1E",
      textWhite: "#FFFFFF",
      lightGrey: "#D9D9D9",
      gainsboro: "#DFDFDF",
    },
  },
  plugins: [],
};
