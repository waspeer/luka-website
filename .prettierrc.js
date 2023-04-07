const config = {
  trailingComma: 'all',
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 100,
  endOfLine: 'auto',

  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '**/*.astro',
      options: { parser: 'astro' },
    },
  ],
};

module.exports = config;
