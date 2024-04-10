import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: "rgb(255 253 249)"
        },
        blue: {
          primary: "#090979",
          light: "#00d4ff"
        },
        red: {
          100: "#cf3e1c"
        },
        black: {
          100: "rgb(6 2 2)"
        },
        gray: {
          100: "rgb(58 69 78)"
        }
      },
      backgroundImage: {
        "gradient-card": "linear-gradient( #eaeaf5, #00d4ff)"
      }
    },
  },
  plugins: [],
};
export default config;
