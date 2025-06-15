/* eslint-env node */
const CracoEsbuildPlugin = require('craco-esbuild')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const webpack = require('webpack')
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        esbuildMinimizerOptions: {
          target: 'es2020',
          css: true,
        },
        esbuildLoaderOptions: {
          loader: 'tsx',
          target: 'es2020',
          jsxFactory: 'React.createElement',
          jsxFragment: 'React.Fragment',
        },
        skipEsbuildJest: false, // Optional: Use esbuild for Jest transforms
      },
    },
  ],
  eslint: {
    enable: true,
    mode: 'file', // Use .eslintrc.js instead of CRA's ESLint config
    configure: {
      ignore: true,
      useEslintrc: true,
    },
  },
  babel: {
    plugins: ['macros'],
  },
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: { env: {}, browser: {} },
        }),
        new VanillaExtractPlugin(),
        new RetryChunkLoadPlugin({
          cacheBust: `function() {
            return 'cache-bust=' + Date.now();
          }`,
          retryDelay: `function(retryAttempt) {
            return 2 ** (retryAttempt - 1) * 500;
          }`,
          maxRetries: 3,
        }),
      ],
    },
    configure: {
      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
          os: false,
          fs: false,
          tls: false,
          net: false,
          zlib: false,
          http: false,
          https: false,
          stream: false,
          crypto: false,
          buffer: false,
          module: false,
        },
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          maxSize: 5 * 1024 * 1024,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
            },
          },
        },
        runtimeChunk: 'single',
      },
    },
  },
}
