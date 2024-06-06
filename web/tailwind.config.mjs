/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        turquoise: '#37CEE0',
      },
      fontFamily: {
        body: ['Droid Sans Mono', 'monospace'],
        heading: ['Worcester Serial', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;