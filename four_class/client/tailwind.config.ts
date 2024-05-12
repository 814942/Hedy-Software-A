import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "rgb(53 75 154)",
        white: "rgb(255 253 249)",
        black: "rgb(19 18 0)",
        gray: "rgb(235 235 235)",
        pink: "rgb(255 0 111)"
      }
    },
  },
  plugins: [],
};
export default config;
