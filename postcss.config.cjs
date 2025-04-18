module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-nesting': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {
      grid: true
    },
    ...(process.env.NODE_ENV === 'production' 
      ? { 
          cssnano: { 
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
              normalizeWhitespace: false,
              cssDeclarationSorter: true,
              reduceIdents: false,
              reduceInitial: false,
              zindex: false,
              mergeIdents: false
            }] 
          } 
        } 
      : {})
  }
}