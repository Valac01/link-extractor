const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: colors.white,
      gray: colors.blueGray,
      cyan: colors.cyan,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
