/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fffefa', 
          '100': '#fcfbf5', 
          '200': '#faf4e3', 
          '300': '#f7eed5', 
          '400': '#f0ddb6', 
          '500': '#eac999', 
          '600': '#d4ae7d', 
          '700': '#b08656', 
          '800': '#8c6037', 
          '900': '#693e1e', 
          '950': '#45220d'
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
          '50': '#f0f7fa', 
          '100': '#e4f1f7', 
          '200': '#bcd9eb', 
          '300': '#97c0de', 
          '400': '#5a8ec7', 
          '500': '#245bae', 
          '600': '#1e4e9c', 
          '700': '#153b82', 
          '800': '#0e2a69', 
          '900': '#071b4f', 
          '950': '#030f33'
        },
        'gray': '#696762',
        'white': '#f5f5f5'
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')
  ],
};

module.exports = config;
