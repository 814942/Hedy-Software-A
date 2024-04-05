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
        red: {
          primary: "rgb(211 37 49)",
          light: "rgb(230 0 25)"
        },
        black: {
          100: "rgb(6 2 2)"
        }
      }
    },
  },
  plugins: [],
};
export default config;
