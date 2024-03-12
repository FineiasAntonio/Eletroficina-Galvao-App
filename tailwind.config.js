/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "tela": "445px",
      },
      margin: {
        "neg": "-8px",
      },
      colors: {
        "wheat": "#F8F8FF"
      },
    },
  },
  plugins: [],
}