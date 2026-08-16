/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070B',
          900: '#0A0E14',
          800: '#0F141C',
          700: '#161C26',
          600: '#212936',
          500: '#323C4B',
        },
        mist: {
          400: '#5B6779',
          300: '#8B96A5',
          200: '#B7BFC9',
          100: '#E6EDF3',
        },
        signal: {
          teal: '#5EEAD4',
          indigo: '#818CF8',
          amber: '#F5B860',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(94,234,212,0.15), 0 8px 30px -8px rgba(94,234,212,0.25)',
      },
    },
  },
  plugins: [],
}
