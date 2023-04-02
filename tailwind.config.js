/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '15':'60px',
      },
      margin:{
        '15':'60px',
        '22':'90px',
      },
      boxShadow: {
        '3xl': '0px 8px 20px rgba(0, 0, 0, 0.06)',
      },
      fontSize: {
        '3xxl': ['32px', '36px'],
        '4xxl': ['40px', '48px'],
        '6xxl': ['60px', '68px'],
      },
      colors:{
        'PrimaryYellow':'#F6C60D',
        'PrimaryBlue':'#00AAEF',
        'PrimaryDark':'#6F6B80',
        'SecondaryGrey':'#797979',
        'SecondaryBleue':'#6C77E5',
        'ThirdPampus':'#B38180',
        'ThirdGrey':'#F5F5F5',
      },
      backgroundImage:{
        'InvestmentBgc': "url('/public/assets/images/investment.jpg')",
        'WorkBgc': "url('/public/assets/images/work_banner.jpg')",
      },
      borderRadius: {
        'ss': '5px',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif',],
        'Poppins': ['Poppins', 'sans-serif',],

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      screens: {
        'llg': '1180px',
      },
      backgroundPosition:{
        'TopLeft': 'top 15px left 10%',
        'sujon': 'center center',
      },
    },
  },
  plugins: [],
}