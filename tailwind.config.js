/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#2370A6",
        "theme-black-color": "#1b1c1d",
        "theme-text-color": "#575757",
      },
      animation:{
        "spin-slow": "spin 15s linear infinite"
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }

    },
  },
  plugins: [],
}