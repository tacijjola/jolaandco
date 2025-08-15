/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navySlate: "#2D3644",   // Primary text & main accents
        sage: "#96A4A5",        // Secondary highlights
        goldenWheat: "#9F8551", // Accent & symbol
        sandBeige: "#CAB69D",   // Subtle backgrounds
        lightStone: "#E0E2E0",  // Page background
      },
    },
  },
  plugins: [],
};




