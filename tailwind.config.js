/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueCharcoal: "#010520", // optional deep accent
        driftwood: "#B38F46",    // warm gold (CTAs, & symbol)
        bigStone:   "#132633",   // primary navy (headings/text)
        brightGray: "#343B4A",   // subtle borders / secondary text
        nepal:      "#94B4C6",   // soft blue accent
        mutedTeal:  "#4A6B6B",   // secondary accent
      },
    },
  },
  plugins: [],
};

