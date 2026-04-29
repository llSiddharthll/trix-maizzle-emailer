/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './emails/**/*.html',
    './layouts/**/*.html',
    './components/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        trixYellow: '#F2D400',
        trixGold: '#D4AF37',
        trixDark: '#1A1A1A',
        trixLight: '#FFFDE7',
        trixCream: '#FDFCF0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
}
