/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "630px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
      xxl: "1440px",
    },
    colors: {
      rangoonGreen: "#1A1A1A",
      black: "#000000",
      textBlack: "#1E1E1E",
      textWhite: "#FFFFFF",
      lightGrey: "#D9D9D9",
    },
  },
  plugins: [],
};
