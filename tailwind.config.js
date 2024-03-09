/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "tela": "445px"
      },
      colors: {
        "wheat": "#F8F8FF"
      },
    },
  },
  plugins: [],
}