/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeightNav: {
        bold700: '700',
      },
      fontSize: {
        '20px': '20px',
      },
      lineHeight: {
        '22.4px': '22.4px',
      },
      colors: {
        'bgnav': '#002F5C',
        'custom-light-blue': '#9FF',
        'blue-primary-600': '#003F7D',
      },
      height: {
        'h-nav': '120px',
        'h-slider': '516px',
        'h-img-slider': '531px',
      },
      width: {
        'w-slider': '1530px',
        'w-slides': '1134px;',
        'w-img-slider': '377px',
      },
      backgroundColor: {
        'bgDocument': '#6587A9'
      },
      padding:{
        'custom': '20px 519px 20px 531px',
      },
      gap:{
        'gap-nav': '80px;'
      },
    },
  },
  plugins: [],
}
