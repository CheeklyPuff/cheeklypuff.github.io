module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },
  images: {
    unoptimized: true,
  },
}