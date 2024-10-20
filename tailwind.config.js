/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dfd5e1',
          200: '#bfabc3',
          300: '#a082a6',
          400: '#805888',
          500: '#602e6a',
          600: '#4d2555',
          700: '#3a1c40',
          800: '#26122a',
          900: '#130915',
        },
      },
      fontFamily: {
        merienda: ['"Merienda"', 'cursive'], // Adding custom font
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      backgroundImage: {
        'search-bg': "url('/images/search-bg.jpg')",
      },
    },
  },
  plugins: [],
};
