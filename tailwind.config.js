/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './growth.html'],
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '0px',
    },
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        charcoal: '#1E2022',
        eucalyptus: '#3D5A45',
        ochre: '#D4AF6A',
        concrete: '#A6A8AA',
        offwhite: '#F7F7F5',
        hairline: '#E2E3E4',
      },
    },
  },
  plugins: [],
};
