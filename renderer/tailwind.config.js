const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      indigo: colors.indigo,
      teal: colors.teal,
      orange: colors.orange,
      // use all colors
      // ...colors,
      zinc: colors.zinc,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
}
