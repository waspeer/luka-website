module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.tsx'],
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
