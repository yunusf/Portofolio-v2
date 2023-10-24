/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#a855f7', // dapat diakses dengan mudah di class
        dark: '#020617',
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

