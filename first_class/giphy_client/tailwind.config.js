/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: "rgb(255 253 249)"
        },
        gray: {
          100: "rgb(65 66 59)",
          // 100: "rgb(139 138 143)",
          200: "rgb(57 58 60)",
          300: "rgb(13 16 23)",
          400: "rgb(31 32 37)"
        },
        primary: "rgb(239 239 187)",
        secondary: "rgb(219 219 59)",
        transparent: "#00000047",
        blue: "rgb(13 21 49)"
      }
    },
  },
  plugins: [],
}

