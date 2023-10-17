/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fcfcfa', 
          '100': '#faf8f2', 
          '200': '#f2ede1', 
          '300': '#e8e0cf', 
          '400': '#d9c7ad', 
          '500': '#c6ac8f', 
          '600': '#b39374', 
          '700': '#947050', 
          '800': '#785134', 
          '900': '#59341d', 
          '950': '#3b1d0c'
        },
        'secondary': {
          '50': '#f5f5f5', 
          '100': '#ebeae8', 
          '200': '#c9c9c5', 
          '300': '#a8a7a3', 
          '400': '#696762', 
          '500': '#252422', 
          '600': '#24211e', 
          '700': '#1c1813', 
          '800': '#17120d', 
          '900': '#120c07', 
          '950': '#0a0603'
        },
        'accent': {
          '50': '#f5faf8', 
          '100': '#e9f2ee', 
          '200': '#cae0d4', 
          '300': '#abccb8', 
          '400': '#76a683', 
          '500': '#4b7f52', 
          '600': '#3d7344', 
          '700': '#2a5e30', 
          '800': '#1b4d20', 
          '900': '#0f3813', 
          '950': '#062409'
        },
        'gray': '#696762',
        'white': '#f5f5f5'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
