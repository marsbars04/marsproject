var webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const arch = process.env.ARCH || process.arch;
const platform = process.env.PLATFORM || process.platform;

function assetFilter(assetFilename) {
  return !(/\.map$/.test(assetFilename));
}

module.exports = {
  externals: {
    electron: "require('electron')",
    buffer: "require('buffer')",
    child_process: "require('child_process')",
    crypto: "require('crypto')",
    events: "require('events')",
    fs: "require('fs')",
    http: "require('http')",
    https: "require('https')",
    assert: "require('assert')",
    dns: "require('dns')",
    net: "require('net')",
    os: "require('os')",
    path: "require('path')",
    querystring: "require('querystring')",
    readline: "require('readline')",
    repl: "require('repl')",
    stream: "require('stream')",
    string_decoder: "require('string_decoder')",
    url: "require('url')",
    util: "require('util')",
    zlib: "require('zlib')",
    ffi: "require('ffi')"
  },
  module: {
    rules: [{
      test: /\.node$/,
      use: 'node-loader'
    }]
  },
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
    hints: false,
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,

  },
  optimization: {
    nodeEnv: 'production',
    portableRecords: true,
    sideEffects: false,
    concatenateModules: true,
    usedExports: true,
    providedExports: true,
    occurrenceOrder: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
    mangleWasmImports: true,
    moduleIds: 'hashed',
    namedChunks: true,
    namedModules: true,
    noEmitOnErrors: true,
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    },
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: '\[\\/]node_modules[\\/]/',
          chunks: "async",
          priority: 1
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        cacheKeys(defaultCacheKeys) {
          delete defaultCacheKeys['uglify-js'];

          return Object.assign({},
            defaultCacheKeys, {
              'uglify-js': require('uglify-js/package.json').version
            },
          );
        },
        minify(file, sourceMap) {
          const uglifyJsOptions = {};

          if (sourceMap) {
            uglifyJsOptions.sourceMap = {
              content: sourceMap,
            };
          }

          return require('terser').minify(file, uglifyJsOptions);
        },
      })
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([{
    //     context: '.',
    //     from: 'app.package.json',
    //     to: 'package.json'
    //   },
    //   new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery"
    //   }),
    //   {
    //     context: "native-artifacts/precompiled-libraries/" + arch + "/" + platform,
    //     to: "native-artifacts/precompiled-libraries",
    //     from: {
    //       glob: "*",
    //       dot: true
    //     }
    //   },
    //   {
    //     context: ".",
    //     to: "",
    //     from: {
    //       glob: "native-artifacts/native-addons/*.node",
    //       dot: true
    //     }
    //   }
    // ], {
    //   ignore: [
    //     ".gitkeep",
    //     "**/.DS_Store",
    //     "**/Thumbs.db"
    //   ],
    //   debug: "warning"
    // })
  ]
};
