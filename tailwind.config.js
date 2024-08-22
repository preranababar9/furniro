/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        regular:['Regular'],
        medium:['Medium'],
        black:['Black']
      },
      colors:{
        peach : '#FFF3E3',
        brown : '#B88E2F',
        grey : "#666666",
        offwhite : "#F4F5F7",
        pink : "#FCF8F3",
        
      },
    },
  },
  plugins: [],
}

