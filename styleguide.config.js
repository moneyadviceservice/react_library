const path = require('path')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'React components library for Directories project',
  styleguideDir: 'dist-docs',
  moduleAliases: {
    '@maps/react_library': path.resolve(__dirname, 'src'),
  },
}
