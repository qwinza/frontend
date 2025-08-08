// tailwind.config.js
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        giGreen: "#38B000",  
        giCream: "#DAD7CD",
        darkGreen: "#132A13",
        giGrey: "#B2B5B3",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
