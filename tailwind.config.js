/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans serif']
      },
      colors:  {
        darkpurple: '#802392',
        lightpurple: '#99FA3',
        darkgray: '#343633',
        softblack: '#0A0F0d',
        magenta: '#FF00FF',
      }
    },
  },
  plugins: [],
}
