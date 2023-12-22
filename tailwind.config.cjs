/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f5fcfc', 
          '100': '#e9f6f7', 
          '200': '#ccecf0', 
          '300': '#acdee6', 
          '400': '#77c4d1', 
          '500': '#47a8bd', 
          '600': '#3a92ab', 
          '700': '#27708c', 
          '800': '#1a5270', 
          '900': '#0e3854', 
          '950': '#061f36'
        },
        'secondary': {
          '50': '#f5f8fa', 
          '100': '#edf3f7', 
          '200': '#d5e1eb', 
          '300': '#bfcdde', 
          '400': '#93a5c4', 
          '500': '#6e7dab', 
          '600': '#596899', 
          '700': '#3d4c80', 
          '800': '#273366', 
          '900': '#16204d', 
          '950': '#091030'
        },
        'accent': {
          '50': '#fffef7', 
          '100': '#fffced', 
          '200': '#fff7d6', 
          '300': '#fff0bd', 
          '400': '#ffde8a', 
          '500': '#ffc857', 
          '600': '#e6ab47', 
          '700': '#bf8330', 
          '800': '#99601f', 
          '900': '#734011', 
          '950': '#4a2407'
        },
        'black': '#22333b',
        'white': '#F7F7FF',
        'gray': '#bacacf',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')
  ],
};

module.exports = config;
