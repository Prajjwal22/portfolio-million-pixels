import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas": "var(--bebas-font)",
        "poppins": "var(--poppins-font)",
      },
      content: {
        'arrowRightIcon': 'url("../public/arrow.png")',
      },
      backgroundSize: {
        "blursize":"250px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "primary":"#252525",
        "secondary" : "#EFEFEF"
      },
      borderColor: {
        "primary":"#252525"
      },
      colors:{
        "primary":"#1C1C1C",
        "mute":"#BFBFBF",
        "secondary":"#EFEFEF"
      },
    },
  },
  plugins: [],
};
export default config;
