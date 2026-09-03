/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#161820', paper: '#f7f3e9', signal: '#ffdd17', slate: '#252832' },
      fontFamily: { display: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'], serif: ['Playfair Display', 'serif'] },
    },
  },
  plugins: [],
};
