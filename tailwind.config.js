/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        "bounce-right": {
          "0%":   { transform: "translateX(100%)", opacity: "0" },
          "40%":  { transform: "translateX(-15px)", opacity: "1" },
          "70%":  { transform: "translateX(8px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "bounce-right": "bounce-right 0.8s ease-out forwards",
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}