const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',


  // disable the Image Optimization API
  images: {
    unoptimized: true,
  },
})

module.exports = withNextra()
