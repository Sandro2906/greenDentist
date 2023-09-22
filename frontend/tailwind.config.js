/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.vue',
    './src/**/*.php',
  ],
  
  theme: {
    extend: {

      fontFamily:{
      dentist: ['Space Grotesk']
      }
    },
  },
  plugins: [],
}

