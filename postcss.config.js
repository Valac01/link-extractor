const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = ({env}) => ({
  plugins: [
    tailwindcss('tailwind.config.js'),
    autoprefixer(),
    env === 'production' ? cssnano({ preset: 'default' }) : false
  ]
})