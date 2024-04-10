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
        white: {
          100: "rgb(255 253 249)"
        },
        primary: "rgb(232 107 140)",
        secondary: "rgb(232 107 215)"
      }
    },
  },
  plugins: [],
};
export default config;
