/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         'primarycolor': '#13204E',
         'secondarycolor': '#9F1A1E',
         'thirdcolor': '#FA363C',
         'bgcolor': '#020A25'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage:{
        'wave' : "url('/wave.svg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
