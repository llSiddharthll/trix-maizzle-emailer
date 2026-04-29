/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['emails/**/*.html'],
    static: {
      source: ['images/**/*.*'],
      destination: 'images',
    },
  },
  tailwind: {
    config: {
      important: true,
      theme: {
        extend: {
          colors: {
            'trix-yellow': '#F2D400',
            'trix-gold': '#D4AF37',
            'trix-dark': '#1A1A1A',
            'trix-light': '#FFFDE7',
            'trix-cream': '#FDFCF0',
          },
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            serif: ['Playfair Display', 'Georgia', 'serif'],
          },
        },
      },
    },
  },
}
