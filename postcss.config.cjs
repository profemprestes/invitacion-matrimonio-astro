module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-nesting': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'default' } } : {})
  }
}
