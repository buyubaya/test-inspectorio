const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/redux': path.resolve(__dirname, 'src/redux'),
      '@/api': path.resolve(__dirname, 'src/api'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/helpers': path.resolve(__dirname, 'src/helpers'),
      '@/core': path.resolve(__dirname, 'src/core'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#74e99c' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
