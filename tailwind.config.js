export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        soho: {
          black: '#070707', matte: '#0B0B0B', charcoal: '#161616', gold: '#C8A96B', bronze: '#8B6B3F', ivory: '#F5F1E8', muted: 'rgba(245,241,232,0.65)'
        }
      },
      fontFamily: { serif: ['"Cormorant Garamond"', 'serif'], sans: ['Inter', 'sans-serif'] }
    }
  },
  plugins: []
}
